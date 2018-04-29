const request = require('request');

//Ejercicio 1

function asteroidesPeligrosos(){
    return new Promise((resolve, reject)=>{
        request.get("https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-04-13&end_date=2018-04-20&api_key=QQc2OWV6T3OcWMMgkjYfuSCgiBDbgYtbycV7B8C4",
        (err,response,body)=>{
            if(response.statusCode==200){
                let registro = JSON.parse(body)
                var fecha =[]; 
                for( var i in registro.near_earth_objects){
                    fecha.push(registro.near_earth_objects[i]);
                }
                resolve(fecha)
            } else {
                reject('No hay registros')
            }
        })
    })
}

function midePeligro(evento){
    if(evento.is_potentially_hazardous_asteroid==1){
        console.log(evento);
    }
}


midePeligro(
    asteroidesPeligrosos()
        .then(fechas => {
            console.log(fechas);
            var eventos = []
            var conteo = fechas.map(evento=>{
                eventos.push(evento)
            })
            return eventos
        })
        .catch(err=>console.log(err))
);

    
//Un arreglo de objetos, los objetos son cada fecha.