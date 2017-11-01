var mongoose = require('mongoose');
var Mascota = mongoose.model('Mascota');
var validate = require("validate.js");

module.exports.recuperarMascotas = function (request, response) {
    Mascota.find({}, function (err, mascotas) {
        if (!err) {
            console.log(mascotas);
            response.status(200);
            response.json(mascotas);
        } else {
            response.send(500, err.message);
        }
    });
}

module.exports.recuperarMascota = function (request, response) {
    var idMascota = request.params.id;
    Mascota.findById(idMascota, function (err, mascota) {
        if (!err) {
            console.log(mascota);
            response.status(200);
            response.json(mascota);
        } else {
            response.send(500, err.message);
        }
    });
}

module.exports.guardarMascota = function (request, response) {
    var datosMascota = request.body;
    if(validarMascota(datosMascota)){
        const objetoMascota = new Mascota(datosMascota);
        objetoMascota.save((err) => {
            if(err){
                response.status(400);
                response.json(err);
            }else{
                response.status(200);
                response.json('{"status":"success"}');
            }
        });
    }else{
        response.status(400);
        response.json(err);
    }
    
}

function validarMascota(mascota){
    var constraints = {
        nombre: {
            presence: true,
            length: {
                maximun: 20,
            }
        },

        especie:{
            presence: true,
            length: {
                maximun: 20,
            }
        }, 
        
        raza:{
            presence: true,
            length: {
                maximun: 20,
            }
        },

        fechaNacimiento:{
            presence: true,
            format:{
                pattern: "^[0-9]{4}-[0-3][0-9]-[0-3][0-9]$", 
            }
        },

        numeroChip:{
            presence: true,
            length: {
                is: 10,
            }
        },

        urlImagen:{
            presence: true,
        }
    }
    var errors = validate(mascota, constraints);
    if(errors !=undefined){
        return false;
    }else{
        return true;
    }
}

module.exports.actualizarMascota = function (request, response) {
    var idMascota = request.params.id;
    var mascotaBody = request.body;
    Mascota.findById(idMascota,
        function (err, mascota) {
            if (!err) {
                mascota.numeroChip = mascotaBody.numeroChip;
                mascota.nombre = mascotaBody.nombre;
                mascota.especie = mascotaBody.especie;
                mascota.sexo = mascotaBody.sexo;
                mascota.raza = mascotaBody.raza;
                mascota.imagenUrl = mascotaBody.imagenUrl;
                mascota.fechaNacimiento = mascotaBody.fechaNacimiento;
                mascota.descripcion = mascotaBody.descripcion;
                mascota.save(function (err, mascota) {
                    if (err) {
                        response.status(500);
                        response.json(err);
                    } else {
                        response.status(200);
                        response.json('{"status":"success"}');
                    }
                });
            }
        }
    );
}

module.exports.eliminarMascota = function (request, response) {
    var idMascota = request.params.id;
    Mascota.findByIdAndRemove(idMascota,
        function (err, mascota) {
            if (!err) {
                response.status(200);
                response.send();
            } else {
                response.status(404);
                response.send();
            }

        });
}

module.exports.recuperarMascotasPropietario = function (request, response) {
    var idPropietario = request.params.id;
    Mascota.find({ 'idPropietario': idPropietario }, function (err, mascotas) {
        if (!err) { 
            console.log(mascotas);
            response.status(200);
            response.json(mascotas);
        }else{
            response.status(400);
            response.send();
        }
    });

}