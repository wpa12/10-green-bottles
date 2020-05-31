@extends('welcome')
	@section('lyricContent')

			<div class="container-fluid">
				<div class="row">
					<div class="col-md-12 mt-5">				
						@if($number <= 10 && $number >= 0)
							
							<p>
								@foreach(array_reverse($numbersArray) as $numbersArr)
									
									@if($numbersArr >=1)

										@for($i = 0; $i < 2; $i++)
											{{ $numberString[$numbersArr] .' '. $colour . ' '. Str::plural($objectType, $numbersArr) . ' ' . $behaviour . ' on a ' . $scene . ','}} <br>
										@endfor
										
											{{ 'And if one ' . $colour . ' ' . $objectType . ' should accidently ' . $action . ', ' }} <br>
											{{ 'There\'ll be ' . ($numberString[$numbersArr - 1]) .' ' . $colour . ' ' . Str::plural($objectType, $numbersArr) . ' ' . $behaviour . ' on the ' . $scene .'.' }} <br><br>
										@else 
											<p>
												{{'There are no ' . $colour . ' ' . Str::plural($objectType, $numbersArr) . ' ' . $behaviour . ' on the ' . $scene . '.'}}
											</p>
										@endif


								@endforeach
							</p>

						@endif
					</div>
				</div>
			</div>
	@endsection