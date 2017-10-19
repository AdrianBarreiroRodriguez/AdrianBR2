var mongoose = require('mongoose');
var Cita = mongoose.model('Cita');
var moment = require('moment');

module.exports.calendarioDeCitas= function(fechaInicio, fechaFin){
    var fechaInicioMoment = moment(fechaInicio);
    Cita.find({'fechaInicio':{$gt:fechaInicio},'fechaInicio':{$lte:fechaFin}}, function(err, citas){
        if(!err){
            console.log(citas);
            return crearObjetoJSONCalendario(citas);
        }else{
            console.log(err);
        }
    });
}

function crearObjetoJSONCalendario(citas, fechaInicio, fechaFin){
    const horaInicio = "9:00";
    const horaFin = "18:00";
    var numeroDeHoras = numeroDeCitasDisponibles(horaInicio, horaFin);
    var cadenaJSON = "{";
    var numeroDeFechas= numeroDeDiasEntreFechas(fechaInicio, fechaFin);
    var fechaBucle = fechaInicio;
    for(var i=0; i<numeroDeFechas; i++){
        cadenaJSON = cadenaJSON + fechaBucle + ":{";
        var horaBucle = horaInicio;
        for(var j=0; j<numeroDeHoras; j++){
            cadenaJSON = cadenaJSON + horaBucle +":{";
            var citaParaHoraActual = buscarCitaPorFechaYHora(fechaBucle, horaBucle);
            var cadenaDatosCita = construirCadenaParaCita(citaParaHoraActual);
            cadenaJSON = cadenaJSON + cadenaDatosCita + "}";
            horaBucle = plusHora(horaBucle);
        }
        cadenaJSON = cadenaJSON + "}";
        fechaBucle = plusDia(fechaBucle);
    }
    cadenaJSON = cadenaJSON + "}";
    var objetoJSONCalendario = JSON.parse(cadenaJSON);
    return objetoJSONCalendario;
}


function numeroDiasEntreFechas(fechaInicio, fechaFin){

}

function numeroDeCitasDisponibles(){

}

function buscarCitaPorFechaYHora(){

}

function construirCadenaParaCita(){

}

function plusDia(){

}

function plusHora(){
    
}