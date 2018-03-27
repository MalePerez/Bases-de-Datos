const Router = require('express').Router();
const Users = require('./users.js')
const Eventos = require('./eventos.js')

//Obtener todos los usuarios
Router.get('/all', function(req, res) {
    let usuario = req.query.user
    Eventos.find({userId: usuario}).exec(function(err, docs) {
        if (err) {
            res.status(500)
            res.json(err)
        }
        res.json(docs)
    })
})

// Obtener un usuario por su id
Router.get('/', function(req, res) {
    let nombre = req.query.nombre
    Users.findOne({nombres: nombre}).exec(function(err, doc){
        if (err) {
            res.status(500)
            res.json(err)
        }
        res.json(doc)
    })
})

// Agregar a un usuario
Router.post('/newUser', function(req, res) {
    let user = new Users({
        userId: Math.floor(Math.random() * 50),
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        usuario: req.body.user,
        clave: req.body.pass,
        estado: "Activo"
    })
    user.save(function(error) {
        if (error) {
            res.status(500)
            res.json(error)
        }
        res.send("Registro guardado")
    })
})

// Agregar a un evento
Router.post('/new', function(req, res) {
    let evento = new Eventos({
        userId: req.body.id,
        title: req.body.title,
        start: req.body.start,
        end: req.body.end
    })
    evento.save(function(error) {
        if (error) {
            res.status(500)
            res.json(error)
        }
        res.send("Registro guardado")
    })
})

Router.post('/update', function(req, res) {
    let id =  req.body.id
    let title = req.body.title
    let start = req.body.start
    let end = req.body.end
    Eventos.updateOne({_id: id}, {$set: {title: title, start: start, end: end}}, function(error) {
        if (error) {
            res.status(500)
            res.json(error)
        }
        res.send("Registro modificado")
    })
})

// Eliminar un usuario por su id
Router.get('/delete/:id', function(req, res) {
    let uid = req.params.id
    Eventos.remove({_id: uid}, function(error) {
        if(error) {
            res.status(500)
            res.json(error)
        }
        res.send("Registro eliminado")
    })
})

// Inactivar un usuario por su id
Router.post('/inactive/:id', function(req, res) {

})

// Activar un usuario por su id
Router.post('/active/:id', function(req, res) {

})

Router.get('/login', function(req, res) {
    let usuario = req.query.user
    let clave = req.query.pass
    Users.findOne({usuario: usuario, clave: clave}).exec(function(err, doc){
        if (err) {
            res.status(500)
            res.json(err)
        }
        res.json(doc)
        
    })
})

module.exports = Router
