

enum estado{NOleido,leido,borrado}

interface mensaje {
    
  mensajeID    :  number,
  remitente    :  string,
  destinatario :  string,
  asunto       :  string,
  cuerpo       :  string,
  estado       :  estado

}
let mensajes =[]

let mensaje1:mensaje={

  mensajeID    :  1,
  remitente    :  "usuario1@ahorradores.com",
  destinatario :  "usuario2@ahorradores.com",
  asunto       :  "Prueba",
  cuerpo       :  "Esto es una prueba",
  estado       :  estado.leido
} 
mensajes.push(mensaje1)

let mensaje2:mensaje={

  mensajeID    :  2,
  remitente    :  "usuario1@ahorradores.com",
  destinatario :  "usuario3@ahorradores.com",
  asunto       :  "Descuento",
  cuerpo       :  "Grandes ofertas",
  estado       :  estado.leido
}
mensajes.push(mensaje2)

let mensaje3:mensaje={

  mensajeID    :  3,
  remitente    :  "usuario3@ahorradores.com",
  destinatario :  "usuario2@ahorradores.com",
  asunto       :  "Día sin IVA",
  cuerpo       :  "Todo sin IVA el día 21",
  estado       :  estado.leido
}
mensajes.push(mensaje3)

let mensaje4:mensaje={

  mensajeID    :  4,
  remitente    :  "usuario2@ahorradores.com",
  destinatario :  "usuario1@ahorradores.com",
  asunto       :  "Prueba",
  cuerpo       :  "Esto es una prueba",
  estado       :  estado.leido
}
mensajes.push(mensaje4)




let usuarios =[

    {
      "usuario"  : "usuario1@ahorradores.com",
      "password" : "1",
    },
    {
      "usuario"  : "usuario2@ahorradores.com",
      "password" : "2",
    },
    {
      "usuario"  : "usuario3@ahorradores.com",
      "password" : "3",
    },
]


export function buscarMensajes (usuario){
 
  let seleccion = []
     mensajes.forEach(element => {
         if (usuario == element.destinatario){
              seleccion.push(element)
         }
     });
     
 return seleccion
 }
 

function comprobarAcceso(usuario, password){
  let valido = false;
    usuarios.forEach(element => {
       
    if (usuario == element.usuario && password == element.password){ 
        valido = true
    }
   });
   return valido 
}

export default comprobarAcceso;