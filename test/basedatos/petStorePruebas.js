var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/petStorePruebas';

mongoose.connect(dbURI,{useMongoClient:true});

// CONNECTION EVENTS
mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

require('../appserver/models/clientes');

var Cliente = mongoose.model('Cliente');


Cliente.create({
    nombre : "Rut",
    apellidos : "Martinez Fernandez",
    dni : "1",
    telefono : "981235439",
    notas : "Nota de Rut",
}, function(err, cita){
    if(!err){
        console.log("Cita creada y guardada " + cita);
    }else{

    }
});

Cliente.create({
    nombre : "Adrian",
    apellidos : "Rocha Iglesias",
    dni : "2",
    telefono : "981235674",
    notas : "Nota de Adrian",
}, function(err, cita){
    if(!err){
        console.log("Cita creada y guardada " + cita);
    }else{
        console.log(err);
    }
});

Cliente.create({
    nombre : "Mauricio",
    apellidos : "martinez lopez de castro",
    dni : "3",
    telefono : "981329817",
    notas : "Nota de Carlos",
}, function(err, cita){
    if(!err){
        console.log("Cita creada y guardada " + cita);
    }else{
        console.log(err);
    }
});

Cliente.create({
    nombre : "Manuel",
    apellidos : "Lopez del Rio",
    dni : "4",
    telefono : "981327689",
    notas : "Nota de Manuel",
}, function(err, cita){
    if(!err){
        console.log("Cita creada y guardada " + cita);
    }else{
        console.log(err);
    }
});

Cliente.create({
    nombre : "Manuel",
    apellidos : " lopez de castro",
    dni : "5",
    telefono : "981312589",
    notas : "Nota de Manuel",
}, function(err, cita){
    if(!err){
        console.log("Cita creada y guardada " + cita);
    }else{
        console.log(err);
    }
});

Cliente.create({
    nombre : "Ana",
    apellidos : "Garcia Carrero",
    dni : "6",
    telefono : "981932756",
    notas : "Nota de Ana",
}, function(err, cita){
    if(!err){
        console.log("Cita creada y guardada " + cita);
    }else{
        console.log(err);
    }
});

