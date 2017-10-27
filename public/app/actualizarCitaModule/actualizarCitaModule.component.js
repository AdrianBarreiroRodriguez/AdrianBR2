'use strict';
angular.module('actualizarCitaModule',[]);
angular.module('actualizarCitaModule')
    .component('actualizarCitaModule', {
        templateUrl:'/app/actualizarCitaModule/actualizarCitaModule.html',
        controller: function($scope, $http) {
            console.log("Inicializando actualizar-cita-module");
        }
    }).controller('ActualizarCitaController', function($scope, $http, $routeParams){
        var idCita = $routeParams['id'];
        $http.get('api/citas' + idCita).then(function (response){
            $scope.cita = response.data;
        });
    });