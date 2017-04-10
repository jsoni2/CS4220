angular
    .module('SearchCtrl', [])
    .controller('SearchController', function($scope, SearchService) {

        $scope.searchShow = () => {
            SearchService.search.query({
                show: $scope.showname
            }, (response) => {
                $scope.results = response
            })
        }
    })