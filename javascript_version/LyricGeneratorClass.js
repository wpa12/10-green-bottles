/*
** File: LyricGeneratorClass.js
** Created By: Wayne Anstey
** Description: class containing function to generate the lyrics.
*/

// Import ValidatorClass Class
import ValidatorClass from './ValidatorClass.js';


export class LyricGeneratorClass  {

	// Declare a values property
	values; 

	generateLyrics(number = 10, colour , objectType, behaviour , action, scene, element){

		// Create instance of ValidatorClass Class
		let val = new ValidatorClass();

		// assign this.values property to returned object
		this.values = val.validateFormValues(number, colour, objectType, behaviour, action, scene);

		// call loadHTML() method
		this.loadHTML(element);

	}

	loadHTML(outputElement){
		
		// assign array to store string-number equivalent
		let numberString = [
			'No',
			'One',
			'Two',
			'Three',
			'Four',
			'Five',
			'Six',
			'Seven',
		 	'Eight',
			'Nine', 
			'Ten',
		];

		// declare an empty array
		let numbersArr = [];
		
		/* count upto the 'number of objects' specified by the user, and push each
		** itertion to the above array
		*/
		for (let i = 0; i <= this.values.number; i++){
			numbersArr.push(i);
		}

		// Reverse the numbersArr[] array
		numbersArr.reverse();

		// Cycle each index in the array
		numbersArr.forEach((index, value) => {


				if(index >= 1){
					// declare a paragragh element to append to document
					let para = document.createElement('p');

					// Generate first, two lines of the sequence
					for(let x = 0; x < 2; x++){
					
						// fill and concatenate the inner html of the para element
						para.innerHTML += `${numberString[index]} ${this.values.colour} 
						${this.values.objectType}${index == 1 ? " " : "s "} ${this.values.behaviour}
					 	on a ${this.values.scene}, <br>`;
					}

					//continue with the rest of the lyrics
					para.innerHTML += `And if one ${this.values.colour} 
					${this.values.objectType} should accidently ${this.values.action},<br> they'll be ${ numberString[index-1]} 
					${this.values.colour} ${this.values.objectType}${index-1 == 1 ? " " : "s "} 
					${this.values.behaviour} on the ${this.values.scene} <br>`;

					outputElement.appendChild(para);
			}

		});
	}
}