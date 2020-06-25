<template>
  <div id="AuthorRequest">
    <div class="row">
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <form >
          <div class="col-md-12 mb-3">
            <label for="validationServer01"><h5>Hola,</h5></label><br/>
            <br>
            <p>
              Al solicitar el rol de "Autor", adquiere las siguientes funcionalidades:
              <br/>
              <ul id="funciones">
                <li>
                  Puede subir, actualizar y gestionar publicaciones de su propiedad.
                </li>
                <li>
                  Puede ser seguido por otros usuarios, y se les enviara notificaciones a estos cada que suba una publicacion
                </li>
              </ul>
              <strong>NOTA:</strong> Su nombre de usuario seguira siendo la misma y podra seguir usando sus funcionalidades como usuario.
              <br>
              <br>
              Favor llenar los siguientes datos:
            </p>
          </div>
          <div class="col-md-8 mb-3">
            <label for="email2">E-mail de respaldo</label>
            <input type="email" class="form-control" :class="{'border border-success':!validaEmail}" placeholder="Email" v-model="form.email2" required>
            <label for="professionalCard">Tarjeta Profesional</label>
            <input type="text" class="form-control" placeholder="Tarjeta Profesional" v-model="form.professionalCard" required>
            <label for="employmentHistory">Historial de Empleo</label>
            <input type="text" class="form-control" placeholder="Historial de empleo" v-model="form.employmentHistory" required>
            <label for="academicHistory">Historia Academica</label>
            <input type="text" class="form-control" placeholder="Historia Academica" v-model="form.academicHistory" required>
            <br/>
            <button @click="sendAuthReq()" class="btn btn-dark mb-2">Enviar Solicitud</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
axios.defaults.withCredentials = true;

export default {
  name: 'AuthorRequest.vue',
  components: {},
  data: function (){
    return {
      form:{
        email2: "",
        professionalCard: "",
        employmentHistory:"",
        academicHistory:""
      }
    }
    },
    methods: {
      sendAuthReq( event ){
        axios
          .post( this.$store.state.backURL + "/author-request/add-author-request",
        {
          "email2": this.form.email2,
          "professionalCard": this.form.professionalCard,
          "employmentHistory": this.form.employmentHistory,
          "academicHistory": this.form.academicHistory
        }
      )
        .then( response => {
          if( response.status == 201){
            alert( "Solicitud creada" );
            console.log(response);
          }else if( response.status == 200){
            alert( "Ya haz enviado tu solicitud" )
            //this.$router.push('principal')
            console.log(response);
          }
          else {
            alert( "Error al solicitar la peticion de autor" );
            console.log(response);
          }
        }).catch( error => {
          if( error.response.status === 400 ){
            alert( "Credenciales incorrectas" );
            alert(error.response.status);
              console.log(response);
          }else{
            alert( "¡Parece que hubo un error de comunicación con el servidor!" );
            console.log(response);
          }
        });
      },
    },
    computed:{
      validaEmail(){
        var exp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return (exp.test(this.form.email1));
      }
    }
}
</script>