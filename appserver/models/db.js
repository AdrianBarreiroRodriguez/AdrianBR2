var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/veterinaria';


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


// BRING IN YOUR SCHEMAS & MODELS
require('./clientes');
require('./mascota');