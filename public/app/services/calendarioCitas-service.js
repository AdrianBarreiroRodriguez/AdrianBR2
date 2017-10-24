'use strict';

angular.module('calendarioCitasService', []).factory('calendarioCitasService', function($http, $q){
    var servicio = {};
    servicio._calendarioCitasPeriodo={};
    servicio._horarioCitasFecha={};

    //Los parametros fechaInicial y fechaFinal son Strings con el formato "YYYY-MM-DD"
    servicio.getCalendarioCitasPeriodo = function(fechaInicial, fechaFinal){
        var d = $q.defer();
    
        function coincideCalendarioActualConPeriodo(fechaInicial, fechaFinal){
            var arrayDiasCalendario = Object.keys(servicio._calendarioCitasPeriodo);
            var longitudArray = arrayDiasCalendario.length;
            var fechaInicialCalendarioServicio = arrayDiasCalendario[0];
            var fechaFinalCalendarioServicio = arrayDiasCalendario[longitudArray]; 
            if((fechaInicialCalendarioServicio == fechaInicial) && (fechaFinalCalendarioServicio == fechaFinal)){
                return true;
            }
            return false;
        }

        if(coincideCalendarioActualConPeriodo(fechaInicial, fechaFinal)){
            d.resolve(servicio._calendarioCitasPeriodo);
            return d.promise;                        
        }


        $http.get("/api/citas/" + fechaInicial + "/"+ fechaFinal)
        .then(function(response) {
            servicio._calendarioCitasPeriodo = response.data;
            d.resolve(servicio._calendarioCitasPeriodo);
        });
        return d.promise;
    }

    //El para metro fecha es un String con el formato "YYYY-MM-DD"
    servicio.getCalendarioCitasFecha = function (fecha){
        var d = $q.defer();
        if(estaEnCalendarioCitasActual(fecha)){
            d.resolve(servicio._calendarioCitasPeriodo[fecha]);
            return d.promise;    
        }

        function estaEnCalendarioCitasActual(fecha){
            if(servicio._calendarioCitasPeriodo[fecha] == undefined){
                return false;
            }
            return true;
        }

        $http.get("/api/citas/" + fecha)
        .then(function(response){
            servicio._horarioCitasFecha = response.data;
            d.resolve(servicio._horarioCitasFecha);
        });
        return d.promise;
    } 
    return servicio;
});

