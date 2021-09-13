//Game class
const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    //methods to change UI
    const toRock = (UI) => {
        UI.style.backgroundPosition = '-50px 0px';
    }
    const toPaper = (UI) => {
        UI.style.backgroundPosition = '1px -98px';
    }
    const toScissors = (UI) => {
        UI.style.backgroundPosition = '-99px -98px';
    }
    const changeUI = (str, UI) => {
        if(str == 'rock')
        {
            toRock(UI);
        }
        else if(str == 'paper')
        {
            toPaper(UI);
        }
        else if(str == 'scissors')
        {
            toScissors(UI);
        }
    }
    //determine the winner
    const determine = (player,computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        const playerUI = document.getElementById('player-result');
        const computerUI = document.getElementById('cpu-result');
        player = player.toLowerCase();
        computer = computer.toLowerCase();

        changeUI(player, playerUI);
        changeUI(computer, computerUI);

        if(player === computer){
            result.textContent = 'Tie'
        }
        else if(player == 'paper'){
            if(computer == 'scissors'){
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'scissors'){
            if(computer == 'rock'){
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'rock'){
            if(computer == 'paper'){
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;

            }else{
                result.textContent = 'Player Won'
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }
    //Play a turn
    const play = () => {
        const scissor = document.querySelector('.scissor');
        const paper = document.querySelector('.paper');
        const rock = document.querySelector('.rock');
        const computerOptions = ['rock','paper','scissors']
        const playerOptions = [rock,paper,scissor];
        playerOptions.forEach(option => {
            option.addEventListener('click',function(){
                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];
                determine(this.innerText,computerChoice)
            })
        })
    }
    //Repeat Game
    play();
}
//Start Game
game();