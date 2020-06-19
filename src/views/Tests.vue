<template>
  <div class="row">
    <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
    </div>
    <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
      <div id="usuario" class="container mt-5 border border-dark rounded bg-light">
        <h1>Tests de REST API</h1>
        <br/>
        <button @click="getPersonalData()" class="btn btn-outline-dark mb-3 mt-3">Get Data</button>
        <br/>
        <br/>
        <button @click="postSignIn()" class="btn btn-outline-dark mb-3 mt-3">SignIn</button>
        <br/>
        <br/>
        <button @click="postSignUp()" class="btn btn-outline-dark mb-3 mt-3">SignIn</button>
        <br/>
        <br/>
        <b-button variant="secondary" @click="makeToast('success')" class="mb-2">Danger</b-button>
        <br/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
axios.defaults.withCredentials = true;

export default{
  name: "Test.vue",
  data: function (){
    return {
      form:{
        type: 0 // 0 - Iniciar Sesion , 1 - SignUp,  2 - Recuperar contraseña
      },
      //Get
      roles: [],
      //Alerts
      showBottom: false,
      showTop: false
    }
  },
  beforeCreate( ){
  },
  methods:{
    changeType(val){
      this.form.type = val;
    },
    getPersonalData( event ){
      axios
      .get( this.$store.state.backURL + "/user/get-personal-data", // URL
      ).then( response => {
        if( response.status !== 200 ){
          alert( "Error en la autenticación" );
        }else{
          //localStorage.setItem( 'token', response.data.access_token );
          //alert( "Funciono esta vaina!" )
          console.log(response.data);
          this.roles = response.data;
        }
      } ).catch( error => {
        if( error.response.status === 400 ){
          alert( "Credenciales incorrectas" );
        }
        else{
          console.log(error.response.status);
        }
      } );
    },
    postSignIn( event ){
      axios
      .post( this.$store.state.backURL + '/session/signin', // URL
        {
          "email1": "author@ingenio.com",
          "password": "aA@12345678"
          //grant_type: 'password'
        }
      ).then( response => {
        console.log("entra");
        localStorage.setItem( 'token', response.data.access_token );
        alert( "¡Autenticación Exitosa! El token se ha almacenado en el Local Storage" )
        console.log(response.data);
        //this.$router.push('principal')
      })
      .catch( error => {
        console.log(error.response);
        if( error.response.status === 400 ){
          alert( error.response.data.message );
        }else{
          alert( "¡Parece que hubo un error de comunicación con el servidor!" );
        }
        console.log(error.response);
      });
    },
    postSignUp( event ){
      axios
      .post( this.$store.state.backURL + '/session/signup', // URL
        {
          "email1": "author@ingenio.com",
          "password": "aA@12345678"
          //grant_type: 'password'
        }
      ).then( response => {
        console.log("entra");
        localStorage.setItem( 'token', response.data.access_token );
        alert( "¡Autenticación Exitosa! El token se ha almacenado en el Local Storage" )
        console.log(response.data);
        //this.$router.push('principal')
      })
      .catch( error => {
        console.log(error.response);
        if( error.response.status === 400 ){
          alert( error.response.data.message );
        }else{
          alert( "¡Parece que hubo un error de comunicación con el servidor!" );
        }
        console.log(error.response);
      });
    },
    makeToast(variant = null) {
      this.$bvToast.toast('Toast body content', {
        title: `Variant ${variant || 'default'}`,
        variant: variant,
        solid: true
      })
    }
  },
  components:{}
}
</script>