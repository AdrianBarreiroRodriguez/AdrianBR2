var mongoose = require('mongoose');


var clienteSchema = new mongoose.Schema({
    nombre:String,
    apellidos:String,
    dni:{type: String, unique: true},
    telefono:String,
    notas:String,
 });


mongoose.model('Cliente', clienteSchema);