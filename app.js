alert('Welcome to the secret number game');
let maxNumber = 250;
let secretNumber = parseInt(Math.random() * maxNumber + 1);
let userGuess;
let attempts = 1;

/// While...
while (userGuess != secretNumber) {
    userGuess = prompt(`Type your guess number between 1 and ${maxNumber}`);
    /// If the user guesses the secret number:

    if (userGuess == secretNumber) {
        break;
    } else {
        if (userGuess > secretNumber) {
            alert(`The secret number is lower than ${userGuess}`);
        } else {
            alert(`The secret number is higher than ${userGuess}`);
        }
        /// attempts = attempts + 1
        attempts++;
    }
}

let attempWord = attempts > 1 ? 'attempts' : 'attempt';
alert(`Congrats! You guessed the secret number with ${attempts} ${attempWord}`);

// if (attempts > 1) {
//     alert(`Congrats! You guessed the secret number with ${attempts} attempts`);
// } else {
//     alert(`Congrats! You guessed the secret number with ${attempts} attempt`);
// }