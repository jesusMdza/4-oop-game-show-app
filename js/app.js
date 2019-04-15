/************************************* 
FSJS TechDegree Project 4 - OOP Game Show App



- This project is attempting to receive an "Exceeds Expectations" grade.


*************************************/
const button = document.querySelector('#btn__reset');
const keys = document.querySelectorAll('key');

let game = button.addEventListener('click', () => {
   game = new Game();
   game.startGame();
   game.activePhrase.addPhraseToDisplay();
});


 /*
Update the app.js file.
    1. Create a new instance of the Game class and add event listeners for the start button and onscreen keyboard buttons:
        a. Add a click event listener to the "Start Game" button which creates a new Game object and starts the game by 
           calling the startGame() method.
        b. Add click event listeners to each of the onscreen keyboard buttons, so that clicking a button 
           calls the handleInteraction() method on the Game object. Event delegation can also be used in order to avoid having to add an 
           event listener to each individual keyboard button. Clicking the space between and around the onscreen keyboard buttons 
           should not result in the handleInteraction() method being called.

Resetting the gameboard between games.
    1. After a game is completed, the gameboard needs to be reset so that clicking the "Start Game" button will 
       successfully load a new game.
        a. Remove all li elements from the Phrase ul element.
        b. Enable all of the onscreen keyboard buttons and update each to use the key CSS class, and not use 
           the chosen or wrong CSS classes.
        c. Reset all of the heart images (i.e. the player's lives) in the scoreboard at the bottom of the gameboard to display 
           the liveHeart.png image.

Add good code comments

Check for cross-browser consistency

Extra Credit
Add keyboard functionality
   1. Let players use their physical computer keyboard to enter guesses. You'll need to use the keydown or keyup event.

Making the project your own
   1. The general layout should remain the same, but feel free to make the project your own by experimenting with 
      things like color, background color, font, borders, shadows, transitions, animations, filters, etc.
   2. Detail your style changes in your README.md file and in your submission notes.
*/