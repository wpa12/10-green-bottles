<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    </head>
    <body>

            <div class="content">

                <div class="container-fluid">
                    <div class="row">                    
                        <div class="title">
                            <h1>
                                10 Green Bottles Laravel Version
                            </h1>
                        </div>
                    </div>

                    <div class="row">
                        <div class=" col-md-12">
                            <form action="/lyrics" method="post">
                                @csrf
                                <div class=" mt-3">
                                    <input type="number" class="p-2" name="number" placeholder="Number of Objects" autocomplete="off" >
                                </div>

                                <div class="form-element mt-3">
                                    <input type="text" class="p-2" name="colour" placeholder="Colour of objects" autocomplete="off">
                                </div>
                                <div class="form-element mt-3">
                                    <input type="text" class="p-2" name="objectType" placeholder="Object (Bottle, Car, Apple, ...)" autocomplete="off">
                                </div>
                                <div class="form-element mt-3">
                                    <input type="text" class="p-2" name="behaviour" placeholder="Behaviour (hanging, jumping, ...)" autocomplete="off">
                                </div>
                                <div class="form-element mt-3">
                                    <input type="text" class="p-2" name="scene" placeholder="Scene (Wall, Car, ...)" autocomplete="off">
                                </div>
                                <div class="form-element mt-3">
                                    <input type="text" class="p-2" name="action" placeholder="Action (Fall, Jump, ..." autocomplete="off">
                                </div>
                                    
                                <button class="btn btn-success mt-3" type="submit">Generate Lyrics</button>
                            </form>
                        </div>
                    </div>
                </div>

                @yield('lyricContent')

            </div>
        </div>
    </body>
</html>
