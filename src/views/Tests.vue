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
      //Get
      roles: [],
    }
  },
  methods:{
    getPersonalData( event ){
      axios
      .get( this.$store.state.backURL + "/user/get-personal-data", // URL
      ).then( response => {
        if( response.status !== 200 ){
          this.sendMessage("Error", "danger", response.data.message);
        }else{
          this.sendMessage("Correct", "success", response.data.message);
          this.roles = response.data;
        }
        }).catch( error => {
          this.sendMessage("Error", "danger", error.response.data.message);
      } );
    },
    postSignIn( event ){
      axios
      .post( this.$store.state.backURL + '/session/signin',
        {
          "email1": "author@ingenio.com",
          "password": "aA@12345678"
        }
      ).then( response => {
        localStorage.setItem('Role', response.data.role);
        this.sendMessage("Correct", "success", response.data.message);
      })
      .catch( error => {
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
  components:{}
}
</script>