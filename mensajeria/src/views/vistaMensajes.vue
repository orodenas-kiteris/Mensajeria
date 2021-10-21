<template>
  <div class="about">
    <h1>Espacio para la versión 2</h1>
  </div>

<div>
    <button class="btn btn-primary" type="submit">Todos</button>
    <button class="btn btn-primary" type="submit">Leidos</button>
    <button class="btn btn-primary" type="submit">No leidos</button>
    <button class="btn btn-primary" type="submit">Borrados</button>
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
import { buscarMensajes } from '@/models/bbdd.js'


export default {


  data (){
    return {
      usuario  : this.$store.state.usuario,
      mensajes :  buscarMensajes(this.$store.state.usuario)
    }

  },
   methods: {
           
         abrirMensaje(item){
             this.$store.commit('leerMensaje', item)
             this.$router.push({ name: 'leer' })
         },
         
         

  }
  
}
</script>


<style lang="scss" scoped>
.entry-scrollarea{
    height: calc( 100vh - 115px);
    overflow: scroll;
}


</style>
