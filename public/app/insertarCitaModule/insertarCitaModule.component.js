'use strict';
angular.module('insertarCitaModule',[]);
angular.module('insertarCitaModule')
    .component('insertarCitaModule', {
        templateUrl:'/app/insertarCitaModule/insertarCitaModule.html',
        controller: function($scope, $http) {
            console.log("Inicializando insertar-cita-module");
        }
    }).controller('InsertarCitaController', function($scope, $http, $routeParams){
    
        $scope.fechaCita = $routeParams['fechaCita'];
        $scope.mascotas = {};

        $scope.actualizarListaMascotas = function(nombreFiltrado){

        }
        

    });