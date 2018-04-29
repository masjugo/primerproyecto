const request = require('request');

/*
request.get('http://pokeapi.co/api/v2/pokemon/151',
    (error, response, body) => {
        console.log(error)
        console.log(response.statusCode)
        let respuesta = JSON.parse(body)
        for (var i = 0; i<respuesta.stats.length;i++){
            console.log("---")
            console.log(respuesta.stats[i].stat.name)
    }
    })
    */
    //Qué es parse, buscar cómo convierte y qué.
/*
function peticionPromesa(){
    return new Promise((resolve,reject) => {
        //el código que va a ir en la cola de js
        request.get("http://pokeapi.co/api/v2/pokemon/151",
            (err,response,body) => {
                if (response.statusCode == 200){
                    let json = JSON.parse(body)
                    resolve(json)
                }else {
                    reject('¡Tuvimos un error! :(')
                }
            });
    });
}

peticionPromesa()
    .then(response => console.log(response))
    .catch(err =>  console.log(err)) 
*/

/*
Ejercicios: hacer una peticion a cualquier pokemon y mostrar sus tipos
2.- Hacer una funcion que haga una peticion
   (Ejemplo: peticionLibro(“i robot”);
   http://openlibrary.org/search.json?q=i+robot)
   buscar un libro y traer el o los autores
3.- Hacer una petición por autor y devolver la lista de sus libros
   (http://openlibrary.org/search.json?author=asimov)


 */
/*
console.log('ejercicio 1')

function peticionPromesa(){
    return new Promise((resolve,reject) => {
        //el código que va a ir en la cola de js
        request.get("http://pokeapi.co/api/v2/pokemon/130",
            (err,response,body) => {
                if (response.statusCode == 200){
                    let json = JSON.parse(body)
                    resolve(json.types[1].type)
                }else {
                    reject('¡Tuvimos un error! :(')
                }
            });
    });
}

peticionPromesa()
    .then(response => console.log(response))
    .catch(err =>  console.log(err)) 
*/
//Ejercicio 2
/*
console.log('ejercicio 2')

function peticionLibro(args){
    var libro = args.replace(" ","+");
    return new Promise((resolve,reject) => {
        request.get(`http://openlibrary.org/search.json?title=${libro}`,
        (err,response,body) => {
            let lista = JSON.parse(body)
            let resultado = []
                if(response.statusCode==200){
                    for(var i=0;lista.docs[i].title!=args;i++){
                        resultado.push(lista.docs[i].author_name);
                    }
                    resolve(`El autor de ${args} es ${resultado}`);     
                } else {
                    reject('no está la base de datos')
                }  
        })
    })
}

peticionLibro(`La ciudad antigua`)
    .then(response => console.log(response))
    .catch(err =>  console.log(err))

*/

//Ejercicio 3

/*
console.log('ejercicio 3')

function dameObras(miAutor){
    var autor = miAutor.replace(/ /g,"+");
    console.log(autor)
    return new Promise((resolve,reject)=>{
        request.get(`http://openlibrary.org/search.json?author=${autor}`,
        (err,response,body)=>{
            let lista = JSON.parse(body);
            var susObras = [];
            for(var i=0;i<lista.docs.length;i++){
                if(lista.docs[i].author_name == miAutor){
                    susObras.push(lista.docs[i].title)
                }
                else if (response.statusCode == 404){
                    reject(`No tenemos ese autor.`)
                } else{
                }         
            }
            resolve(susObras);
        })
    })
}

dameObras(`Xavier Velasco`)
    .then(response =>console.log(response))
    .catch(err=>console.log(err));
*/

//Ejercicio 4
console.log(`Ejercicio 4`)
