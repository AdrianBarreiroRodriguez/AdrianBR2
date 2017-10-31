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
                template: '<span class="hora_cita">{{hora}}</span>\
                           <span>{{citas[hora].idMascota.nombre}}</span>\
                           <span>{{citas[hora].idMascota.especie}}</span>\
                           <span>{{estadosCita[citas[hora].estado]}}</span>\
                           <button  class=".btn-success btn-xs" ng-if="citas[hora]" ng-click="irModificarCita(citas[hora]._id)">modificar</button>\
                           <button  class=".btn-success btn-xs" ng-if="!citas[hora]" ng-click="irCrearCita(hora)">insertar</button>'
            };
});