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
            .when("/actualizar/cliente/:id", {
                template: "<actualizar-cliente-module></actualizar-cliente-module>"        
            })
            .when("/mascota/:id", {
                template: "<mascota-detalle-module></mascota-detalle-module>"
            })
            .when("/insertar/mascota/:id",{
                template: "<insertar-mascota-module></insertar-mascota-module>"
            })
            .when("/actualizar/mascota/:id",{
                template: "<actualizar-mascota-module></actualizar-mascota-module>"
            })
            .when("/calendario",{
                template: "<calendario-citas-module></calendario-citas-module>"
            })
            .otherwise({
                template: "Other"
            });
    });