let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

const getComputerChoice = () => {
    const choices = ["r", "p", "s"];
    const randomNumber =  Math.floor(Math.random()*3);
    return choices[randomNumber];
}

const convertToWord = (letter) => {
    if (letter == "r") return "Rock";
    if (letter == "p") return "Paper";
    if(letter = "s") return "Scissors";
}

const win = (userChoice, computerChoice) => {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "User".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} . You win !`;
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove("green-glow");
    },300);
}

const loose = (userChoice, computerChoice) => {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "User".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} looses to ${convertToWord(computerChoice)}${smallCompWord} . You lost ...`;
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove("red-glow");
    },300);
}

const draw = (userChoice, computerChoice) => {
    const smallUserWord = "User".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord} . It's a draw.`;
    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove("gray-glow");
    },300);
}

const game = (userChoice) => {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rs" :
        case "pr" :
        case "sp" :
            //user wins
            win(userChoice, computerChoice);
            break;
        case "rp" :
        case "ps" :
        case "sr" :
            //computer wins    
            loose(userChoice, computerChoice);
            break;
        case "rr" :
        case "pp" :
        case "ss" :
            //it's a draw    
            draw(userChoice, computerChoice);
            break;
    }
}

const main = () =>{
    rock_div.addEventListener('click', () => {
        game("r");
    });
    
    paper_div.addEventListener('click', () => {
        game("p");
    })
    
    scissors_div.addEventListener('click', () => {
        game("s");
    })    
}

main();