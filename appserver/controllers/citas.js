var mongoose = require('mongoose');
var Cita = mongoose.model('Cita');
var moment = require('moment');


module.exports.calendarioDeCitas= function(request, response){
    var fechaInicio = request.params.fromDate;
    var fechaFin = request.params.toDate;
    Cita.find({'fechaInicio':{$gt:fechaInicio},'fechaInicio':{$lte:fechaFin}})
    .populate('idMascota')
    .exec(function (err, citas) {
        console.log(citas);
        var citasFecha = citas.reduce(function(citasFecha, cita){
            var fecha = moment(cita.fechaInicio).format('YYYY-MM-DD');
            var hora = moment(cita.fechaInicio).format('HH:mm');
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


module.exports.recuperarCita = function (request, response){
    var idCita = request.params.id;
    Cita.findById(idCita, function (err, cita) {
        if (!err) {
            console.log(cita);
            response.status(200);
            response.json(cita);
        } else {
            response.send(500, err.message);
        }
    });
}


module.exports.guardarCita = function (request, response){
    var cita = request.body;
    const objetoCita = new Cita(cita);
    objetoCita.save((err)=>{
        if (!err) {
            response.status(200);
            response.json('{"status":"success"}');
        } else {
            response.send(500, err.message);
        }
    })
}


module.exports.actualizarCita = function(request, response){
    var actualizacionCita = request.body;
    var idCita = request.params.id;
    Cita.findById(idCita,
        function (err, cita) {
            if (!err) {
                cita.fechaInicio = actualizacionCita.fechaInicio;
                cita.fechaFin = actualizacionCita.fechaFin;
                cita.idMascota = actualizacionCita.idMascota;
                cita.idVeterinario = actualizacionCita.idVeterinario;
                cita.estado = actualizacionCita.estado;
                cita.save(function (err, cita) {
                    if (!err) {
                        response.status(200);
                        response.json('{"status":"success"}');
                    } else {
                        response.send(500, err.message);
                    }
                });
            }
        }
    );
}


module.exports.recuperarCitasFecha = function (request, response){
    var fecha = request.params.date;
    Cita.find({'fechaInicio':fecha})
    .populate('idMascota')
    .exec(function (err, citas) {
        console.log(citas);
        var citasFecha = citas.reduce(function(citasFecha, cita){
            var hora = moment(cita.fechaInicio).format('HH:mm');
            if(citasFecha[hora] == undefined) {
            	citasFecha[hora] = cita;
            }
            return citasFecha;
        },{});
        response.json(citasFecha);
    });
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


