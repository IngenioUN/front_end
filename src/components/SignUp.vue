<template>
  <div class="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 offset-2">
    <div class="divcont">
      <h1><em>Sign Up</em></h1>
      <br/>
      <b-input class="form-control" type="text" name="firstName" v-model="form.firstName" placeholder="Name" />
      <br/>
      <b-input class="form-control" type="text" name="lastName" v-model="form.lastName" placeholder="Last Name" />
      <br/>
      <b-input class="form-control" type="text" name="username" v-model="form.email1" placeholder="Email" />
      <br/>
      <b-input class="form-control" type="password" name="password" v-model="form.password" placeholder="Password" />
      <br/>
      <b-input class="form-control" type="password" name="confirmPassword" v-model="form.confirmPassword" placeholder="Confirm Password" />
      <br/>
      <b-input class="form-control" type="text" name="description" v-model="form.description" placeholder="Description" />
      <br/>
      <button @click="postSignUp()" class="btn btn-outline-dark mb-3 mt-3">Sign Up</button>
      <br/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
axios.defaults.withCredentials = true;

export default {
  name: 'SignUp.vue',
  components: {},
  data: function (){
    return {
      form:{
        email1:"",
        confirmPassword:"",
        firstName: "",
        lastName: "",
        password: "",
        description: ""
      }
    }
  },
  methods:{
    //REST API
    postSignUp( event ){
      axios
      .post( this.$store.state.backURL + '/session/signup', // URL
        {
          "firstName": this.form.firstName,
          "lastName": this.form.lastName,
          "email1": this.form.email1,
          "password": this.form.password,
          "confirmPassword": this.form.confirmPassword,
          "description": this.form.description
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
    }
  },
  computed:{}
}
</script>
