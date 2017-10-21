var mongoose = require('mongoose');
var Cita = mongoose.model('Cita');

var date = Date.now();
console.log(date);

Cita.create({
    fechaInicio:"2017-10-19T10:00:00.000Z",
    fechaFin:"2017-10-19T10:30:00.000Z",
    idMascota:"59e78b8f484c312f3c1abcf6",
    idVeterinario:"un veterinario",
    estado:0,
}, function(err, cita){
    if(!err){
        console.log("Cita creada y guardada " + cita);
    }else{
        console.log(err);
    }
});

Cita.create({
    fechaInicio:"2017-10-02T11:00:00.000Z",
    fechaFin:"2017-10-02T11:30:00.000Z",
    idMascota:"59e78b8f484c312f3c1abcf6",
    idVeterinario:"un veterinario",
    estado:1,
}, function(err, cita){
    if(!err){
        console.log("Cita creada y guardada " + cita);
    }else{
        console.log(err);
    }
});

Cita.create({
    fechaInicio:"2017-10-19T12:30:00.000Z",
    fechaFin:"2017-10-19T13:00:00.000Z",
    idMascota:"59e78b8f484c312f3c1abcf6",
    idVeterinario:"un veterinario",
    estado:-1,
}, function(err, cita){
    if(!err){
        console.log("Cita creada y guardada " + cita);
    }else{
        console.log(err);
    }
});

Cita.create({
    fechaInicio:"2017-10-02T10:00:00.000Z",
    fechaFin:"2017-10-02T10:30:00.000Z",
    idMascota:"59e78b8f484c312f3c1abcf6",
    idVeterinario:"un veterinario",
    estado:0,
}, function(err, cita){
    if(!err){
        console.log("Cita creada y guardada " + cita);
    }else{
        console.log(err);
    }
});

