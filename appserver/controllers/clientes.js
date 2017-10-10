
var mongoose = require('mongoose');
var Cliente = mongoose.model('Cliente');



module.exports.recuperarClientes = function(request, response){
    Cliente.find({},function (err, clientes){
        if(!err){
            console.log(clientes);
            response.send(clientes);
        }else{
            response.send();
        }
    });
};

module.exports.recuperarCliente = function(request, response){
	
};


module.exports.agregarCliente = function(request, response){
    var datosCliente = request.body;
    console.log(datosCliente);
    const objetoCliente = new Cliente(datosCliente);
    objetoCliente.save((err) => {
		if (err) {
			console.error(err);
		} else {
			console.log("agregarCliente", objetoCliente);
        }
    })
    response.send();
};

module.exports.actualizarCliente = function(request, response){
    var idCliente = request.body;
    Cliente.findOne({dni:idCliente},
        function(err, cliente) {
            if(!err){
                cliente.name = "Simon";
                cliente.save(function(err,cliente){
                    console.log('User saved:', cliente);
                    });
            }
        }
    );
};


