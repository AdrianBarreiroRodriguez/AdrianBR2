'use strict';

angular.module('listaClientesModule')
    .component('listaClientesModule', {
        templateUrl:'/app/lista-clientes-module/lista-clientes-module.html',
        controller: function($scope, $http) {
            console.log("Incializando lista-clientes-module")
        }
    }).controller('ListaClientesController', function($scope, $http){
        $http.get('api/clientes').then(function (response){
            $scope.listaClientes = response.data;
        });
    });
