<template>
  <div class="row">
    <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
    </div>
    <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
      <div id="usuario" class="container mt-5 border border-dark rounded bg-light">
        <h1>Pruebas de REST API</h1>
        <br/>
        <button @click="getPersonalData()" class="btn btn-outline-dark mb-3 mt-3">Get Data</button>
        <br/>
        <br/>
        <b-button variant="secondary" @click="makeToast('danger')" class="mb-2">Danger</b-button>
        <br/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
axios.defaults.withCredentials = true;

export default{
  name: "Usuario",
  data: function (){
    return {
      form:{
        type: 0 // 0 - Iniciar Sesion , 1 - Registro,  2 - Recuperar contraseña
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