var mongoose = require('mongoose');
var Mascota = mongoose.model('Mascota');


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
    const objetoMascota = new Mascota(datosMascota);
    objetoMascota.save((err) => {
        if (err) {
            console.error(err);
            response.status(400);
            response.json(err);
        } else {
            console.log("agregarCliente", objetoMascota);
            response.status(200);
            response.json('{"status":"success"}');
        }
    })
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