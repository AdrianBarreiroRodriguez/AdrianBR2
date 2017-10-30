'use strict';
angular.module('citasPadreModule',[]);
angular.module('citasPadreModule')
    .component('citasPadreModule', {
        templateUrl:'/app/citasPadreModule/citasPadreModule.html',
        controller: function($scope, $http, $routeParams) {
            $scope.fechaActual = $routeParams['fecha'];
            console.log("Inicializando citas-padre-module");
            $scope.$on("cita:irModificarCitaClick", (evento, datos) => {
                $scope.$broadcast("cita:irModificarCita", datos);
            });
            $scope.$on("cita:irCrearCitaClick", (evento, datos) => {
                $scope.$broadcast("cita:irCrearCita", datos);
            });
            $scope.$on("cita:citaGuardadaExito", (evento,datos)=>{
                $scope.$broadcast("cita:refrescarHorarioCitas");
            });
        }
    });