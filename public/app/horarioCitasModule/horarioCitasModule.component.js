'use strict';
angular.module('horarioCitasModule',[]);
angular.module('horarioCitasModule')
    .component('horarioCitasModule', {
        templateUrl:'/app/horarioCitasModule/horarioCitasModule.html',
        controller: function($scope, $http) {
            console.log("Inicializando actualizar-mascota-module");
        }
    }).controller('HorarioCitasController', function($scope, $http, $routeParams, calendarioCitasService){
        const horaInicio = "8:00";
        const horaFin = "18:00";
        $scope.fecha = $routeParams['fecha'];
        $scope.citas = calendarioCitasService.getCalendarioCitasFecha($scope.fecha);

        function crearHorario(horaInicio, horaFin){

        }
        
        $scope.horario = crearHorario(horaInicio, horaFin);
    });