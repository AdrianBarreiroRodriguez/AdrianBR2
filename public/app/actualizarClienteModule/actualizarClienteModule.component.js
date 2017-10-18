'use strict';
angular.module('actualizarClienteModule',[]);
angular.module('actualizarClienteModule')
    .component('actualizarClienteModule', {
        templateUrl:'/app/actualizarClienteModule/actualizarClienteModule.html',
        controller: function($scope, $http) {
            console.log("Inicializando actualizar-clientes-module")
        }
    }).controller('ActualizarClienteController', function($scope, $http){
        $scope.cliente = {};
        $scope.actualizarCliente = function(){
            $http.put('api/clientes' + $scope.cliente._id, $scope.cliente).then(function(response){
                console.log(response);
            });
        }
    });