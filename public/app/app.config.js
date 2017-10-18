'use strict';

angular.module('petStore')
    .config(function(
        $locationProvider,
        $routeProvider
    ){
        $locationProvider.html5Mode({ enabled: true });
        $routeProvider
            .when("/",{
                template: "<sample-module></sample-module>"
            })
            .when("/clientes",{
                template: "<lista-clientes-module></lista-clientes-module>"
            })
            .when("/clientes/:id",{
                template: "<cliente-detalle-module></cliente-detalle-module>"
            })
            .when("/insertar/cliente",{
                template: "<insertar-cliente-module></insertar-cliente-module>"
            })
            .when("/mascota/:id", {
                template: "<mascota-detalle-module></mascota-detalle-module>"
            })
            .otherwise({
                template: "Other"
            });
    });