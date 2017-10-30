'use strict';
angular.module('actualizarClienteModule',[]);
angular.module('actualizarClienteModule')
    .component('actualizarClienteModule', {
        templateUrl:'/app/citasPadreModule/actualizarClienteModule/actualizarClienteModule.html',
        controller: function($scope, $http) {
            console.log("Inicializando actualizar-clientes-module")
        }
    }).controller('ActualizarClienteController', function($scope, $http, $routeParams){
        $scope.cliente = {};
        $http.get('/api/clientes/' + $routeParams['id']).then( function(response){
            $scope.cliente = response.data;
        });

        $scope.actualizarCliente = function(){
            $http.put('api/clientes/' + $scope.cliente._id, $scope.mascota).then(function(response){
                console.log(response);
            });
        }
    });