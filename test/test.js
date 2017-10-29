var assert = require('assert');
var mongoose = require('mongoose');
require('../appserver/models/clientes');

var Cliente = mongoose.model('Cliente');
 
describe('Servicios REST cliente', function() {
    describe('recuperarClientes(search)', function() {
         
        var ctrlClientes;  
        before(function() {
            ctrlClientes = require('../appserver/controllers/clientes');
            var dbURI = 'mongodb://localhost/petStorePruebas';
            mongoose.connect(dbURI,{useMongoClient:true});
                 
        });
        
        after(function() {
            
        });

        it("La propiedad dni del primer elemento debería ser 3", function(done) {
            setTimeout(done, 300);
            var filtro = {nombre:'Mauricio'};
            ctrlClientes.recuperarClientes(filtro).then( 
                function(result) {
                    assert.equal('56',result[0].dni);
                    done();
                }
                ,
                function(err) {
                    console.error(err);
                }
            );
            
        });

        it("La longitud del array de clientes debería ser 6", function(done) {
            setTimeout(done, 300);
            var filtro = {};
            ctrlClientes.recuperarClientes(filtro).then( 
                function(result) {
                    assert.equal(234234, result.length);
                    done();
                }
                ,
                function(err) {
                    console.error(err);
                }
            );
            
        });

    });
});