# MEAN-PetStore

Aplicacion Demo implementada como parte del curso Fullstack-Mean

Se trata de una aplicacion para gestionar las citas a una imaginaria clinica veterinaria.

Utilizaremos la pila MEAN para implementar la gestion de Clientes/Mascotas y dar de alta Citas en un Calendario.

# Instalación

```bash
git clone https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2
cd MEAN-PetStore
npm install
npm start

```


# Arquitectura Mean: Mongodb + ExpressJs + AngularJs + NodeJs


# El Proyecto

Se trata de una aplicacion para gestionar las citas a una imaginaria clinica veterinaria.

## Modelo de datos

El principal objeto del modelo de negocio es:

- Cita, que teniendo una 
	-  fecha y hora de inicio y fin, estaria 
	-  relacionada con una sola mascota, que a su vez estaria 
		-  relacionada con un solo cliente.


![Modelo de Datos](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/MEAN-PetStore/master/public/images/modelo-datos.png)


## RESTfull Services API

Esta es una lista completa de los servicios web REST publicados con ExpressJs

| Metodo  |  URL  |  Body  |  Response |
|---|---|---|---|
|  GET  |  api/clientes  |  << vacio >>  |  res.json([clientes]) |
|  GET  |  api/clientes/:id  |  << vacio >>  |  res.json(cliente) |
|  GET  |  api/clientes/:id/mascotas  |  << vacio >>  |  res.json(mascotas) |
|  GET  |  api/clientes/with/mascotas  |  << vacio >>  |  res.json(clientesConMascotas) |
|  POST  |  api/clientes  |  {JSON}  |  res.json(clienteCreado) |
|  PUT  |  api/clientes/:id  |  {JSON}  |  res.json(clienteActualizado)|
|  GET  |  api/mascotas/:id  |  << vacio >>  |  res.json(mascota) |
|  POST  |  api/mascotas  |  {JSON}  |  res.json(mascotaCreada) |
|  PUT  |  api/mascotas/:id  |  {JSON}  |  res.json(mascotaActualizada) |
|  DELETE  |  api/mascotas/:id  |  {JSON}  |  res.sendStatus(200); //OK |
|  GET  |  api/citas  |  << vacio >>  |  res.json(citas) |
|  GET  |  api/citas/:id  |  << vacio >>  |  res.json(cita)|
|  GET  |  api/citas/:fromdate/:todate  |  << vacio >>  |  res.json(citas) |
|  POST  |  api/citas  |  {JSON}  |  res.json(citaCreada)|
|  PUT  |  api/citas/:id  |  {JSON}  |  res.json(citaActualizada)|




