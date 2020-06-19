<template>
  <div class="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 offset-2">
    <div class="divcont">
      <h2><em>Sign In</em></h2>
      <br/>
      <b-input class="form-control" type="text" name="username" v-model="form.email1" placeholder="Username" />
      <br/>
      <b-input class="form-control" type="password" name="password" v-model="form.password" placeholder="Password" />
      <br/>
        <button @click="postSignIn()" class="btn btn-outline-dark mb-3 mt-3">SignIn</button>
      <br/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.withCredentials = true;

export default {
  name: 'SignIn.vue',
  components: {},
  data: function (){
    return {
      form:{
        type: 0, // 0 - SignIn , 1 - SignUp
        email1:"",
        password:""
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
        }
      ).then( response => {
        alert(response.data.role);
        localStorage.setItem( 'Role', parseInt(response.data.role) );
        localStorage.setItem( 'token', response.data.access_token );
        console.log(response.data);
        this.$router.push('principal')
      })
      .catch( error => {
        console.log(error.response);
        alert( error.response.data.message );
      });
    },
  },
  computed:{}
}
</script>
