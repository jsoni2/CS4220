angular
    .module('FactCtrl', [])
    .controller('FactController', function($scope, FactService) {

        $scope.getMathFact = () => {
            FactService.get({
                type: 'math',
                number: $scope.number,
            }, (response) => {
                $scope.fact = response
            })
        }
    })