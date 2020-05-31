<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GenerateLyricsController extends Controller
{

	public function __construct (Request $request){
		$this->request = $request;
	}

    public function generateLyrics() {

    	$validator = $this->request->validate([

			'number' => [
				'nullable',
				'integer',
				'between: 0, 10',
			],

			'colour' => [
				'nullable',
				'string',
			],
			
			'objectType' => [
				'nullable',
				'string',
			],

			'behaviour' => [
				'nullable',
				'string',
			],

			'scene' => [
				'nullable',
				'string',
			],

			'action' => [
				'nullable',
				'string',
			],

		]);

    	$number	= ($this->request->number < 0) && ($this->request->number > 10) || (!is_numeric($this->request->number)) ? 10 : $this->request->number;
    	$colour = (isset($this->request->colour) && ($this->request->colour != null)) ? $this->request->colour : "green";
    	$objectType = (isset($this->request->objectType) && ($this->request->objectType != null)) ? $this->request->objectType : "bottle";
    	$behaviour = (isset($this->request->behaviour) && ($this->request->behaviour != null)) ? $this->request->behaviour : "hanging";
    	$scene = (isset($this->request->scene) && ($this->request->scene != null)) ? $this->request->scene : "wall";
    	$action = (isset($this->request->action) && ($this->request->action != null)) ? $this->request->action : "fall";


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

		$numbersArray = array();
	
		for ($i = 0; $i <= $number; $i++) {
			array_push($numbersArray, $i);
		}
    

    	return view('lyrics', [
    			'number' => $number,
    			'colour' => $colour,
    			'objectType' => $objectType,
    			'behaviour' => $behaviour,
    			'scene' => $scene,
    			'action' => $action,
    			'numbersArray' => $numbersArray,
    			'numberString' => $numberString,

    		]
    	);
    }
}
