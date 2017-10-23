'use strict';

angular.module('sampleModule')
    .component('sampleModule', {
        templateUrl:'/app/sample-module/sample-module.html',
        controller: function($scope, $http) {
            console.log("Inicializando sample-module")
        }
    });

    /*angular.module('appointmentsService', []).factory('appointmentsService', function($http, $q){
        var service = {};
        
        // cache local de los datos de appointments
        service._appointmentsMapByMonth = {};
        
        /**
         * Devuelve una promesa con el mapa de appointments de este month indexados por [dia][hora]
         */
        /*service.getMonthAppointmentsByDate = (month) => {
            var d = $q.defer();
            
            var startDate = moment(month).format('YYYYMMDD');
            var endDate = moment(month).add(1,'M').format('YYYYMMDD');
    
            // si ya tenemos los datos los devolvemos
            if(service._appointmentsMapByMonth[startDate]) {
                d.resolve(service._appointmentsMapByMonth[startDate]);
                return d.promise;
            }
            
            // en caso contrario vamos al servidor
            $http.get("/api/appointmentsByDate/" + startDate + "/"+ endDate)
                .success(function(response) {
                    service._appointmentsMapByMonth[startDate] = response;
                    d.resolve(service._appointmentsMapByMonth[startDate]);
                })
                .error(function(response) {
                    d.reject({status: response.status, message: 'TODO'});
                });
            return d.promise;
        }*/