<template>
  <div class="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 offset-2">
    <div class="divcont">
      <h2><em>Iniciar Sesion</em></h2>
      <br/>
        <button @click="postSignIn()" class="btn btn-outline-dark mb-3 mt-3">SignIn</button>
      <br/>
      <h2><em>Iniciar Sesion</em></h2>
      <b-input type="text" name="username" v-model="form.email1" placeholder="Username" /></b-input>
      <b-input type="password" name="password" v-model="form.password" placeholder="Password" /></b-input>
      <button type="button" v-on:click="postSignIn()">Login</button>
      <form>
        <div class="form-group">
          <label for="uname">Usuario:</label>
          <b-input v-model="form.email1" :state="validaEmail" id="feedback-user"></b-input>
          <b-form-invalid-feedback :state="validaEmail">
            Your user ID must be 5-12 characters long.
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="validaEmail">
            Looks Good.
          </b-form-valid-feedback>
          <label for="pwd">Contraseña:</label>
          <b-input type="password" v-model="form.password" :state="validaPassword" id="feedback-password"></b-input>
          <b-form-invalid-feedback :state="validaPassword">
            Your user ID must be 5-12 characters long.
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="validaPassword">
            Looks Good.
          </b-form-valid-feedback>
          <button @click="postSignIn()" class="btn btn-outline-dark mb-3 mt-3">SignIn</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.withCredentials = true;

export default {
  name: 'SignIn.vue',
  data: function (){
    return {
      form:{
        type: 0, // 0 - Iniciar Sesion , 1 - SignUp,  2 - Recuperar contraseña
        email1:"author@ingenio.com",
        password:"aA@12345678"
        //passwordos:""
      }
    }
  },
  methods:{
    postSignIn( event ){
      axios
      .post( this.$store.state.backURL + '/session/signin', // URL
        {
          "email1": this.form.email1,
          "password": this.form.password
          //grant_type: 'password'
        }
      ).then( response => {
        localStorage.setItem( 'token', response.data.access_token );
        alert( "¡Autenticación Exitosa! El token se ha almacenado en el Local Storage" )
        console.log(response.data);
        //this.$router.push('principal')
      })
      .catch( error => {
        console.log(error.response);
        alert( error.response.data.message );
      });
    },
  },
  computed:{
    validaEmail(){
      var exp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      return (exp.test(this.form.email1));
    },
    validaPassword(){
      var exp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
      return (exp.test(this.form.password));
    }
  },
  components: {}
}
</script>
