<template>
    <div class="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 offset-2">
        <div class="divcont">
            <h2><em>Iniciar Sesion</em></h2>
            <form @submit.prevent="sendForm()">
                <div class="form-group">
                    <label for="uname">Usuario:</label>
                    <input type="email" class="form-control" :class="{'border border-success':!validaEmail}" placeholder="Email" v-model="form.email1" required>
                    <label for="pwd">Contraseña:</label>
                    <input type="password" class="form-control" v-if="form.type!=2" :class="{'border border-success':!validaPassword}" placeholder="Contraseña" v-model="form.password" required>
                    <button @click="login()" class="btn btn-outline-dark mb-3 mt-3">Ingresar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
axios.defaults.withCredentials = true;

export default {
  name: 'Ingreso.vue',
  components: {},
  data: function (){
    return {
        form:{
            type: 0, // 0 - Iniciar Sesion , 1 - Registro,  2 - Recuperar contraseña
            email1:"",
            password:""
            //passwordos:""
        }
    }
    },
    methods:{
        login( event ){
                axios
                .post( this.$store.state.backURL + '/session/signin', // URL
                    {
                        "email1": this.form.email1,
                        "password": this.form.password
                        //grant_type: 'password'
                    }
                ).then( response => {
                    if( response.status !== 200 ){
                        alert( "Error en la autenticación" );
                    }else{
                        localStorage.setItem( 'token', response.data.access_token );
                        alert( "¡Autenticación Exitosa! El token se ha almacenado en el Local Storage" )
                        console.log(response);
                        //this.$router.push('principal')
                    }
                } ).catch( error => {
                    if( error.response.status === 400 ){
                      alert( "Credenciales incorrectas" );
                    }else{
                      alert( "¡Parece que hubo un error de comunicación con el servidor!" );
                    }
                } );

               // event.preventDefault();
            },
        sendForm(){

            if(this.validaType()){
                console.log(this.form);
            }
        }
    },
    computed:{
        validaEmail(){
            var exp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            return (exp.test(this.form.email1));
        },
        validaPassword(){
            var exp = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;
            return (exp.test(this.form.password));
        }
    }
}
</script>
