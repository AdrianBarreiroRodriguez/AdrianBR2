var express = require('express');
var router = express.Router();

var ctrlClientes = require('../controllers/clientes');
var ctrlMascota = require('../controllers/mascota');
/* Sample REST service  (placeholder) */
router.get('/clientes', ctrlClientes.recuperarClientes);
router.get('/clientes/:id', ctrlClientes.recuperarClienteById);
router.post('/clientes', ctrlClientes.guardarCliente);
router.put('/clientes/:id', ctrlClientes.actualizarCliente);

router.get('/mascotas', ctrlMascota.recuperarMascotas);
router.get('/mascotas/:id', ctrlMascota.recuperarMascota);
router.get('/clientes/mascotas/:id', ctrlMascota.recuperarMascotasPropietario);
router.post('/mascotas', ctrlMascota.guardarMascota);
router.put('/mascotas/:id', ctrlMascota.actualizarMascota);
router.delete('/mascotas/:id', ctrlMascota.eliminarMascota);

module.exports = router;