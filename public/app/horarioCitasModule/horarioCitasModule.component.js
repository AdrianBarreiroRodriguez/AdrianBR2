'use strict';
angular.module('horarioCitasModule',[]);
angular.module('horarioCitasModule')
    .component('horarioCitasModule', {
        templateUrl:'/app/horarioCitasModule/horarioCitasModule.html',
        controller: function($scope, $http) {
            console.log("Inicializando actualizar-mascota-module");
        }
    }).controller('HorarioCitasController', function($scope, $http, $routeParams, $location, calendarioCitasService){
        const horaInicio = moment("8:00", "hh:mm");
        const horaFin = moment("18:00", "hh:mm");
        $scope.fecha = $routeParams['fecha'];
        $scope.citas = {};
        calendarioCitasService.getCalendarioCitasFecha($scope.fecha).then(function(response){
            $scope.citas = response;     
        });    

        function crearHorario(horaInicio, horaFin){
            var horaBucle = horaInicio;
            var cadenaHoraBucle = horaBucle.format("HH:mm");
            var cadenaHoraFin = horaFin.format("HH:mm");
            while(cadenaHoraBucle!=cadenaHoraFin){
                $scope.horario.push(cadenaHoraBucle);
                horaBucle.add(0.5,'h');
                cadenaHoraBucle = horaBucle.format("HH:mm");
            }          
        }
        $scope.horario = new Array();
        crearHorario(horaInicio, horaFin);

        $scope.irCrearCita = function(hora){
            var horaFecha = moment(hora, 'HH:mm');
            var horaNumero= horaFecha.format('HH');
            var minutos = horaFecha.format('mm')
            var fecha = moment($scope.fecha, 'YYYY-MM-DD').set('HH', parseInt(horaNumero)).set('mm', parseInt(minutos));
            var cadenaFecha = fecha.format();
            $location.path("insertar/cita/" + cadenaFecha);
        }

        $scope.irDetalleCita = function(idCita){
            $location.path("cita/" + idCita);
        }
    });