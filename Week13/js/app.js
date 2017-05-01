angular.module('gameApp', ['ngRoute', 'firebase'])
    .config(function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'partials/main.html'
            })
            .when('/game/:id/:player', {
                controller: 'GameController as game',
                templateUrl: 'partials/game.html'
            })
            .otherwise({
                redirectTo: '/'
            })
    })
    .controller('GameController', function($routeParams, $location){
        this.message = 'Hello from the game controller!'

        this.player = $routeParams.player
        this.id = $routeParams.id

        // Error Checking
        if (this.player != 'O' && this.player != 'X')
            $location.path('/')

        // Fetch our game from Firebase

        // Displaying your board

        // Display the current state of the game
        //  - Who's turn is it
        //  - Who is the winner? Draw?
        

    })

    