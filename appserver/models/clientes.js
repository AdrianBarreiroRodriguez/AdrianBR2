var mongoose = require('mongoose');


var clienteSchema = new mongoose.Schema({
    nombre:String,
    apellidos:String,
    dni:{type: String, unique: true},
    direccion:String
 });


mongoose.model('Cliente', clienteSchema);