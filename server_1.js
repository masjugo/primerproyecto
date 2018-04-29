const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Alumno = require('./mongooseClient');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Create students
app.post('/api/v1/user/create',(req,res) => {
    const {name,last_name,age} = req.body
    let newAlumno = Alumno({
        name,
        last_name,
        age
    })
    newAlumno.save((err,alumno) => {
        res.status(201).send(alumno)
    })
});

//Traer todos los usuarios
app.get('/api/v1/user/',(req,res) => {
    Alumno.find().exec().then(alumnos => {
        res.status(200).send(alumnos);
    }).catch((err) => {
        res.status(400).send(err);
    })
})

//Traer usuario por id
app.get(`/api/v1/user/:uid`,(req,res) => {
    const {uid} = req.params;
    Alumno.findById(uid).exec().then(alumno => {
        res.status(200).send(alumno)
    }).catch(err => {
        res.status(404).send(err);
    })
})

//borrar un usuario
app.delete(`/api/v1/user/:uid`,(req,res) => {
    const {uid} = req.params;
    Alumno.findByIdAndRemove(uid).exec().then(
        alumno => res.send({message: 'Alumno borrado'})
    ).catch(err => res.send(err));
})

//Actualizar por partes un alumno
app.patch(`/api/v1/user/:uid`,(req,res) => {
    const {uid} = req.params;
    Alumno.findByIdAndUpdate(uid,req.body,(err,student) =>{
        Alumno.findById(uid).exec()
        .then(student1 => res.status(200).send(student1))
    }).catch(err => res.send(err))
})

//encontrar por nombre
///api/v1/user/find?nombre=Pedro

app.get(`/api/v1/find`,(req,res) => {
    const {nombre} = req.query
    Alumno.find({name:nombre}).exec()
    .then(alumnos => res.status(200).send(alumnos))
    .catch(err=> res.send(err))

})

//define el puerto e indica en qué puerto está el servidor(?)
app.listen(3000,() => {
    console.log('Server on 3000');
});

