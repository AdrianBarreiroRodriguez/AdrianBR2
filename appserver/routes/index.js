var express = require('express');
var router = express.Router();

var ctrlClientes = require('../controllers/clientes');
var ctrlMascota = require('../controllers/mascota');
var ctrlCitas = require('../controllers/citas');

////////////////////////////////////////////////////////
////////////////   RUTAS CLIENTE  /////////////////////
//////////////////////////////////////////////////////

router.get('/clientes', ctrlClientes.recuperarClientes);
router.get('/clientes/:id', ctrlClientes.recuperarClienteById);
router.post('/clientes', ctrlClientes.guardarCliente);
router.put('/clientes/:id', ctrlClientes.actualizarCliente);

////////////////////////////////////////////////////////
////////////////   RUTAS MASCOTA  /////////////////////
//////////////////////////////////////////////////////

router.get('/mascotas', ctrlMascota.recuperarMascotas);
router.get('/mascotas/:id', ctrlMascota.recuperarMascota);
router.get('/clientes/mascotas/:id', ctrlMascota.recuperarMascotasPropietario);
router.post('/mascotas', ctrlMascota.guardarMascota);
router.put('/mascotas/:id', ctrlMascota.actualizarMascota);
router.delete('/mascotas/:id', ctrlMascota.eliminarMascota);

/////////////////////////////////////////////////////
////////////////   RUTAS CITA  /////////////////////
///////////////////////////////////////////////////

router.get('/citas/:fromDate/:toDate', ctrlCitas.calendarioDeCitas);/*function(request, response){
    var fechaInicio = request.params.fromDate;
    var fechaFin = request.params.toDate;
    ctrlCitas.calendarioDeCitas(fechaInicio, fechaFin, response);
});*/

router.get('/citas/:id', ctrlCitas.recuperarCita);

router.post('/citas/', ctrlCitas.guardarCita);

router.put('/citas/:id', ctrlCitas.actualizarCita);
module.exports = router;