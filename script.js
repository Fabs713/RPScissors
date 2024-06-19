// Randomize NPC choice //
function getComputerChoice() {
     cpuChoice = Math.floor(Math.random() * 3);
    if (cpuChoice === 0) {
            cpuRPS = "Rock";
    } else if (cpuChoice === 1) {
            cpuRPS = "Paper";
    } else {
            cpuRPS = "Scissors";
    }
    return cpuRPS;
}
getComputerChoice();
console.log(cpuRPS);
// Prompt for Human's choice //
function getHumanChoice() {
    huChoice = prompt("0 for Rock, 1 for Paper, 2 for Scissors");
    if (huChoice === "0") {
        huRPS = "Rock";
    } else if (huChoice === "1") {
        huRPS = "Paper";
    } else if (huChoice === "2") {
        huRPS = "Scissors";
    } else {
        alert("Invalid choice.");
        huRPS = null;
    }
    return huRPS;

} 
getHumanChoice();
let humanScore = 0;
let cpuScore = 0; 


function playRound(huRPS, cpuRPS) {
    let win = 0;
    let lose = 0;
    if (cpuRPS == "Rock") {

        if (huRPS == "Rock") {
            console.log("Tie round!");   
        } else if (huRPS == "Paper") {
            console.log("You win! Paper beats Rock!");
            win = 1;
        } else if (huRPS == "Scissors") {
            console.log("You lose! Rock beats Scissors!");
            lose = 1;
        }

    } else if (cpuRPS == "Paper") {
        if (huRPS == "Rock") {
            console.log("You lose! Paper beats Rock!");
            lose = 1; 
        } else if (huRPS == "Paper") {
            console.log("Tie round!");
        } else if (huRPS == "Scissors") {
            console.log("You win! Scissors beats Paper!");
            win = 1;
        }

    } else if (cpuRPS == "Scissors") {
        if (huRPS == "Rock") {
            console.log("You win! Rock beats Scissors!");
            win = 1;
            return win;   
        } else if (huRPS == "Paper") {
            console.log("You lose! Scissors beats Paper!");
            lose = 1;
        } else if (huRPS == "Scissors") {
            console.log("Tie round!");
        }
    }
    
    if (win === 1) {
        humanScore++;
    } else if (lose === 1 && humanScore > 0) {
        humanScore--;
        cpuScore++;
    } else if (lose === 1) {
        cpuScore++;
    }
    
}

    

    

playRound(huRPS, cpuRPS);
console.log("Your score: ", humanScore);
console.log("CPU: ", cpuScore);