/************************************* 
FSJS TechDegree Project 4 - OOP Game Show App



- This project is attempting to receive an "Exceeds Expectations" grade.


*************************************/



 /*
 IMPORTANT NOTE:

These instructions detail what needs to be added to each of three JavaScript files used in the recommended approach to this project. 
For a more detailed walkthrough of how to complete this project, please refer to the project study guide.

Create the Phrase class in the Phrase.js file.
    1. The class should include a constructor that receives a phrase parameter and initializes the following properties:
        a. phrase: this is the actual phrase the Phrase object is representing. This property should be set to the phrase parameter, 
           but converted to all lower case.

    2. The class should also have these methods:
        a. addPhraseToDisplay(): this adds letter placeholders to the display when the game starts. 
           Each letter is presented by an empty box, one li element for each letter. See the example_phrase_html.txt file for an 
           example of what the rendered HTML for a phrase should look like when the game starts, including any id or class attributes needed. 
           When the player correctly guesses a letter, the empty box is replaced with the matched 
           letter (see the showMatchedLetter() method below). Make sure the phrase displayed on the screen uses the letter CSS class for 
           letters and the space CSS class for spaces.

    3. checkLetter(): checks to see if the letter selected by the player matches a letter in the phrase.
    4. showMatchedLetter(): reveals the letter(s) on the board that matches the player's selection. To reveal the matching letter(s), select all 
       of the letter DOM elements that have a CSS class name that matches the selected letter and replace each selected element's 
       hide CSS class with the show CSS class.

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
       class with either the win or lose CSS class.

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
*/