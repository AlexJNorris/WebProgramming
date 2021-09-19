import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";
//write user data to html elements
const writeUserData = (user) => {
    const pfp = document.getElementById("pfp");
    const name = document.getElementById("name");
    const uname = document.getElementById("userName");
    const link = document.getElementById("link");
    pfp.src = user.data.avatar_url;
    name.textContent = "Name:    " + user.data.name;
    uname.textContent = "Username:    " + user.data.login;
    link.href = user.data.html_url;
    link.textContent = "GitHub Link";
}
//gets user data by GitHub API request
async function getUser(userName) {
    const octokit = new Octokit();
    const result = await octokit.request('GET /users/' + userName);

    console.log(`${result.data.avatar_url}`);
    writeUserData(result);
}
//adds listener to the search bar
const listener = () => {
    const input = document.getElementById("in");
    //listen for enter to send input value
    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            getUser(input.value)
        }
    });
}

listener();