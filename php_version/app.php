<?php

/** 
* @param $number: int, $colour: string, $objecType: string, $scene: string;
* Function that takes in 4 parameters, with default values assigned.
**/

function generateLyrics(
	$number = 10, 
	$colour = 'green', 
	$objectType = 'bottle', 
	$behaviour = 'hanging' , 
	$scene ='wall',
	$action = "fall"
) {

	// validating arguments and assigning some default values if values outside of range.
	if (isset($number) && $number > 10) {
		$number = 10;

	} elseif (isset($number) && $number < 0) {
		$number = 0;
	} elseif (!is_numeric($number)) {
		$number = 10;
	}

	if (!isset($colour) || empty($colour) || $colour == ' ') {
		$colour = 'green';
	}

	if (isset($objectType) && $objectType == ' ') {
		$objectType = 'bottles';
	}

	if ($behaviour == '') {
		$behaviour = 'hanging';
	}

	if (isset($scene) && $scene == '') {
		$scene = 'wall';
	}

	// Creating an array to store values from 0 -> 10, with the string equivalent of the number.
	$numberString = array(
		0 => 'No',
		1 => 'One',
		2 => 'Two',
		3 => 'Three',
		4 => 'Four',
		5 => 'Five',
		6 => 'Six',
		7 => 'Seven',
		8 => 'Eight',
		9 => 'Nine', 
		10 => 'Ten',
	);

	// Create an empty array to store the number of bottles from the function argument.
	$numbers = array();
	
	/*
	* Cycle through the numbers specified in the argument, 
	* and pushing them into the $numbers array.
	*/

	for ($i = 0; $i <= $number; $i++) {
		array_push($numbers, $i);
	}

	// Iterate through the array of numbers, in the reverse order (to count down)
	foreach (array_reverse($numbers) as $num) {
		
		/*
		* Continue counting down, outputting on the value on the screen until the last bottle. 
		* once bottle count hits 0, display "no green bottles".
		*/

		if ($num >= 1) {

			echo '<p>';
			
			for ($x = 0; $x < 2; $x++) {
				echo 	$numberString[$num] . ' ' . $colour . ' ' . $objectType. (($num) == 1 ? ' ' : 's ') . 
						$behaviour . ' on the ' . $scene . ', <br>'; 
			}
				echo 	'And if one '. $colour . ' ' . $objectType . ' should accidently '. $action .', <br>' . 'There\'ll be ' . 
						($num - 1 <= 0 ? strtolower($numberString[$num-1]) : strtolower($numberString[$num-1])) . 
						' ' . $colour . ' ' . $objectType . 
						(($num-1) == 1 ? ' ' : 's ') . $behaviour . ' on the '. $scene. '.'; 
			echo '</p>';
		} else {

				echo 	'<p>';
				echo 	'There are no '. $colour . ' ' . $objectType .'s ' . $behaviour . 
						' on the '. $scene. '.'; 
				echo 	'</p>';
		}
	}
}

