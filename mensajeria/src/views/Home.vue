<template>
  <div class="home">
    <h1>
      Confederación de Ahorradores y Buenos Regateadores O No.ES
    </h1>
  </div>
  
  <div>
 <form v-on:submit.prevent="login">
  <div class="form-group">
    <label for="exampleInputEmail1">Correo Electrónico</label>
    <input type="email" class="form-control" id="login" aria-describedby="emailHelp" v-model="usuario">
    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="password" v-model="password">
  </div>
 
  <button type="submit" class="btn btn-primary">Acceder</button>
</form>
  </div>
</template>

<script>
//import axios from 'axios';
import comprobarAcceso from "@/models/bbdd.js";


export default {
  name: 'Home',
  components: {
  
  },
  data(){
    return {
      usuario:"",
      password:"",
      error: false,
      error_msg:"",
    }

  },
  methods:{
    login(){
     
     /*
      let json ={
        "usuario": this.usuario,
        "password": this.password
      };
      */
      /*
      axios.popst('http://solodata.es/auth', json)
          .then(data =>{
            console.log(data);
          })
          */
         /*
         fetch('http://yesno.wtf')
         .then( resp=> {
           console.log(resp)
         })
         .catch(err=>console.log(err))
         */
        let admitir = comprobarAcceso(this.usuario, this.password)
        console.log(admitir)
         
    }
  }
}
</script>
