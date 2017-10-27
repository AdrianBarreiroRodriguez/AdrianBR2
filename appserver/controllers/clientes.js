
var mongoose = require('mongoose');
var Cliente = mongoose.model('Cliente');
var Q = require("q");



module.exports.recuperarClientes = function (search) {
    var d = Q.defer();
    Cliente.find(search, function (err, clientes) {
        if (!err) {
            d.resolve(clientes);
        } else {
            d.reject(err);
        }
    });
    return d.promise;
};

module.exports.recuperarClienteById = function (request, response) {
    var idCliente = request.params.id;
    Cliente.findById(idCliente, function (err, cliente) {
        if (!err) {
            console.log(cliente);
            response.status(200);
            response.json(cliente);
        } else {
            response.send(500, err.message);
        }
    });
};


module.exports.guardarCliente = function (request, response) {
    var datosCliente = request.body;
    const objetoCliente = new Cliente(datosCliente);
    objetoCliente.save((err) => {
        if (err) {
            console.error(err);
            response.status(400);
            response.json(err);
        } else {
            console.log("agregarCliente", objetoCliente);
            response.status(200);
            response.json('{"status":"success"}');
        }
    })
};

module.exports.actualizarCliente = function (request, response) {
    var idCliente = request.params.id;
    var clienteBody = request.body;
    Cliente.findById(idCliente,
        function (err, cliente) {
            if (!err) {
                cliente.nombre = clienteBody.nombre;
                cliente.apellidos = clienteBody.apellidos;
                cliente.dni = clienteBody.dni;
                cliente.telefono = clienteBody.telefono;
                cliente.notas = clienteBody.notas;
                cliente.save(function (err) {
                    if(err) {
                        response.status(400);
                        response.json(err);
                    } else {
                        response.status(200);
                        response.json('{"status":"success"}');
                    }
                });
            }
        }
    );
};


