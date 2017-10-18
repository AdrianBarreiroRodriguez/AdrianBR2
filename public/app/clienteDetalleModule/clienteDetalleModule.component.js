'use strict';
angular.module('clienteDetalleModule',[]);
angular.module('clienteDetalleModule')
    .component('clienteDetalleModule', {
        templateUrl:'/app/clienteDetalleModule/clienteDetalleModule.html',
        controller: function($scope, $http, $routeParams, $location){
            console.log("Inicializando cliente-detalle-module");
            var idCliente = $routeParams['id'];
            $http.get('api/clientes/' + idCliente).then(function(response){
                $scope.cliente = response.data;
            });
            $http.get('api/clientes/mascotas/' + idCliente).then(function(response){
                $scope.listaMascotas = response.data;
            });

            $scope.irDetalleMascota = function(id){
                $location.path("/mascota/" + id);
            }
        }
    });

    