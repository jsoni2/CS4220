myApp.directive('myAddress', function() {
    return {
        route: {
            data: '='
        },
        restrict: 'E',
        templateUrl: 'views/directives/my-address.html'
    }
})