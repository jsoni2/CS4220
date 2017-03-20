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
        $scope.getTriviaFact = () => {
            FactService.get({
                type: 'trivia',
                number: $scope.number,
            }, (response) => {
                $scope.fact = response
            })
        }
        $scope.getDateFact = () => {
            FactService.get({
                type: 'date',
                number: $scope.number,
            }, (response) => {
                $scope.fact = response
            })
        }
        $scope.getRandomFact = () => {
            FactService.get({
                type: 'math',
                number: $scope.number,
            }, (response) => {
                $scope.fact = response
            })
        }
    })
