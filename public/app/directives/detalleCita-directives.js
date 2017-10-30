'use strict';

angular.module('detalleCitaDirectivesModule', [])
        .directive('cita',function () {
            var linker = function (scope, element, attrs) {
                
            };
            var controller = function ($scope) {
                
            };
            return {
                restrict: 'A',
                controller: controller,
                controllerAs: 'cita',
                link: linker,
                template: '<span>{{hora}}</span>\
                           <span>{{citas[hora].idMascota.nombre}}</span>\
                           <span>{{citas[hora].idMascota.especie}}</span>\
                           <span>{{citas[hora].estado}}</span>\
                           <input type="button" value="modificar" ng-if="citas[hora]" ng-click="irModificarCita(citas[hora]._id)">\
                           <input type="button" value="insertar" ng-if="!citas[hora]" ng-click="irCrearCita(hora)">'
            };
});