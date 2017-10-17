'use strict';
angular.module('insertarClienteModule',[]);
angular.module('insertarClienteModule')
    .component('insertarClienteModule', {
        templateUrl:'/app/insertarClienteModule/insertarClienteModule.html',
        controller: function($scope, $http) {
            console.log("Inicializando insertar-clientes-module")
        }
    }).controller('InsertarClienteController', function($scope, $http, $location){
        $scope.cliente = {};
        $scope.insertar = function(){
            $http.post('api/clientes', $scope.cliente).then(function(response){
                console.log(response);
            });
        }
    });