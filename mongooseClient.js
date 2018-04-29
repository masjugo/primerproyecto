const mongoose = require('mongoose')
mongoose.connect('mongodb://usuariosprueba:usu19devf@ds159459.mlab.com:59459/devfmasjugo')
const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const alumnosSchema = new Schema({
    alumno: ObjectId,
    name: String,
    last_name: String,
    age: Number,
    email: String,
    city: String

});

var Alumno = mongoose.model('Alumno', alumnosSchema);

const productosSchema = new Schema({
    idProducto: ObjectId,
    producto: String,
    marca: String,
    color: String,
    categoria: String,
    precio: Number

})
var Producto = mongoose.model('Producto', productosSchema);

module.exports = Alumno;
module.exports = Producto;