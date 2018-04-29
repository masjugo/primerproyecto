const request = require('request');

/*
Ejercicio 2
1.- Hacer una petición a la swapi a un personaje y 
obtener el nombre de sus películas.
(https://swapi.co/api/people/1)
Ejemplo de salida
[namemovie1,namemovie2]
*/

function susPeliculas(personaje){
    return new Promise((resolve,reject)=>{
        request.get(`https://swapi.co/api/people/${personaje}`,
        (err,status,body)=>{
            if(status.statusCode==200){
                let lista = JSON.parse(body);
                var filmes =[];
                var buscar = lista.films.map((x,y)=>{
                    filmes.push(x);
                })
                resolve(filmes)
            } else {
                reject('No hay ese json');
            }

        })
    })
}

//está haciendo en desorden los callbacks
susPeliculas(4)
    .then(filmes => {
        var titulos = filmes;
        titulos.map( x => {
            return new Promise((resolve,reject) => {
                request.get(x,(err,status,body) => {
                    if (status.statusCode==200) {
                        let film = JSON.parse(body);
                        console.log(film.title);
                        resolve("logrado") 
                    } else {
                        reject(`No estás accediendo a las peliculas`);
                    }    
                })
            })
        })
        
    })
    .then(titulos => {
        console.log(titulos);
        console.log('está llegando aquí')
    })
    .catch(err => console.log(err))