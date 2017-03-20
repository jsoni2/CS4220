angular
    .module('FactSrvc', ['ngResource'])
    .factory('FactService', function($resource) {
        return $resource('/api/:type')
    })