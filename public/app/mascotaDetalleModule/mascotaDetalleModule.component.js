'use strict';
angular.module('mascotaDetalleModule',[]);
angular.module('mascotaDetalleModule')
    .component('mascotaDetalleModule', {
        templateUrl:'/app/mascotaDetalleModule/mascotaDetalleModule.html',
        controller: function($scope, $http, $routeParams, $location){
            console.log("Inicializando mascota-detalle-module");
            var idMascota = $routeParams['id'];
            $http.get('api/mascotas/' + idMascota).then(function(response){
                $scope.mascota = response.data;
            });

            $scope.irActualizarMascota = function(){
                $location.path("/actualizar/mascota/" + idMascota);
            }
        }
    });