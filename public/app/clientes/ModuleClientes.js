var moduleClientes = angular.module('ModuleClientes', ["ngRoute"]);
moduleClientes.config(function ($locationProvider, $routeProvider) {
  $locationProvider.html5Mode({ enabled: true });
  $routeProvider
    .when('/clientes', {
      template: '<lista-clientes></lista-clientes>'
    })
    .when('clientes/:id',{
      template: '<detalle-cliente></detalle-cliente>'  
    });
});
