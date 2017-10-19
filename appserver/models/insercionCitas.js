var mongoose = require('mongoose');
var Cita = mongoose.model('Cita');

var date = Date.now();
console.log(date);

Cita.create({
    fechaInicio:"2017-10-19T10:00:00.000Z",
    fechaFin:"2017-10-19T10:30:00.000Z",
    idMascota:"59dcacb0da143e0e20eee3ef",
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
    fechaInicio:"2017-10-2T11:00:00.000Z",
    fechaFin:"2017-10-2T11:30:00.000Z",
    idMascota:"59e6f97e2ad4a11bd0252efc",
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
    idMascota:"59e6f8952ad4a11bd0252efb",
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
    fechaInicio:"2017-10-2T10:00:00.000Z",
    fechaFin:"2017-10-2T10:30:00.000Z",
    idMascota:"59e72b5e0b52542654148833",
    idVeterinario:"un veterinario",
    estado:0,
}, function(err, cita){
    if(!err){
        console.log("Cita creada y guardada " + cita);
    }else{
        console.log(err);
    }
});

