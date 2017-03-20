angular
    .module('app', ['ngRoute', 'ngResource', 'FactCtrl', 'FactSrvc'])
    .config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('')
    }])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'views/fact.html',
                controller: 'FactController'
            })
            .otherwise({
                redirectTo: '/'
            })

    }])

