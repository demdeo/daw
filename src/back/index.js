/*=============================================================================
 * Authors: Agustin Bassi, Brian Ducca, Santiago Germino 
 * Date: Jul 2020
 * Licence: GPLV3+
 * Project: DAW - CEIoT - Project Structure
 * Brief: Main backend file
=============================================================================*/

//=======[ Settings, Imports & Data ]==========================================

var PORT = 3000;

var express = require('express');
var app = express();
var mysql = require('./mysql-connector');

// to parse application/json
app.use(express.json());
// to serve static files
app.use(express.static('/home/node/app/static/'));

// var datos = require('./datos.json');
var conexionMysql = require('./mysql-connector');

//=======[ Main module code ]==================================================

app.get('/dispositivos', function (req, res, next) {
    conexionMysql.query('Select * from Devices', function (err, respuesta) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(respuesta);
    });
});

app.get('/dispositivos/:id', function (req, res, next) {
    conexionMysql.query('Select * from Devices where id=?', [req.params.id], function (err, respuesta) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(respuesta);
    });
});

// Espera recibir algo del estilo {id:1,state:1}
// Devuelvo el dato modificado
app.post('/dispositivos/estados', function (req, res, next) {
    conexionMysql.query('Update Devices set state=? where id=?', [req.body.state, req.body.id], function (err, respuesta) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send("Se actualizó correctamente: " + JSON.stringify(respuesta)).status(200);
    });
});

app.post('/dispositivos/tipos', function (req, res, next) {
    conexionMysql.query('Update Devices set type=? where id=?', [req.body.type, req.body.id], function (err, respuesta) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send("Se actualizó correctamente: " + JSON.stringify(respuesta)).status(200);
    });
});

// Espera recibir algo del estilo {id:1,state:1}
// Devuelvo el dato modificado
app.post('/dispositivos/referencias', function (req, res, next) {
    conexionMysql.query('Update Devices set name=?, description=? where id=?', [req.body.name, req.body.description, req.body.id], function (err, respuesta) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send("Se actualizó correctamente: " + JSON.stringify(respuesta)).status(200);
    });
});

app.listen(PORT, function (req, res) {
    console.log("NodeJS API running correctly");
});

//=======[ End of file ]=======================================================
