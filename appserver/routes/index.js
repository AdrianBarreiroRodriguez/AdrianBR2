var express = require('express');
var router = express.Router();

var ctrlClientes = require('../controllers/clientes');
var ctrlMascota = require('../controllers/mascota');
var ctrlCitas = require('../controllers/citas');

const successCallback = function(res) { 
    return function(result) {
         res.json(result) 
    };
}
const failCallback = function(res){
     return function(err) {
	    console.error(err);
	    res.sendStatus(500);
    };
};

////////////////////////////////////////////////////////
///////////////    RUTAS CLIENTE   ////////////////////
//////////////////////////////////////////////////////

router.get('/clientes', function(request, response){
    var search = {};
    var parametros = request.query;
    if(parametros.nombre != undefined){
        search.nombre = parametros.nombre;
    }
    ctrlClientes.recuperarClientes(search).then(successCallback(response),failCallback(response));
});
router.get("/clientes/mascotas" , function(request, response){
    var search = {};
    var parametros = request.query;
    if(parametros.nombre != undefined){
        search.nombre = parametros.nombre;
    }
    ctrlClientes.recuperarClientesConMascotas(search).then(successCallback(response),failCallback(response));
});
router.get('/clientes/:id', ctrlClientes.recuperarClienteById);
router.post('/clientes', ctrlClientes.guardarCliente);
router.put('/clientes/:id', ctrlClientes.actualizarCliente);

////////////////////////////////////////////////////////
///////////////    RUTAS MASCOTA   ////////////////////
//////////////////////////////////////////////////////

router.get('/mascotas', ctrlMascota.recuperarMascotas);
router.get('/mascotas/:id', ctrlMascota.recuperarMascota);
router.get('/clientes/mascotas/:id', ctrlMascota.recuperarMascotasPropietario);
router.post('/mascotas', ctrlMascota.guardarMascota);
router.put('/mascotas/:id', ctrlMascota.actualizarMascota);
router.delete('/mascotas/:id', ctrlMascota.eliminarMascota);

/////////////////////////////////////////////////////
///////////////    RUTAS CITA    ///////////////////
///////////////////////////////////////////////////

router.get('/citas/:fromDate/:toDate', ctrlCitas.calendarioDeCitas);
router.get('/citas/:date([0-9]{4}-[0-3][0-9]-[0-3][0-9])', ctrlCitas.recuperarCitasFecha);
router.get('/citas/:id', ctrlCitas.recuperarCita);
router.post('/citas/', ctrlCitas.guardarCita);
router.put('/citas/:id', ctrlCitas.actualizarCita);
module.exports = router;