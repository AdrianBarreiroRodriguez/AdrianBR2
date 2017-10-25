angular.module('clienteRESTService', []).factory('clienteRESTService', function($resource, $q){
    return $resource('/api/clientes/:id', {id: '@id'}, {
    update: { method:'PUT'}
    })
});