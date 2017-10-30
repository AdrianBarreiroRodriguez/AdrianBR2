'use strict';
angular.module('horarioCitasModule',[]);
angular.module('horarioCitasModule')
    .component('horarioCitasModule', {
        templateUrl:'/app/citasPadreModule/horarioCitasModule/horarioCitasModule.html',
        bindings:{
            fechaActual: '='
        },
        controller: function($scope, $http, calendarioCitasService) {
            console.log("Inicializando actualizar-mascota-module");         
            this.$onInit= function (){
                cargarCitas(this.fechaActual);
                $scope.$on("cita:refrescarHorarioCitas", (evento, datos) => {
                    calendarioCitasService.actualizarCalendarioCitas().then(function(){
                        calendarioCitasService.getCalendarioCitasFecha($scope.fecha).then(function(response){
                            $scope.citas = response;     
                        });
                    });
                });
            }
            
            function cargarCitas(fecha){
                $scope.fecha = fecha;
                const horaInicio = moment("8:00", "hh:mm");
                const horaFin = moment("18:00", "hh:mm");
                $scope.citas = {};
                calendarioCitasService.getCalendarioCitasFecha($scope.fecha).then(function(response){
                    $scope.citas = response;     
                });
                $scope.horario = new Array();
                crearHorario(horaInicio, horaFin);
            }

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


            $scope.irCrearCita = function(hora){
                var horaFecha = moment(hora, 'HH:mm');
                var horaNumero= horaFecha.format('HH');
                var minutos = horaFecha.format('mm')
                var fecha = moment($scope.fecha, 'YYYY-MM-DD').set('H', parseInt(horaNumero)).set('m', parseInt(minutos));
                var cadenaFecha = fecha.format();
                $scope.$emit("cita:irCrearCitaClick", {fecha:cadenaFecha});
            }

            $scope.irModificarCita = function(idCita){
                console.log(idCita);
                $scope.$emit("cita:irModificarCitaClick", {id:idCita});
            }
    }
});