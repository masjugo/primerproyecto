const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Alumno = require('./mongooseClient');
const Producto = require('./mongooseClient');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.post(`/api/v1/productos/create`,(req,res) => {
    const {producto,marca,color,categoria,precio} = req.body
    let newProducto = Producto({
        producto, 
        marca, 
        color,
        categoria,
        precio
    })
    newProducto.save((err,idProducto) => {
        res.status(201).send(idProducto)
    })
})

app.get(`/api/v1/productos`,(req,res) => {
    Producto.find().exec().then(productos =>{
        res.status(200).send(productos);
    }).catch(err => {
        res.status(400).send(err);
    })
})

app.patch(`/api/v1/productos/:uid`,(req,res)=>{
    const {uid} = req.params;
    Producto.findByIdAndUpdate(uid,req.body,(err,productoUpd) => {
        Producto.findById(uid).exec()
        .then(upd => {res.status(200).send(upd)})
    }).catch(err => res.send(err))
})

app.delete(`/api/v1/productos/:uid`,(req,res) => {
    const {uid} = req.params
    Producto.findByIdAndRemove(uid).exec()
    .then(producto => res.send( {message:'Producto borrado del stock'} )
    ).catch(err => res.send(err))
})


app.listen(3000,() => {
    console.log('Server on 3000');
});