angular
    .module('TVMazeCtrl', [])
    .controller('TVMazeController', function($scope, TVMazeService) {

        $scope.searchShow = () => {
            TVMazeService.search.query({
                show: $scope.showname
            }, (response) => {
                $scope.results = response
            })
        }

    })