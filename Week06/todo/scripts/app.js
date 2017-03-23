angular.module('myTodoApp', ['ngRoute'])
    
    /*****************************
     * Configure the Routes
     *****************************/
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {
                controller: 'MainCtrl',
                templateUrl: 'partials/main.html'
            })
            .when('/todo', {
                controller: 'TodoCtrl',
                templateUrl: 'partials/todo.html'
            })
            .otherwise({
                redirectTo: '/'
            })
    }])

    /*****************************
     * Main Controller
     *****************************/
    .controller('MainCtrl', ['$scope', function($scope){
        // Not much to do in this controller, but I set a title just for this example
        $scope.pageTitle = 'Main'
    }])

    /*****************************
     * Todo Controller
     *****************************/
    .controller('TodoCtrl', ['$scope', function($scope){
        $scope.pageTitle = 'Todo'

        // This is the model that will be bound to the text input on our form
        $scope.todoText = ''

        // This is the array of all todo objects.  Initially, it's empty
        $scope.todos = []

        // This function will be called whenever a User wishes to add a new todo
        $scope.addTodo = function(){

            // Let's create a new object to represent our todo, and then add it to our array of todos
            const newTodo = {
                text: $scope.todoText,
                done: false
            }

            // By adding this new object to our array of todos, angular will detect the change and re-draw our UI
            $scope.todos.push( newTodo )

            // Now that we've added the todo to our list, let's clear the textbox form our form
            $scope.todoText = ''
        }

        // This function returns the number of todos that are not done
        $scope.remainingTodos = function(){
            let remaining = 0
            $scope.todos.forEach(function(todo){
                if (!todo.done)
                    remaining++
            })
            return remaining
        }

        // This function will remove all todos that are done
        $scope.archiveTodos = function(){

            // Store the current list of todos
            let oldTodosList = $scope.todos

            // Clear out the list of todos
            $scope.todos = []

            // Only add the todos that are not done back to the list of todos
            oldTodosList.forEach(function(todo){
                if (!todo.done)
                    $scope.todos.push( todo )
            })

        }
    }])