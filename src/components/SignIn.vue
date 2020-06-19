<template>
  <div class="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 offset-2">
    <div class="divcont">
      <h2><em>Sign In</em></h2>
      <br/>
      <b-form-group
        class="mb-0"
        label="Email"
        label-for="input-formatter">
        <b-input id="email" class="form-control" type="text" name="username" v-model="form.email1" placeholder="Username" :state="verifyUser"/>
        <b-form-valid-feedback id="email-feedback">
          Valid
        </b-form-valid-feedback>
        <b-form-invalid-feedback id="email-feedback">
          Invalid
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group
        class="mb-0"
        label="Password"
        label-for="input-formatter">
        <b-input id="pass" class="form-control" type="password" name="password" v-model="form.password" placeholder="Password" :state="verifyPass"/>
        <b-form-valid-feedback id="pass-feedback">
          Valid
        </b-form-valid-feedback>
        <b-form-invalid-feedback id="pass-feedback">
          Invalid
        </b-form-invalid-feedback>
      </b-form-group>
      <button @click="postSignIn()" class="btn btn-outline-dark mb-3 mt-3" >SignIn</button>
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
        type: 0,
        email1:"author@ingenio.com",
        password:"aA@12345678"
      }
    }
  },
  methods:{
    postSignIn( event ){
      axios
      .post( this.$store.state.backURL + '/session/signin',
        {
          "email1": this.form.email1,
          "password": this.form.password
        }
      ).then( response => {
        alert(response.data.message);
        localStorage.setItem( 'Role', parseInt(response.data.role));
        console.log(response.data);
        this.$router.go(0);
      })
      .catch( error => {
        console.log(error.response);
        alert( error.response.data.message );
        this.$router.go(0);
      });
    },
  },
  computed: {
      verifyUser() {
        if(this.form.email1.length < 3){
          return null;
        }
        return true
      },
      verifyPass() {
        if(this.form.password.length < 4){
          return null;
        }
        return true
      }
    },
}
</script>
