'use strict';

angular.module('clienteDetalleModule')
    .component('clienteDetalleModule', {
        templateUrl:'/app/cliente-detalle-module/cliente-detalle-module.html',
        controller: function($scope, $http, $routeParams){
            console.log("Inicializando cliente-detalle-module");
            var idCliente = $routeParams['id'];
            $http.get('/cliente/' + idCliente).then(function(response){
                $scope.cliente = response.data;
            });
            $http.get('/clientes/mascotas/' + idCliente).then(function(response){
                $scope.listaMascotas = response.data;
            });
        }
    });

    