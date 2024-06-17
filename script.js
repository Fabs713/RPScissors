// Randomize NPC choice //
function getComputerChoice() {
         cpuChoice = Math.floor(Math.random() * 3);
        if (cpuChoice === 0) {
            rps = "Rock";
        } else if (cpuChoice === 1) {
            rps = "Paper";
        } else {
            rps = "Scissors";
        }
        return rps;
}
getComputerChoice();
console.log(getComputerChoice());

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

console.log(getHumanChoice());