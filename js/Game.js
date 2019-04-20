/************************************* 
FSJS TechDegree Project 4 - OOP Game Show App



- This project is attempting to receive an "Exceeds Expectations" grade.
- CSS changes noted in ReadMe file


*************************************/
const overlay = document.querySelector('#overlay');

class Game {
   constructor() {
      this.missed = 0;
      this.phrases = [
         {phrase: 'Better late than never'},
         {phrase: 'To be or not to be'},
         {phrase: 'It takes two to tango'},
         {phrase: 'Lickety Split'},
         {phrase: 'Raining cats and dogs'}
      ];
      this.activePhrase = null;
   }

   /* Selects a random phrase string from the "this.phrases" property and returns a new "Phrase" object */
   getRandomPhrase() {
      const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
      return new Phrase(randomPhrase);
   }

   /* Removes overlay, sets "activePhrase" property to a new "Phrase" object and
   resets phrase display, key classes, removes disabled keys and resets amount of tries */
   startGame() {
      const li = document.querySelectorAll('ul li');
      const keys = document.querySelectorAll('#qwerty button');
      const tries = document.querySelectorAll('.tries img');

      li.forEach((element) => {
         element.remove();
      });

      keys.forEach((element) => {
         element.className = 'key';
         element.disabled = false;
      });

      tries.forEach((element) => {
         element.src = 'images/liveHeart.png';
      });

      overlay.style.display = 'none';
      this.activePhrase = this.getRandomPhrase();
   }

   /* Returns "win" variable as true if number of correct letters equals phrase length */
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

   /* Replaces a "liveHeart" with a "lostHeart" each time called.
   Ends game passing "false" as an argument */
   removeLife() {
      const tries = document.querySelectorAll('.tries img');
      tries[this.missed].src = 'images/lostHeart.png';
      this.missed++;
      
      if (this.missed === 5) {
         this.gameOver(false);
      }
   }

   /* Displays start menu. Adds game over message and styles overlay depending
   on if player wins or loses */
   gameOver(gameWon) {
      const gameMessage = document.querySelector('#game-over-message');
      overlay.style.display = 'flex';

      if (gameWon === false) {
         overlay.className = 'lose';
         gameMessage.textContent = 'Bummer! Maybe next time!';
      }

      if (gameWon === true) {
         overlay.className = 'win';
         gameMessage.textContent = 'Great job! Why not try another?';
      }
   }

   /* Disables passed "button". If letter is in current phrase, style button, show the letter and 
   check if game is won. If incorrect letter, style button and remove a life. If game is won, call
   "gameOver" function passing in "true" */
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