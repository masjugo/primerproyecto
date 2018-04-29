const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/',(request,response)=>{
    response.send({mensaje:'Esta es mi primera API'})
});

app.get('/saludo',(request,response)=>{
    response.send(
            {mensaje:'Hola'},
            {nombre:'Julio'}
    )
});
 app.get('/user/:uid',(req,res)=>{
     const  {uid} = req.params
     res.send({id:uid})
 });

 app.get('/busqueda',(req,res)=>{
     const {q,colour} = req.query
     res.send({busqueda:q,color:colour})
 })

 app.get('/user',(req,res)=>{
    const  {uid,name} = req.query
    res.send({id:uid,nombre:name})
});

//post
app.post('/create/user',(req,res)=>{
    const {name,last_name} = req.body
    res.status(201).send({
        id:1,
        name,
        last_name})
})

//suma el valor de las llaves del objeto que pasas en body
app.post('/pedido',(req,res)=>{
    const {item1, item2} = req.body
    res.status(201).send({
        total: item1+item2
    })
})

//en qué puerto va a correr,//Calbback
app.listen(3000,()=>{console.log('Server corriendo en el puerto numero 3000')
});