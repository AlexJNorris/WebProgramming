
//update image dive based on inout picture
function upDate(previewPic){
    const imageDiv = document.querySelector('#image');
    imageDiv.style.backgroundImage = "url('"+previewPic.src + "')";
    imageDiv.textContent = previewPic.alt;
}

function unDo(){

    const imageDiv = document.querySelector('#image');
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.textContent = "Hover over an image below to display here.";
}
