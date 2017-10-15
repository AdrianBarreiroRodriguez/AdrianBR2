var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Cliente = mongoose.model('Cliente');

var mascotaSchema = new mongoose.Schema({
    numeroChip: String,
    nombre: String,
    especie: String,
    sexo: String,
    imagenUrl: String,
    idPropietario: { type: Schema.ObjectId, ref: "Cliente" },
    raza: String,
    fechaNacimiento: String,
    descripcion: String
 });


mongoose.model('Mascota', mascotaSchema);