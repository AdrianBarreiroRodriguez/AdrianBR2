var mongoose = require('mongoose');
var Cita = mongoose.model('Cita');
var moment = require('moment');

module.exports.calendarioDeCitas= function(fechaInicio, fechaFin){
    var fechaInicioMoment = moment(fechaInicio);
    Cita.find({'fechaInicio':{$gt:fechaInicio},'fechaInicio':{$lte:fechaFin}}, function(err, citas){
        if(!err){
            console.log(citas);
            crearObjetoJSONCalendario(citas);
        }else{
            console.log(err);
        }
    });
}

function crearObjetoJSONCalendario(citas){
    
}

