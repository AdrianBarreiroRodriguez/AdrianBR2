moduleClientes.component('listaClientes', {
    templateUrl: 'app/clientes/lista-cliente/lista-clientes.template.html',
    controller: function ($http, $scope) {
        console.log("inicializando el CustomerListController...");
    }

}).controller('ListaClientesController', function($http, $scope) {
    $http.get("/api/clientes").then(function (response) {
        console.log("Response /api/clientes", response);
        $scope.listaClientes = response.data;
    });
});