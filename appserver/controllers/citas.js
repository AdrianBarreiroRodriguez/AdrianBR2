var mongoose = require('mongoose');
var Cita = mongoose.model('Cita');
var moment = require('moment');


module.exports.calendarioDeCitas= function(fechaInicio, fechaFin, response){
    var fechaInicioMoment = moment(fechaInicio);
    Cita.find({'fechaInicio':{$gt:fechaInicio},'fechaInicio':{$lte:fechaFin}})
    .populate('idMascota')
    .exec(function (err, citas) {
        console.log(citas);
        var citasFecha = citas.reduce(function(citasFecha, cita){
            var fecha = moment(cita.fechaInicio).format('YYYY/MM/DD');
            var hora = moment(cita.fechaInicio).format('hh:mm');
            if(citasFecha[fecha] == undefined) {
            	citasFecha[fecha] = {};
            }
            if(citasFecha[fecha][hora] == undefined) {
            	citasFecha[fecha][hora] = cita;
            }
            return citasFecha;
        },{});
        response.json(citasFecha);
    });
}


module.exports.recuperarCita = function (idCita){
    Cita.findById(idCita, function (err, cita) {
        if (!err) {
            console.log(cita);
            return cita;
        } else {
            return "error";
        }
    });
}


module.exports.guardarCita = function (cita){
    const objetoCita = new Cita(cita);
    objetoCita.save((err)=>{
        if (!err) {
            return "success";
        } else {
            return "error";
        }
    })
}


module.exports.actualizarCita = function(idCita, actualizacionCita){
    Cita.findById(idCita,
        function (err, cita) {
            if (!err) {
                cita.fechaInicio = actualizacionCita.fechaInicio;
                cita.fechaFin = actualizacionCita.fechaFin;
                cita.idMascota = actualizacionCita.idMascota;
                cita.idVeterinario = actualizacionCita.idVeterinario;
                cita.estado = actualizacionCita.estado;
                mascota.save(function (err, cita) {
                    if (!err) {
                        return "success";
                    } else {
                        return "error";
                    }
                });
            }
        }
    );
}



////////////////////////////////////////////////////////////////////
////////////   IMPLEMENTACION ESTRATEGIA CREAR STRING   ///////////
//////////////////////////////////////////////////////////////////

/*
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
*/


