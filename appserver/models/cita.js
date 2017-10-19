var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Mascota = mongoose.model('Mascota');

var citaSchema = new mongoose.Schema({
    fechaInicio:Date,
    fechaFin:Date,
    idMascota:{type: Schema.ObjectId, ref: "Mascota" },
    idVeterinario:String,
    estado:Number,
 });


mongoose.model('Cita', citaSchema);