
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["Rock","Paper","Scissors"];
    const randomChosen = choices[Math.floor(Math.random()*choices.length)];
    return randomChosen;
}

//console.log(getComputerChoice())

const butns = document.querySelectorAll('button');

function buttonDisable(){
    butns.forEach(buts => {
        buts.disabled = true;
    })
}

function playerRound(playerSelection) {
    //let guess = prompt("Please choose: Rock, Paper or Scissors?","").toLowerCase();
    //playerSelection = guess[0].toUpperCase() + guess.slice(1);
    //let playerSelection = document.getElementById('button');
    let result ='';
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    //const list = ["rock","paper","scissors"];
    //if (guess !== list) {
    //return;}
    if ((playerSelection === "Rock" && computerSelection === "Scissors") 
    || (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")) {
        result = alert(`You win! ${playerSelection} beats ${computerSelection}`);
        playerScore +=1;
        if (playerScore == 5) {
            result = alert("You Won! Game Over");
            buttonDisable();
        }
    }
    else if (playerSelection === computerSelection)  {
        result =  alert("Tied! Play again" );
    }
     else {
        result = alert(`You Lose! ${computerSelection} beats ${playerSelection}`);
        computerScore += 1;
        if (computerScore == 5) {
            result = alert("You Lose! Game Over");
            buttonDisable();
        }
    } 
    
    //result = document.getElementById('result');
    return result;

}




butns.forEach(button => {
    button.addEventListener('click', function(){
        playerRound(button.value);
    })
})




//const bttn1 = document.querySelector('#btn1');
//const bttn2 = document.querySelector('#btn2');
//const bttn3 = document.querySelector('#btn3');


//bttn1.textContent = "Rock";
//bttn2.textContent = "Paper";
//bttn3.textContent = "Scissors";


//function rockOpt() {
 //   let choice ='Rock';
 //   let result = playerRound(choice);
 //   return result;
//}


//bttn1.addEventListener('click', rockOpt());


//count = 1;
//while (count <= 5) {
//    console.log(playerRound());
//    count ++ ;
//}