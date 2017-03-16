angular.module('myDirectiveApp', [])
    .controller('MyDirectiveController', ['$scope', function($scope){

        $scope.name = {
            first: 'John',
            last: 'Doe'
        }
        $scope.address = {
            street: '5151 State University Dr.',
            city: 'Los Angeles',
            state: 'California',
            region: 'West'
        }
        $scope.address2 = {
            street: '1600 Amphitheater Way',
            city: 'Mountain View',
            state: 'California',
            region: 'West'
        }

    }])
    .directive('myBindableDirective', function(){
        return {
            scope: {
                text: '@'                
            },
            template: '<p>{{text}}</p>'

        }
    })
    .directive('myName', function() {
        return {
            template: '<strong>{{name.first + " " + name.last}}</strong>'
        }
    })
    .directive('myAddress', function() {
        return {
            scope: {
                data: '=foobar'
            },

            // Restrict the use of this directive to only Elements
            restrict: 'E',

            // 'A' - only matches attribute name
            // 'E' - only matches element name
            // 'C' - only matches class name
            // 'M' - only matches comment

            //  Best Practice: Unless your template is very small, 
            //    it's typically better to break it apart into its 
            //    own HTML file and load it with the templateUrl option.
            templateUrl: 'my-address.html'
        }
    })

    