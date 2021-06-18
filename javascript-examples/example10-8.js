window.onload = function() {

	// Generate random number between 0 and 10.
	var randomNumber = Math.floor(Math.random()*10);

	// Initialize a variable for the guess.
	var guess;

	// Keep asking the user to guess until he gets the number.
	while(guess != randomNumber) {
		guess = prompt('What is your guess?');
	}

	// Let the user know that he guessed correctly.
	alert('Congratulations! You guessed correctly. The number was ' + randomNumber + '.');

}
