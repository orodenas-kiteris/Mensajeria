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
    <button class="btn btn-primary" type="submit">Eliminar</button>
  </div>
</template>

<script>


export default {

created(){
console.log(this.mensajeEntero)
},

Data(){
      return{
        mensajeEntero : this.$store.state.mensaje,
        
      }
    },

methods:{
  

    salir(){
       this.$router.push({ name: 'vistaMensajes' })
       
    }
  }

}
</script>

<style>

</style>