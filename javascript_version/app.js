/*
** file: app.js
** Created By: Wayne Anstey
** description: displays the 10 green bottle lyrics on the index.html page
*/

//load in the lyricGeneratorClass
import { LyricGeneratorClass } from './LyricGeneratorClass.js'; 




// create an instance of LyricGenertorClass Class
var lyrics = new LyricGeneratorClass(); 

lyrics.generateForm();

/*
** assign variables HTML element objects
*/
let genBtn = document.querySelector('#generateBtn');
let numberOfBottles = document.querySelector('#numberOfBottles');
let colour = document.querySelector('#colour');
let objectType = document.querySelector('#objectType');
let behaviour = document.querySelector('#behaviour');
let action = document.querySelector('#action');
let scene = document.querySelector('#scene');
let contentContainer = document.querySelector('#lyricsContainer');
// assign even listener for clicking the button
genBtn.addEventListener('click', function(event){
	event.preventDefault(); 

	//wipe all content previously assigned (if any exists)
	contentContainer.innerHTML = ''; 

	//call the generateLyrics() method.
	lyrics.generateLyrics(
		numberOfBottles.value, 
		colour.value, 
		objectType.value,
		behaviour.value, 
		action.value,
		scene.value,
		contentContainer
		);
});
