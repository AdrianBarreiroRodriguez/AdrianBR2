
var mongoose = require('mongoose');
var cliente = mongoose.model('Cliente');

module.exports.recuperarClientes = function(request, response){
    
    cliente.create({
        nombre: "Adrian",
        apellidos: "Lopez Rodriguez",
        dni: "14345932D",
        direccion:"Rua madrid 3º A, Lugo"
    });
    response.send('<h1>Hola mundo</h1>');
};