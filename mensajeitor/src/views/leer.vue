<template>
  <div>
  <span class="d-block p-2  bg-white text-black border">Usuario:
     <span>{{this.$store.state.mensaje.remitente}}</span>
  </span>
  <span class="d-block p-2  bg-white text-black border">Asunto:
      <span>{{this.$store.state.mensaje.asunto}}</span>
  </span>
  <span class="d-block p-2  bg-white text-black border">Mensaje:
      <span>{{this.$store.state.mensaje.cuerpo}}</span>
  </span>
  
  </div>

  <div>
    <button class="btn btn-primary" @click="salir">Salir</button>
    <button class="btn btn-primary" @click="borrar">Eliminar</button>
  </div>
</template>

<script>
import { CambiarEstadoBorrado, CambiarEstadoLeido } from "@/models/bbdd";

export default {

created(){

  CambiarEstadoLeido(this.$store.state.mensaje.mensajeID)

},

Data(){
      return{
        mensajeEntero : this.$store.state.mensaje,
        
      }
    },

methods:{
  

    salir(){
       
      this.$router.push({ name: 'vistaMensajes' })
       
    },

    borrar(){
             
       CambiarEstadoBorrado(this.$store.state.mensaje.mensajeID)
     

    }
  }

}
</script>

<style>
.btn {
  margin:20px;
}

</style>
TODO poner mesajes en dos estados a la vez