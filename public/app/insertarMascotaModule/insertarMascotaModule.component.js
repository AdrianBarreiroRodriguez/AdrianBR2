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
            $http.post('api/mascotas', $scope.mascota).then(function(response){
                console.log(response);
            });
        }
    });