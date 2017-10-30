'use strict';
angular.module('insertarCitaModule',[]);
angular.module('insertarCitaModule')
    .component('insertarCitaModule', {
        templateUrl:'/app/citasPadreModule/insertarCitaModule/insertarCitaModule.html',
        controller: function($scope, $http) {
            console.log("Inicializando insertar-cita-module");
        }
    }).controller('InsertarCitaController', function($scope, $http, $q, clienteRESTService){
        $scope.$on("cita:irCrearCita", function(evento, datos){
            var cadenaFecha = datos['fecha'];
            $scope.fechaCita = moment(cadenaFecha);
            $scope.clientes = {};
        });
       

        $scope.mostrarMascotas = function(cliente){
            if(cliente.mostrar == true){
                cliente.mostrar = false;
            }else{
                cliente.mostrar = true;
            }
        }

        $scope.insertarCita = function(mascota){
            var cita = {
                fechaInicio: moment($scope.fechaCita).format(),
                fechaFin: moment($scope.fechaCita).set('m', 30).format(),
                idMascota: mascota._id,
                idVeterinario: null,
                estado: 0
            };

            $http.post('api/citas', cita).then(function(response){
                console.log(response);
                if(response.status == 200){
                    $scope.$emit("cita:citaGuardadaExito");
                }
            });
        }

        $scope.actualizarListaClientes = function(nombreFiltrado){
            $http.get("api/clientes/mascotas/?nombre=" + nombreFiltrado).then(function(response){
                $scope.clientes = response.data;
            });
        }
    });