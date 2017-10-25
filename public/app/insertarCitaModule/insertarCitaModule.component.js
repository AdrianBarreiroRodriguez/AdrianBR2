'use strict';
angular.module('insertarCitaModule',[]);
angular.module('insertarCitaModule')
    .component('insertarCitaModule', {
        templateUrl:'/app/insertarCitaModule/insertarCitaModule.html',
        controller: function($scope, $http) {
            console.log("Inicializando insertar-cita-module");
        }
    }).controller('InsertarCitaController', function($scope, $http, $routeParams, clienteRESTService){
    
        $scope.fechaCita = $routeParams['fechaCita'];
        $scope.clientes = {};

        $scope.actualizarListaClientes = function(nombreFiltrado){
            var criterio={};
            criterio.nombre = nombreFiltrado;
            clienteRESTService.get(criterio);
        }
    });