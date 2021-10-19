
export let mensajes = [

    {
        "mensajeID"    :  "1",
        "remitente"    :  "usuario1",
        "destinatario" :  "usuario2",
        "asunto"       :  "Prueba",
        "cuerpo"       :  "Esto es una prueba",
        "estado"       :  "",
    },
    {
        "mensajeID"    :  "2",
        "remitente"    :  "usuario1",
        "destinatario" :  "usuario3",
        "asunto"       :  "Descuento",
        "cuerpo"       :  "Grandes ofertas",
        "estado"       :  "",
    },
    {
        "mensajeID"    :  "3",
        "remitente"    :  "usuario3",
        "destinatario" :  "usuario2",
        "asunto"       :  "Día sin IVA",
        "cuerpo"       :  "Todo sin IVA el día 21",
        "estado"       :  "",
    }

]









function comprobarAcceso(usuario, password){
    if (usuario == 'orodenas@kiteris.com' & password == '1234'){
        return true    
      }else return false
    
}

export default comprobarAcceso;