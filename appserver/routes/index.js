var express = require('express');
var router = express.Router();

var ctrlClientes = require('../controllers/clientes');
/* Sample REST service  (placeholder) */
router.get('/clientes', ctrlClientes.recuperarClientes);
router.post('/clientes', ctrlClientes.agregarCliente);

module.exports = router;