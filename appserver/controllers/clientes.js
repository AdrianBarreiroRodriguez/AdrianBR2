
var mongoose = require('mongoose');
var cliente = mongoose.model('Cliente');



module.exports.recuperarClientes = function(request, response){
    
};

module.exports.recuperarCliente = function(request, response){
	
};


module.exports.agregarCliente = function(request, response){
    console.log("///////////////////////");
    console.log("Entro en agregarCliente");
    console.log("///////////////////////");
    var datosCliente = request.body;
    console.log("datos body:  " + request.body);
    const cliente = new Cliente(datosCliente);
    cliente.save((err) => {
		if (err) {
			console.error(err);
		} else {
			console.log("agregarCliente", customer);
        }
    })
    response.status(status);
    response.json(content);
};

module.exports.actualizarCliente = function(request, response){
	
};


