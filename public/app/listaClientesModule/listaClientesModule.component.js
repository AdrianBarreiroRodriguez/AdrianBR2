'use strict';
angular.module('listaClientesModule', []);

angular.module('listaClientesModule')
    .component('listaClientesModule', {
        templateUrl:'/app/listaClientesModule/listaClientesModule.html',
        controller: function($scope, $http) {
            console.log("Inicializando lista-clientes-module");
        }
    })
    .controller('ListaClientesController', function($scope, $http, $location){
        $http.get('api/clientes').then(function (response){
            $scope.listaClientes = response.data;
        });

        $scope.irDetalleCliente = function(id){
            $location.path("/clientes/" + id);
        }

        $scope.ingresarCliente = function(){
            $location.path("/insertar/cliente/");
        }
    });
