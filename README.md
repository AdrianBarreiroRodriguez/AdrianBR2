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
![Arquitectura Mean](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/master/imagenes%20README/Diagrama_de_arquitectura.jpg)

##El navegador
Programa para acceder y visualizar contenido web.

##AngularJS
Framework de JavaScript, que facilita la creación de SPA(Single Page Application). En mi aplicación se ejecuta en el cliente, aunque puede ejecutarse en una máquina servidor bajo Node.js.
 
##El Servidor físico
Máquina de procesamiento que provee servicios web a clientes HTTP: apps móviles, navegadores web, otros sistemas.

##NodeJs
Entorno de ejecución para la capa de servidor en una arquitectura cliente-servidor.

##Express
Framework para Node.js que provee de una interfaz más cómoda, que la que provee el propio Node.js, para implementar servicios web, además de proveer otras características.

##Mongoose
Driver para conectarse y hacer peticiones desde una aplicación Node.js a un servidor de bases de datos MongoDB.

##Internet
Red de computadores mundial que opera bajo los protocolos TCP/IP. La nube encima de los enlaces de comunicación significa que la comunicación entre los procesos se realiza utilizando la infraestructura proporcionada por Internet. En este caso, la capa de aplicación por encima de TCP/IP utiliza el protocolo HTTP para comunicarse entre Node y el navegador.


##MongoDB
Servidor de Bases de datos NoSQL. En mi diagrama de arquitectura se ejecuta en la misma máquina servidor que la aplicación Node.js, aunque también es posible que se aloje en una máquina servidor diferente.


# El Proyecto

Se trata de una aplicacion para gestionar las citas a una imaginaria clinica veterinaria.

# Modelo de datos

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


## Implementación entidad Cliente

1.- Crear Schema con mongoose para Cliente. ![Schema Cliente](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/84ab8bd57c9c99325db3ac6b187787cc3fcb673f/appserver/models/clientes.js#L4)


