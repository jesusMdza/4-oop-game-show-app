/************************************* 
FSJS TechDegree Project 4 - OOP Game Show App



- This project is attempting to receive an "Exceeds Expectations" grade.
- CSS changes noted in ReadMe file


*************************************/
class Phrase {
   constructor(phrase) {
      this.phrase = phrase.phrase.toLowerCase();
   }

   /* Creates and styles "li" elements according to passed phrase length.
   Specific styles given depending if "li" text content is a letter or empty space.
   Appends "li" elements to "ul".*/
   addPhraseToDisplay() {
       const ul = document.querySelector('ul');

       for (let i = 0; i < this.phrase.length; i++) {
           let li = document.createElement('li');
           li.textContent = this.phrase[i];

           if (li.textContent === ' ') {
               li.classList.add('space');
           } else {
               li.classList.add('letter');
               li.classList.add('hide');
           }

           ul.appendChild(li);
       }
   }

   /* Checks if passed letter is included in current phrase. Returns boolean. */
   checkLetter(letter) {
       return this.phrase.includes(letter);
   }
                 
   /* Show "li" if passed letter matches appended "li" element(s) text content. */
   showMatchedLetter(letter) {
       const appendedLI = document.querySelectorAll('#phrase ul li');

       appendedLI.forEach((element) => {
           if (element.textContent === letter) {
               element.className = 'letter show';
           }
       });
   }
}