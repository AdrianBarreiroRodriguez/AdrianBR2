'use strict';

angular.module('insertarClientesModule')
    .component('insertarClientesModule', {
        templateUrl:'/app/insertar-clientes-module/insertar-clientes-module.html',
        controller: function($scope, $http) {
            console.log("Inicializando insertar-clientes-module")
        }
    }).controller('InsertarClienteController', function($scope, $http, $location){
        $scope.cliente.nombre;
        $scope.cliente.apellidos;
        $scope.cliente.dni;
        $scope.cliente.email;
        $scope.cliente.telefono;
        $scope.cliente.notas;
        $scope.insertar = function(){
            $http.post('api/clientes', cliente).then(function(response){
                
            });
        }
    });