function getComputerChoice() {
    const choices = ["Rock","Paper","Scissors"];
    const randomChosen = choices[Math.floor(Math.random()*choices.length)];
    return randomChosen;
}

//console.log(getComputerChoice())

function playerRound() {
    let guess = prompt("Please choose: Rock, Paper or Scissors?","").toLowerCase();
    playerSelection = guess[0].toUpperCase() + guess.slice(1);
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    //const list = ["rock","paper","scissors"];
    //if (guess !== list) {
    //return;}
     if (playerSelection === computerSelection) {
        console.log( "Tied! Play again" );
    } else if ((playerSelection === "Rock") && (computerSelection === "Scissors")) {
        console.log( "You Win! Rock beats Scissors");
    } else if ((playerSelection === "Scissors") && (computerSelection === "Paper")) {
        console.log( "You Win! Scissors beats Paper");
    } else if ((playerSelection === "Paper") && (computerSelection === "Rock")) {
        console.log( "You Win! Paper beats Rock");
    } else if ((playerSelection === "Scissors") && (computerSelection === "Rock")) {
        console.log( "You Lose! Rock beats Scissors");
    } else if ((playerSelection === "Paper") && (computerSelection === "Scissors")) {
        console.log( "You Lose! Scissors beats Paper");
    } else if ((playerSelection === "Rock") && (computerSelection === "Paper")) {
        console.log( "You Lose! Paper beats Rock");
    } 

}

count = 1;
while (count <= 5) {
    console.log(playerRound());
    count ++ ;
}