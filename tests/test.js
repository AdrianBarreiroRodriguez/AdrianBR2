var assert = require('assert');
var Cliente = mongoose.model('Cliente');
var mongoose = require('mongoose');
var ctrlClientes = require('../controllers/clientes');

describe('hooks', function() {

    

    
});
describe('Servicios REST cliente', function() {
    describe('recuperarClientes(search)', function() {

        before(function() {
            require('./appserver/models/db');
            var datosClientes={};
            datosClientes.nombre = "Mauricio"
            datosClientes.apellidos = "Garcia Lopez"
            datosClientes.dni = "27135986S"
            datosClientes.telefono = "981578934"
            datosClientes.notas = "Notas de Mauricio"
            const objetoCliente = new Cliente(datosCliente);
            objetoCliente.save((err) => {
                if (err) {
                    console.error(err);
                }else {
                    console.log("agregarCliente", objetoCliente);
                }
            });
        });                

        it('should return -1 when the value is not present', function() {
            assert.equal(-1, ctrlClientes.recuperarClientes({nombre:'Mauricio'}));
        });

        after(function() {
            var criterio = {dni:"27135986S"};
            Cliente.findByOneAndRemove(criterio,
                function (err, cliente) {
                    if (!err) {
                        
                    } else {
                        
                    }
                });
        });

    });
});