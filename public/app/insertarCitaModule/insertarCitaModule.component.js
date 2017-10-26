'use strict';
angular.module('insertarCitaModule',[]);
angular.module('insertarCitaModule')
    .component('insertarCitaModule', {
        templateUrl:'/app/insertarCitaModule/insertarCitaModule.html',
        controller: function($scope, $http) {
            console.log("Inicializando insertar-cita-module");
        }
    }).controller('InsertarCitaController', function($scope, $http, $routeParams, $q, clienteRESTService){
    
        $scope.fechaCita = $routeParams['fechaCita'];
        $scope.clientes = {};

        function rellenarMascotasPorCliente(){
            var listaMascotasPorCliente = new Array();
            for(var i=0; i<$scope.clientes.length; i++){
                var d = $q.defer();
                var idCliente = $scope.clientes[i]._id;
                $scope.clientes[i].mostrar = false;
                $http.get('api/clientes/mascotas/' + idCliente).then(function(response){
                    var mascotas = {};
                    mascotas = response.data;
                    d.resolve(mascotas);
                });
                d.promise.then(function(response){
                    listaMascotasPorCliente.push(response);
                    if($scope.clientes.length == listaMascotasPorCliente.length){
                        agregarMascotasAClientes(listaMascotasPorCliente);
                    }
                });
            }
        }
        
        function agregarMascotasAClientes(listaMascotasPorCliente){
            for(var i=0; i < listaMascotasPorCliente.length; i++){
                var idPropietario;
                if(listaMascotasPorCliente[0].length > 0){
                    idPropietario = listaMascotasPorCliente[0][0].idPropietario;
                }
                for(var j=0; j<$scope.clientes.length; j++){
                    if(idPropietario == $scope.clientes[j]._id){
                        $scope.clientes[j].mascotas = {};
                        $scope.clientes[j].mascotas = listaMascotasPorCliente[i];
                    }
                }
            }        
        }


        $scope.mostrarMascotas = function(cliente){
            if(cliente.mostrar == true){
                cliente.mostrar = false;
            }else{
                cliente.mostrar = true;
            }
        }

        $scope.insertarCita = function(mascota){
            
            $http.post('api/mascotas', cita).then(function(response){
                console.log(response);
            });
        }

        $scope.actualizarListaClientes = function(nombreFiltrado){
            var criterio={};
            criterio.nombre = nombreFiltrado;
            //$scope.clientes = clienteRESTService.query(criterio);
            $scope.clientes = clienteRESTService.query(criterio, function(){
                rellenarMascotasPorCliente();
            });
        }
    });