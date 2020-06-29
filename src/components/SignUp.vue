<template>
  <div class="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 offset-2">
    <div class="divcont">
      <h1><em>Sign Up</em></h1>
      <br/>
      <b-input class="form-control" type="text" name="firstName" v-model="form.firstName" placeholder="Name" :state="verifyName"/>
      <br/>
      <b-input class="form-control" type="text" name="lastName" v-model="form.lastName" placeholder="Last Name" :state="verifyLastName"/>
      <br/>
      <b-input class="form-control" type="text" name="username" v-model="form.email1" placeholder="Email" :state="verifyEmail"/>
      <br/>
      <b-input class="form-control" type="password" name="password" v-model="form.password" placeholder="Password" :state="verifyPass"/>
      <br/>
      <b-input class="form-control" type="password" name="confirmPassword" v-model="form.confirmPassword" placeholder="Confirm Password" :state="verifyPass2"/>
      <br/>
      <b-input class="form-control" type="text" name="description" v-model="form.description" placeholder="Description" :state="verifyDescription"/>
      <br/>
      <b-form-valid-feedback id="pass-feedback">
          {{Valid}}
        </b-form-valid-feedback>
        <b-form-invalid-feedback id="pass-feedback">
          {{Invalid}}
        </b-form-invalid-feedback>
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
      },
      Valid: "Los datos ingresados son validos",
      Invalid: ""
    }
  },
  methods:{
    postSignUp( event ){
      axios
      .post( this.$store.state.backURL + '/session/signup',
        {
          "firstName": this.form.firstName,
          "lastName": this.form.lastName,
          "email1": this.form.email1,
          "password": this.form.password,
          "confirmPassword": this.form.confirmPassword,
          "description": this.form.description
        }
      ).then( response => {
        localStorage.setItem( 'Role', response.data.role );
        this.sendMessage("Correct", "success", response.data.message);
        this.$router.push('/');
        this.$router.go(0);
      })
      .catch( error => {
        localStorage.setItem('Role', 3);
        this.sendMessage("Error", "danger", error.response.data.message);
      });
    },
    sendMessage(title, variant, message){
      this.$bvToast.toast(message, {
        title: title,
        variant: variant,
        solid: true
      })
    } 
  },
  computed: {
    verifyName() {
      if(this.form.firstName.length < 1){
        return null;
      }
      return true
    },
    verifyLastName() {
      if(this.form.lastName.length < 1){
        return null;
      }
      return true
    },
    verifyEmail() {
      if(this.form.email1.length < 1){
        return null;
      }
      return true
    },
    verifyPass() {
      if(this.form.password.length < 1){
        return null;
      }
      return true
    },
    verifyPass2() {
      if(this.form.confirmPassword.length < 1){
        return null;
      }else if(this.form.password == this.form.confirmPassword){
        return true
      }
    },
    verifyDescription() {
      if(this.form.description.length < 1){
        return null;
      }
      return true
    }
  },
}
</script>
