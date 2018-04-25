const request = require ('request')
const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/'
const URI = `authors/`



function nuevoUsuario(name,last_name,nacionalidad,bio,gender,age){
    var  URL = URL_BASE + URI
    return new Promise((resolve, reject)=>{
        var usuario = {
            "name": name,
            "last_name": last_name,
            "nacionalidad": nacionalidad,
            "biography": bio,
            "gender": gender,
            "age": age
        }
        request.post({url: URL, form: usuario},(err, status, body)=>{
            var usuarioCreado = JSON.parse(body);
            if(status.statusCode==201){
                resolve(usuarioCreado)
            } else {
                reject(`Tenemos un errorrr`)
            }
           
        })
    })
    
}
function editarUsuario(usuarioId, fate){
    return new Promise((resolve,reject) => {
        //Decide si está vivo o muerto
        var parche = {};
        if(fate=="vivo"){
            parche = {"is_alive": true};
        } else if(fate=="muerto"){
            parche= {"is_alive": false};
        }
        // Inserta el id del usuario que se creó en el url para el parche y cambia su llave de vivo o muerto
        var urlId = URL_BASE + URI + `${usuarioId}/`
        request.patch({url: urlId, form: parche},(err,status,body)=>{
            var usuarioEdit= JSON.parse(body);
            status.statusCode==200
            ?resolve(usuarioEdit)
            :reject("Error 2")
        })
    })

}
nuevoUsuario("Margarita","Presiendente","MX","ganadora presidencia de la republica","M",69)
    .then(response =>{
        var miUsuario = response;
        console.log(`Hola ${miUsuario.name}, tu usario es ${miUsuario.id}`)
        return editarUsuario(miUsuario.id, "vivo")
    })
    .then(response=>console.log(response))
    .catch(err=>console.log(err));


/*
Ejercicio 2
1.- Hacer una petición a la swapi a un personaje y obtener el nombre de sus películas.
(https://swapi.co/api/people/1)
Ejemplo de salida
[namemovie1,namemovie2]
*/

