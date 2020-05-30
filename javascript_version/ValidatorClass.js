
/* 
** File: validation.js
** Created By: Wayne Anstey
** Description: Validates the form data and returns an Object of either default 
** values or assigned values
*/

export default class ValidatorClass {

	validateFormValues(number, colour, objectType, behaviour, action, scene) {

		let dataObj = {
			'number'	: ((number >= 0) && (number <= 10) ? +number : 10),
			'colour'	: (colour.length > 0 ? colour : "green"),
			'objectType': (objectType.length > 0 ? objectType : "bottle"),
			'behaviour'	: (behaviour.length > 0 ? behaviour : "hanging"),
			'action'	: (action.length > 0 ? action : "fall"),
			'scene' 	: (scene.length > 0 ? scene : "wall"),
		};

		return dataObj;
	}
}