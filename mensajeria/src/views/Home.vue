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
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="password" v-model="password">
  </div>
 
  <button type="submit" class="btn btn-primary">Acceder</button>
</form>
  </div>
  <div>
    <h3 style="color:red">
     {{error_msg}}
    </h3>
  </div>
</template>

<script>


import comprobarAcceso from "@/models/bbdd";

export default {
  name: 'Home',
  components: {
  
  },
  data(){
    return {
      usuario:"",
      password:"",
      error: true,
      error_msg:"",
    }

  },
  methods:{
    login(){
     
     
        let admitir = comprobarAcceso(this.usuario, this.password)
      
        if(admitir)
            {
              this.$store.commit('cambiarUsuario', this.usuario)
              this.$router.push({ name: 'vistaMensajes' })
            }else{
              this.error_msg= "El Usuario o la contraseña no son correctos"
            }
         
    }
  }
}
</script>
