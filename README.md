# DDS-TP3 API CONFIGURACION

`Type: "npm install" to install dependencies`

`Type: "npm start" to start the server`

## __DOCUMENTACION.__

## Las peticiones se pueden testear con Postman

## Abajo dejo la de los turnos que es en lo que se enfoca el proyecto.

### ***Turnos***

### 1. Crear turno

`POST /turnos`

#### Body requerido

- ***{ id_barberia : Int }***
- ***{ id_cliente : Int }***
- ***{ fecha : Date }***
- ***{ hora : Time }***

### 2. Ver turnos

`GET /turnos`

#### No requiere parametros

### 3. Buscar turno segun ID

`GET /turnos/:id`

#### Parametros requerido

- ***{ id : Int }***

### 4. Actualizar/Modificar un turno

`PUT /turnos/:id`

#### Parametros requeridos

- ***{ id : Int }***

#### Body requerido

- ***{ fecha : Date }***
- ***{ hora : Time }***

#### 5. Eliminar un turno

`DELETE /turnos/:id`

#### Parametros requeridos

- ***{ id : Int }***

### Filtrar turnos

#### 1. Turnos segun Barberia

`POST /turnos/turnosBarberia`

#### Body requerido

- ***{ nombreBarberia : String }***

#### 2. Turnos segun Cliente

`POST /turnos/turnosCliente`

#### Body requerido

- ***{ email : String}***
