'use strict';
angular.module('calendarioCitasModule',[]);
angular.module('calendarioCitasModule')
    .component('calendarioCitasModule', {
        templateUrl:'/app/calendarioCitasModule/calendarioCitasModule.html',
        controller: function($scope, $http) {
            console.log("Inicializando calendario-citas-module")
        }
    }).controller('CalendarioCitasController', function($scope, $http){
        var fechaInicio = moment().set('date', 1);
        var fechaFin = moment().set('date', 1).add(1,'M');
        $scope.mes = moment().get('month');
        var year = moment().get('year');
        $scope.semanasMes = crearSemanasMes(fechaInicio);
        $http.get('/api/citas/' + fechaInicio.format('YYYY-MM-DD') + "/" + fechaFin.format('YYYY-MM-DD')).then( function(response){
            $scope.citas = response.data;
        });


        $scope.irHorarioDia = function (){

        };
    });

    function crearSemanasMes(fechaInicio){
        var numeroSemanas = cuantasSemanasMes(fechaInicio);
        var semanas = new Array(numeroSemanas);
        for(var i=0; i<numeroSemanas; i++){
            semanas[i][]
        }

    }