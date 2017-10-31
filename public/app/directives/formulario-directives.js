'use strict';

angular.module('formularioDirectivesModule', [])
        .directive('entradaDatos',function () {
            return {
                restrict: 'E',
                replace : true,
                scope: {
                    etiqueta: '@',
                    modelo: '=',
                    nombre: '@',
                    placeholder: '@',
                },
                template: '<div class="form-group">\
                            <label>{{etiqueta}}</label>\
                            <input type="text" class="form-control" placeholder={{placeholder}} ng-model="modelo">\
                            </div>'
            };
});