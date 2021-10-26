
enum estado{"NOleido","leido","borrado"}

interface mensaje {
    
  mensajeID    :  number,
  remitente    :  string,
  destinatario :  string,
  asunto       :  string,
  cuerpo       :  string,
  estado       :  estado

}


const mensaje1:mensaje={

  mensajeID    :  1,
  remitente    :  "usuario1@ahorradores.com",
  destinatario :  "usuario2@ahorradores.com",
  asunto       :  "Prueba",
  cuerpo       :  "Esto es una prueba",
  estado       :  estado.leido
} 


const mensaje2:mensaje={

  mensajeID    :  2,
  remitente    :  "usuario1@ahorradores.com",
  destinatario :  "usuario3@ahorradores.com",
  asunto       :  "Descuento",
  cuerpo       :  "Grandes ofertas",
  estado       :  estado.leido
}


const mensaje3:mensaje={

  mensajeID    :  3,
  remitente    :  "usuario3@ahorradores.com",
  destinatario :  "usuario2@ahorradores.com",
  asunto       :  "Día sin IVA",
  cuerpo       :  "Todo sin IVA el día 21",
  estado       :  estado.NOleido
}


const mensaje4:mensaje={

  mensajeID    :  4,
  remitente    :  "usuario2@ahorradores.com",
  destinatario :  "usuario1@ahorradores.com",
  asunto       :  "Prueba",
  cuerpo       :  "Esto es una prueba",
  estado       :  estado.leido
}


const mensajes:mensaje[]=[
  mensaje1,
  mensaje2,
  mensaje3,
  mensaje4
]; 

interface usuario{

  usuario  : string,
  password : string

}


const usuario1:usuario={
  usuario   : "usuario1@ahorradores.com",
  password : "1"
}

const usuario2:usuario={
  usuario   : "usuario2@ahorradores.com",
  password : "2"
}

const usuario3:usuario={
  usuario   : "usuario3@ahorradores.com",
  password : "3"
}

const usuarios:usuario[]=[
  usuario1,
  usuario2,
  usuario3
]

function comprobarAcceso(usuario:string, password:string):boolean{
  let valido = false;
    usuarios.forEach(element => {
       
    if (usuario == element.usuario && password == element.password){ 
        valido = true
    }
   });
   return valido 
}

export function buscarMensajes (usuario:string): mensaje[]{
 
  const seleccion:mensaje[] = []
     mensajes.forEach(element => {
         if (usuario == element.destinatario){
              seleccion.push(element)
         }
     });
     
 return seleccion
 }

 export function buscarMensajesLeidos(usuario:string) : mensaje[]{
 
  const seleccion:mensaje[] = []
     mensajes.forEach(element => {
         if (usuario == element.destinatario && estado.leido == element.estado){
              seleccion.push(element)
         }
     });
     
 return seleccion
 }

 export function buscarMensajesNoleidos (usuario:string): mensaje[]{
 
  const seleccion:mensaje[] = []
     mensajes.forEach(element => {
         if (usuario == element.destinatario && estado.NOleido == element.estado){
              seleccion.push(element)
         }
     });
     
 return seleccion
 }

 export function buscarMensajesBorrados (usuario:string): mensaje[]{
 
  const seleccion:mensaje[] = []
     mensajes.forEach(element => {
         if (usuario == element.destinatario && estado.borrado == element.estado){
              seleccion.push(element)
         }
     });
     
 return seleccion
 }
 
 export function CambiarEstadoBorrado (MenID:number){
 
     mensajes.forEach(element => {
         if (MenID == element.mensajeID ){
              element.estado=estado.borrado
         }
     });
     
 
 }

 export function CambiarEstadoLeido (MenID:number){
 
  mensajes.forEach(element => {
      if (MenID == element.mensajeID ){
           element.estado=estado.leido
      }
  });
  

}
 



export default comprobarAcceso;