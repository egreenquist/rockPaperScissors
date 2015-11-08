//Global variables
var computerWins = 0;
var userWins = 0;
var lastWinner = "none";

//Link functions to events
document.getElementById('rock-btn').addEventListener("click", function() {
	runGame("rock");
});
document.getElementById('paper-btn').addEventListener("click", function() {
	runGame("paper");
});
document.getElementById('scissors-btn').addEventListener("click", function() {
	runGame("scissors");
});

//Functions

//------------
//trashTalk ===> sweetTalk
//------------


function runGame(userChoice) {
	var computerChoice = getComputerChoice();
	var results = determineWinner(userChoice, computerChoice);
	var sweetTalk = getSweetTalk(results, computerChoice, userChoice);
	updateUserInterface(sweetTalk);
	if(results != "tie"){
		lastWinner = results;
	}else if(results == "computer"){
		computerWins += 1;
		lastWinner = results;
	}else{
		userWins += 1;
		lastWinner = results;
	}
}

function getComputerChoice(){
	// Math.random() generates a random number between 0 and 1
	var rand = Math.random();
	if(rand <= .333){
		return "rock";
	}else if(rand <= .666){
		return "paper";
	}else{
		return "scissors";
	}

		//----ERIC & DAVE - Instead of the random generator, I tried and failed at a TIT for TAT scenario, i.e. the computer plays the user's last move. if no move, use random generator. Can you look at this and tell me what is wrong? ----//
		//tit for tat
		/* -------------
		
		function getComputerChoice(){
		if(lastWinner == "rock"){
			return "rock";
		}
		else if(lastWinner == "paper"){
			return "rock";
		}
		else if(lastWinner == "scissors"){
			return "scissors";
		}
		else(){
			//computer picks something
			if(rand <= .333){
				return "rock";
			}else if(rand <= .666){
				return "paper";
			}else{
				return "scissors";
			}
		}
		
*/
}
function determineWinner(userChoice, computerChoice){
	// Replace this code durring lab/hw. Just a placeholder

	//if user picks scissors && computer picks paper
	//return user wins
	if(userChoice == "scissors" && computerChoice == "paper"){
		userWins += 1;
		return "user";
	//if user picks scissors && computer picks rock
	//return compuer wins
	}else if(userChoice == "scissors" && computerChoice == "rock"){
		computerWins += 1;
		return "computer";
	//if user picks paper && computer picks rock
	//return user wins	
	}else if(userChoice == "paper" && computerChoice == "rock"){
		userWins += 1;
		return "user";
	//if user picks paper && computer picks scissors
	//return computer wins
	}else if (userChoice == "paper" && computerChoice == "scissors") {
		computerWins += 1;
		return "computer";
	//if user picks rock && computer picks scissors
	//return user wins
	}else if (userChoice == "rock" && computerChoice == "scissors") {
		userWins += 1;
		return "user";
	//if user picks rock && computer picks paper
	//return computer wins
	}else if (userChoice == "rock" && computerChoice == "paper") {
		computerWins += 1;
		return "computer";
	//else... If user picks == computer pick
	//return tie and both win
	}else{
		computerWins += 10;
		userWins += 10;
		return "tie";
	}

}

function updateUserInterface(sweetTalk){
	document.getElementById('user-score').innerHTML = userWins;
	document.getElementById('computer-score').innerHTML = computerWins;
	document.getElementById('sweet-talk').innerHTML = sweetTalk;
	//document.getElementById('trash-talk').style.background = "black";
}

function getSweetTalk(thisWinner, computerChoice, userChoice){
	//--------------
	//QUESTION TO ERIC/Dave - I am still struggling with the alert option and I cannot figure out why this alert dosen't work (when not in "comment" mode...
	// alert("Hello! I am an alert box!");
	//---------------
	var message = "";
	var userWinsMessage = "We are growing apart.";
	var userWinsAgainMessage = "Is this the night before mutiny? "
	var computerWinsMessage = "I love you, but I've chosen darkness.";
	var computerWinsAgainMessage = "Not again. The moths are real.";
	var tieMessage = "Ah, that's lovely.";
	var tieAgainMessage = "We win again. We are half robot.";

	if(thisWinner == "tie"){
		message = "Your " + userChoice.toUpperCase() + " + my " + computerChoice.toUpperCase() + " = we are grand!" + "<br><br>";
		if(lastWinner == "tie"){
			message += tieAgainMessage;
		}
		else{
			message += tieMessage;
		}
	}else if(thisWinner == "user"){
		message = "Your " + userChoice.toUpperCase() + " beats my " + computerChoice.toUpperCase() + ".<br><br>";
		if(lastWinner == "user"){
			message += userWinsAgainMessage;
		}
		else{
			message += userWinsMessage;
		}
	}else if (thisWinner == "computer"){
		message = "My " + computerChoice.toUpperCase() + " beats your " + userChoice.toUpperCase() + ".<br><br>";
		if(lastWinner == "computer"){
				message += computerWinsAgainMessage;
			}
			else {
				message += computerWinsMessage;
			}
	}
	return message;
}

//getTotals

