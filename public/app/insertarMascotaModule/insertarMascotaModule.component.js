'use strict';
angular.module('insertarMascotaModule',[]);
angular.module('insertarMascotaModule')
    .component('insertarMascotaModule', {
        templateUrl:'/app/insertarMascotaModule/insertarMascotaModule.html',
        controller: function($scope, $http) {
            console.log("Inicializando insertar-clientes-module")
        }
    }).controller('InsertarMascotaController', function($scope, $http, $location, $routeParams){
        $scope.mascota = {};
        $scope.mascota.idPropietario = $routeParams['id'];
        $scope.insertarMascota= function(){
            if(validarFormulario()){
                $http.post('api/mascotas', $scope.mascota).then(function(response){
                    console.log(response);
                });
            }else{
                alert("Errores en el formulario");
            }
            
        }
        function validarFormulario(){
            var constraints = {
                nombre: {
                    presence: true,
                    length: {
                        maximun: 20,
                    }
                },

                especie:{
                    presence: true,
                    length: {
                        maximun: 20,
                    }
                }, 
                
                raza:{
                    presence: true,
                    length: {
                        maximun: 20,
                    }
                },

                fechaNacimiento:{
                    presence: true,
                    format:{
                        pattern: "^[0-9]{4}-[0-3][0-9]-[0-3][0-9]$", 
                    }
                },

                numeroChip:{
                    presence: true,
                    length: {
                        is: 10,
                    }
                },

                urlImagen:{
                    presence: true,
                }
            }

            var errors = validate($scope.mascota, constraints);
            if(errors !=undefined){
                alert("Tienes errores en el formulario");
                return false;
            }else{
                return true;
            }
        }
        
    });