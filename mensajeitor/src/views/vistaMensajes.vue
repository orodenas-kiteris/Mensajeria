<template>
  <div class="about">
    <h1>Espacio para la versión 2</h1>
  </div>

<div>
    <button class="btn btn-primary" @click="buscarMen()">Todos</button>
    <button class="btn btn-primary" @click="buscarMenLeidos()">Leidos</button>
    <button class="btn btn-primary" @click="buscarMenNoleidos()">No leidos</button>
    <button class="btn btn-primary" @click="buscarMenBorrados()">Borrados</button>
</div>
    
    <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Remitente</th>
      <th scope="col">Asunto</th>
      <th scope="col">Mensaje</th>
    </tr>
  </thead>
  
  <tbody>
   
    <tr v-for="item in mensajes" :key="item">
   
      <td v-text="item.remitente"></td>
      <td v-text="item.asunto"></td>
      <a  @click="abrirMensaje(item)"><td v-text="item.cuerpo"></td></a>
      <!-- Usar interpolacion representacion declarativa {{}} -->
    </tr>


  </tbody>
</table>
<div> 

</div>


  <div class="about">
    <h1>Espacio para la versión 2</h1>
  </div>
</template>
<script>
import { buscarMensajes, buscarMensajesLeidos, buscarMensajesNoleidos, buscarMensajesBorrados } from '@/models/bbdd'


export default {

created(){

  
this.buscarMenNoleidos(this.$store.state.usuario)


},

  data (){
    return {
      usuario  : this.$store.state.usuario,
      mensajes : this.buscarMenNoleidos(this.$store.state.usuario),
      leidos    : "leido",
      Noleidos  : "Noleido",
      borrados : "borrado"
    }

  },
   methods: {
           
         abrirMensaje(item){
             this.$store.commit('leerMensaje', item)
             this.$router.push({ name: 'leer' })
         },

         buscarMen(){

           this.mensajes = buscarMensajes(this.$store.state.usuario)
         },
         buscarMenLeidos(){

           this.mensajes = buscarMensajesLeidos(this.$store.state.usuario)
         },
         buscarMenNoleidos(){

           this.mensajes = buscarMensajesNoleidos(this.$store.state.usuario)
         },
         buscarMenBorrados(){

           this.mensajes = buscarMensajesBorrados(this.$store.state.usuario)
         },



         
         

  }
  
}
</script>


<style lang="scss" scoped>
.entry-scrollarea{
    height: calc( 100vh - 115px);
    overflow: scroll;
}
.btn {
  margin:20px;
}

</style>
