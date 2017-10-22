'use strict';
angular.module('calendarioCitasModule',[]);
angular.module('calendarioCitasModule')
    .component('calendarioCitasModule', {
        templateUrl:'/app/calendarioCitasModule/calendarioCitasModule.html',
        controller: function($scope, $http) {
            console.log("Inicializando calendario-citas-module");
        }
    }).controller('CalendarioCitasController', function($scope, $http){
        const MESES = ['ENERO', "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE","NOVIEMBRE", "DICIEMBRE"];

        $scope.crearCalendario = function(){
            var fechaPrimerDiaMes = moment($scope.year + "-" + $scope.numeroMes + "-01", 'YYYY-MM-DD');
            var fechaPrimerDiaMesSiguiente = moment($scope.year + "-" + $scope.numeroMes + "-01", 'YYYY-MM-DD').add(1,'M');
            var indiceMes= $scope.numeroMes - 1;
            $scope.nombreMes =  MESES[indiceMes];
                
            $http.get('/api/citas/' + fechaPrimerDiaMes.format('YYYY-MM-DD') + "/" + fechaPrimerDiaMesSiguiente.format('YYYY-MM-DD')).then( function(response){
                $scope.citas = response.data;
                $scope.semanasMes = crearSemanasMes(fechaPrimerDiaMes);
            });
        }

        $scope.numeroMes = moment().format('MM');
        $scope.year = moment().get('year');

        $scope.crearCalendario();

        $scope.incrementarMes = function(){
            if($scope.numeroMes == "12"){
                $scope.year++;
            }
            $scope.numeroMes = moment($scope.year+'-'+$scope.numeroMes,'YYYY-MM').add(1,'month').format('MM');
            $scope.crearCalendario();
        }

        $scope.decrementarMes = function(){
            if($scope.numeroMes == 1){
                $scope.year--;
            }
            $scope.numeroMes = moment($scope.year+'-'+$scope.numeroMes,'YYYY-MM').subtract(1,'month').format('MM');
            $scope.crearCalendario();
        }
        
        
        

        function crearSemanasMes(fechaPrimerDiaMes){
            var numeroSemanas = numeroSemanasMes(fechaPrimerDiaMes);
            var fechaBucle = fechaInicialCalendario(fechaPrimerDiaMes);
            var semanas = new Array(numeroSemanas);
            for(var i=0; i<numeroSemanas; i++){
                semanas[i] = new Array(7);
                for(var j=0; j<semanas[i].length; j++){
                    semanas[i][j] = {};
                    var copiaFecha = moment(fechaBucle.format("YYYY-MM-DD"));
                    semanas[i][j].fecha= copiaFecha;
                    var cadenaFecha = fechaBucle.format("YYYY-MM-DD");
                    if( $scope.citas.hasOwnProperty(cadenaFecha) ) {
                        var numeroDeCitas = Object.keys($scope.citas[cadenaFecha]).length;
                        semanas[i][j].numeroCitas =  numeroDeCitas;
                    }else{
                        semanas[i][j].numeroCitas = "";
                    }
                    if(fechaBucle.get('month') == fechaPrimerDiaMes.get('month')){
                        semanas[i][j].esMesActual = "yes_month";
                    }else{
                        semanas[i][j].esMesActual = "no_month";
                    }
                    fechaBucle.add(1,'d');
                }
            }
            return semanas;
        }
    
    
        function numeroSemanasMes(fechaPrimerDiaMes){
            var fechaBucle = fechaInicialCalendario(fechaPrimerDiaMes);
            var copiaFecha = moment(fechaPrimerDiaMes.format('YYYY-MM-DD'));
            var numeroDias = 0;
            if(fechaPrimerDiaMes.get('month') == 11){
                numeroDias = copiaFecha.set('date', 31).dayOfYear() - fechaBucle.dayOfYear();
                numeroDias++;
            }else{
                numeroDias = copiaFecha.add(1,'M').dayOfYear() - fechaBucle.dayOfYear();
            }
            var numeroSemanasMes = Math.trunc(numeroDias/7) + 1;
            return numeroSemanasMes;
        }
    
        function fechaInicialCalendario(fechaPrimerDiaMes){
            var numeroDiaSemana = fechaPrimerDiaMes.day();
            var fechaInicialCalendario = moment(fechaPrimerDiaMes.format('YYYY-MM-DD'));
            if(numeroDiaSemana == 0){
                fechaInicialCalendario.subtract(6, 'd')
            }
            else{
                fechaInicialCalendario.subtract(numeroDiaSemana - 1, 'd');
            }
            return fechaInicialCalendario;
        }
        

        $scope.irHorarioDia = function (dia){
            
        };
    });

    