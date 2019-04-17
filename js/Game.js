/************************************* 
FSJS TechDegree Project 4 - OOP Game Show App



- This project is attempting to receive an "Exceeds Expectations" grade.


*************************************/
const overlay = document.querySelector('#overlay');

class Game {
   constructor() {
      this.missed = 0;
      this.phrases = [
         {phrase: 'Blood is thicker than water'},
         {phrase: 'To be or not to be'},
         {phrase: 'Procrastination is the thief of time'},
         {phrase: 'Lickety Split'},
         {phrase: 'Raining cats and dogs'}
      ];
      this.activePhrase = null;
   }

   getRandomPhrase() {
      const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
      return new Phrase(randomPhrase);
   }

   startGame() {
      const li = document.querySelectorAll('ul li');
      const keys = document.querySelectorAll('#qwerty button');
      const tries = document.querySelectorAll('.tries img');

      li.forEach((element) => {
         element.remove();
      });

      keys.forEach((element) => {
         element.className = 'key';
      });

      tries.forEach((element) => {
         element.src = 'images/liveHeart.png';
      });

      overlay.style.display = 'none';
      this.activePhrase = this.getRandomPhrase();
   }

   checkForWin() {
      const appendedLI = document.querySelectorAll('#phrase ul li');
      let win = false;
      let phraseLength = 0;
      let correct = 0;

      appendedLI.forEach((element) => {
         if (element.textContent !== ' ') {
            phraseLength+= 1;
         }

         if (element.className === 'letter show') {
            correct+= 1;
         }
      });

      if (correct === phraseLength) {
         return win = true;
      }
   }

   removeLife() {
      const tries = document.querySelectorAll('.tries img');
      tries[this.missed].src = 'images/lostHeart.png';
      this.missed++;
      
      if (this.missed === 5) {
         this.gameOver(false);
      }
   }

   gameOver(gameWon) {
      overlay.style.display = 'flex';

      if (gameWon === false) {
         overlay.className = 'lose';
      }

      if (gameWon === true) {
         overlay.className = 'win';
      }
   }

   handleInteraction(button) {
      const letter = button.textContent;
      button.disabled = true;
      
      if (game.activePhrase.checkLetter(letter) === true) {
         button.className = 'chosen';
         this.activePhrase.showMatchedLetter(letter);
         this.checkForWin();
      } else {
         button.className = 'wrong';
         this.removeLife();
      }

      if (this.checkForWin() === true) {
         this.gameOver(true);
      }
   }
}

 /*
 IMPORTANT NOTE:

These instructions detail what needs to be added to each of three JavaScript files used in the recommended approach to this project. 
For a more detailed walkthrough of how to complete this project, please refer to the project study guide.

Create the Game class in the Game.js file.
    1. The class should include a constructor that initializes the following properties:
        a. missed: used to track the number of missed guesses by the player. The initial value is 0, since no guesses have been made 
           at the start of the game.
        b. phrases: an array of five Phrase objects to use with the game. A phrase should only include letters and spaces— no numbers, punctuation 
           or other special characters.
        c. activePhrase: This is the Phrase object that’s currently in play. The initial value is null. Within the startGame() method, this 
           property will be set to the Phrase object returned from a call to the getRandomPhrase() method.
 
    2. The class should also have these methods:
        a. startGame(): hides the start screen overlay, calls the getRandomPhrase() method, and sets the activePhrase property 
           with the chosen phrase. It also adds that phrase to the board by calling the addPhraseToDisplay() 
           method on the active Phrase object.
        b. getRandomPhrase(): this method randomly retrieves one of the phrases stored in the phrases array and returns it.
        c. handleInteraction(): this method controls most of the game logic. It checks to see if the button clicked by the player matches 
           a letter in the phrase, and then directs the game based on a correct or incorrect guess. This method should:
            1a. Disable the selected letter’s onscreen keyboard button.
            2a. If the phrase does not include the guessed letter, add the wrong CSS class to the selected letter's keyboard 
                button and call the removeLife() method.
            3a. If the phrase includes the guessed letter, add the chosen CSS class to the selected letter's keyboard button, call the 
                showMatchedLetter() method on the phrase, and then call the checkForWin() method. If the player has won the 
                game, also call the gameOver() method.
    3. removeLife(): this method removes a life from the scoreboard, by replacing one of the liveHeart.png images 
       with a lostHeart.png image (found in the images folder) and increments the missed property. If the player has five missed 
       guesses (i.e they're out of lives), then end the game by calling the gameOver() method.
    4. checkForWin(): this method checks to see if the player has revealed all of the letters in the active phrase.
    5. gameOver(): this method displays the original start screen overlay, and depending on the outcome of the game, updates the 
       overlay h1 element with a friendly win or loss message, and replaces the overlay’s start CSS 
       class with either the win or lose CSS class. **/