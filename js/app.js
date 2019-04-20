/************************************* 
FSJS TechDegree Project 4 - OOP Game Show App



- This project is attempting to receive an "Exceeds Expectations" grade.
- CSS changes noted in ReadMe file


*************************************/
const button = document.querySelector('#btn__reset');
const qwertyDiv = document.querySelector('#qwerty');
const keyboard = document.querySelectorAll('.key');

/* Creates a new game object */
let game = button.addEventListener('click', () => {
   game = new Game();
   game.startGame();
   game.activePhrase.addPhraseToDisplay();

   /* Click event delegation on "qwerty" div (only elements with class of "key" are clickable).
   Passes selected key button as argument in the handleInteraction function */
   qwertyDiv.addEventListener('click', (event) => {
      const target = event.target;

      if (target.className === 'key') {
         game.handleInteraction(target);
      }
   });

   /* listens for physical keyboard input. If typed key matches text of "on-screen" keyboard
   and is not disabled, pass key button as argument in handleInteraction function */
   document.addEventListener('keyup', (event) => {
      // value of target helped by MDN link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
      const target = String.fromCharCode(event.keyCode).toLowerCase();

      keyboard.forEach((key) => {
         if (target === key.textContent && key.disabled === false) {
            game.handleInteraction(key);
         }
      });
   });
});