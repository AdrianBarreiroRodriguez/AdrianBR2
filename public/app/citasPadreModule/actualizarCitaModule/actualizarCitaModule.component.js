'use strict';
angular.module('actualizarCitaModule',[]);
angular.module('actualizarCitaModule')
    .component('actualizarCitaModule', {
        templateUrl:'/app/citasPadreModule/actualizarCitaModule/actualizarCitaModule.html',
        controller: function($scope, $http) {
            console.log("Inicializando actualizar-cita-module");
        }
    }).controller('ActualizarCitaController', function($scope, $http){
        $scope.$on("cita:irModificarCita", function(evento, datos){
            var idCita = datos['id'];
            $http.get('api/citas/'+idCita).then(function (response){
                $scope.cita = response.data;
                $scope.hora = moment($scope.cita.fechaInicio).format("HH:mm");
            });
        });
        
        $scope.guardarEstado = function(){
            $http.put("api/citas/" + $scope.cita._id, $scope.cita).then(function (response){
                if(response.status == 200){
                    $scope.$emit("cita:citaActualizadaExito");
                }      
            });
        };
    });