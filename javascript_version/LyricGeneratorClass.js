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

	/*
	** method to generate output on index.html
	*/
	generateLyrics(number = 10, colour , objectType, behaviour , action, scene, element){

		// Create instance of ValidatorClass Class
		let val = new ValidatorClass();

		// assign this.values property to returned object
		this.values = val.validateFormValues(number, colour, objectType, behaviour, action, scene);

		// call loadHTML() method
		this.loadOutputHTML(element);

	}

	/*
	**	Method to render the form in index.html
	*/
	generateForm(){
		//Form Element creations
		let containerElement = document.createElement('div');
		let form = document.createElement('form');
		let formContainer = document.createElement('div');
		let numberInput = document.createElement('input');
		let colourInput = document.createElement('input');
		let objectTypeInput = document.createElement('input');
		let behaviourInput = document.createElement('input');
		let sceneInput = document.createElement('input');
		let actionInput = document.createElement('input');
		let generateLyricsButton = document.createElement('button');
		
		//Lyrics output div
		let lyricsOutput = document.createElement('div');
		lyricsOutput.setAttribute('id', 'lyricsContainer');
		
		//Array to store form elements in.
		let inputArray = [];

		//Setting attributes of each element
		containerElement.setAttribute('id', 'container');

		formContainer.setAttribute('class', 'form');

		numberInput.setAttribute('type', 'number');
		numberInput.setAttribute('id', 'numberOfBottles');
		numberInput.setAttribute('placeholder', 'Number of Objects');
		numberInput.setAttribute('max', '10');
		numberInput.setAttribute('autocomplete', 'off');

		colourInput.setAttribute('type', 'text');				
		colourInput.setAttribute('id', 'colour');
		colourInput.setAttribute('placeholder', 'Colour of Objects');
		colourInput.setAttribute('autocomplete', 'off');

		objectTypeInput.setAttribute('type', 'text');
		objectTypeInput.setAttribute('id', 'objectType');
		objectTypeInput.setAttribute('placeholder', 'Object type (singular, not plural)');
		objectTypeInput.setAttribute('autocomplete', 'off');	

		behaviourInput.setAttribute('type', 'text');
		behaviourInput.setAttribute('id', 'behaviour');
		behaviourInput.setAttribute('placeholder', 'Behaviour (jumping, hanging, ...)');
		behaviourInput.setAttribute('autocomplete', 'off');

		sceneInput.setAttribute('type', 'text');
		sceneInput.setAttribute('id', 'scene');
		sceneInput.setAttribute('placeholder', 'Scene (Wall, Car, ...)');
		sceneInput.setAttribute('autocomplete', 'off');

		actionInput.setAttribute('type', 'text');
		actionInput.setAttribute('id', 'action');
		actionInput.setAttribute('placeholder', 'Action (fall, explode, ...)');
		actionInput.setAttribute('autocomplete', 'off');

		generateLyricsButton.setAttribute('id','generateBtn');
		generateLyricsButton.innerText = "Generate Lyrics";


		// Push each element with created attributes to the inputArray
		inputArray.push(numberInput, colourInput, objectTypeInput, behaviourInput, sceneInput, actionInput, generateLyricsButton);

		/*
		** Cylce each element in the array, create wrapper div for each, and append
		** form
		*/
		inputArray.forEach(function(key, value){
			let inputContainer = document.createElement('div');
			inputContainer.setAttribute('class', 'form-element');

			inputContainer.appendChild(key);
			formContainer.appendChild(inputContainer);
		});


		// Append form and elements to the DOM.
		document.body.appendChild(containerElement);
		document.body.appendChild(lyricsOutput);
		containerElement.appendChild(form);
		form.appendChild(formContainer);

	}

	loadOutputHTML(outputElement){
		
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
					${this.values.objectType} should accidently ${this.values.action},<br> there'll be ${ numberString[index-1]} 
					${this.values.colour} ${this.values.objectType}${index-1 == 1 ? " " : "s "} 
					${this.values.behaviour} on the ${this.values.scene} <br>`;

					outputElement.appendChild(para);
			}

		});
	}
}