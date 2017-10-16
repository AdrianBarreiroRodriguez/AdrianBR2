'use strict';

angular.module('petStore')
    .config(function(
        $locationProvider,
        $routeProvider
    ){
        $locationProvider.html5Mode({ enabled: true });
        $routeProvider
            .when("/",{
                //template: "Pet Store Demo (Hello World) <a ng-href='sample'>Sample Module</a>"
            })
            .when("/sample",{
                template: "<sample-module></sample-module>"
            })
            .when("/clientes",{
                template: "<lista-clientes-module></lista-clientes-module>"
            })
            .when("/cliente/:id",{
                template: "<cliente-detalle-module></cliente-detalle-module>"
            })
            .when("/insertar/cliente",{
                template: "<insertar-cliente-module></insertar-cliente-module>"
            })
            .otherwise({
                template: "Other"
            });
    });