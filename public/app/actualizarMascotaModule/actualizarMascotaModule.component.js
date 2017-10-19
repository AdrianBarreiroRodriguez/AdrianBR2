'use strict';
angular.module('actualizarMascotaModule',[]);
angular.module('actualizarMascotaModule')
    .component('actualizarMascotaModule', {
        templateUrl:'/app/actualizarMascotaModule/actualizarMascotaModule.html',
        controller: function($scope, $http) {
            console.log("Inicializando actualizar-mascota-module");
        }
    }).controller('ActualizarMascotaController', function($scope, $http, $routeParams){
        $scope.mascota = {};
        $http.get('/api/mascotas/' + $routeParams['id']).then(function(response){
            $scope.mascota = response.data;
        });

        $scope.actualizarMascota = function(){
            $http.put('/api/mascotas/' + $scope.mascota._id, $scope.mascota).then(function(response){
                console.log(response);
            });
        }
    });