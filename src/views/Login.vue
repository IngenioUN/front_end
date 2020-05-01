<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-10 col-md-8 offset-sm-1 offset-md-2">
        <div class="mt-5">
          <form class="border border-primary rounded form-inline" @submit="register">

            <h2 class="col-12 text-center text-primary mt-3 mb-5">Iniciar Sesi&oacute;n</h2>
<!--             
            <div class="form-group col-12">
              <label for="username" class="custom-label col-md-3">Nombre de Usuario</label>
              <input id="username" class="form-control col-12 col-sm-10 col-md-7 offset-sm-1" type="text"
                     placeholder="Nombres" v-model="username" required/>
            </div>

            <div class="form-group col-12">
              <label for="password" class="custom-label col-md-3">Contrase&ntilde;a</label>
              <input id="password" class="form-control col-12 col-sm-10 col-md-7 offset-sm-1" type="password"
                     placeholder="Contraseña" v-model="password" required/>
            </div>
            <div class="col-12 col-sm-6 col-md-5 offset-md-2 text-center mb-3">
                <span class="text-primary">
                  <small>
                    <router-link :to="{ name: 'signup' }">&iquest;No tienes una cuenta? &iexcl;Registrate!</router-link>
                  </small>
                </span>
            </div>
             -->
            <div class="col-12 col-sm-5 col-md-4 mb-3">
              <button class="col-sm-10 col-md-10 offset-sm-1 offset-md-2 btn btn-primary" type="submit">
                Iniciar Sesi&oacute;n
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import axios from 'axios';

    const path = "/user";

    export default {
        name: "Login.vue",
        components: {},
        data(){
            return {
                firstName: "Pepito",
                lastName: "Perez",
                email1: "pperez@gmail.com",
                password: "12345",
                email2: "pepo@gmail.com",
                description: "Prueba 2 Desde Vue"
            }
        },
        methods: {
            register( event ){
                axios
                .post( this.$store.state.backURL + path, // URL
                    
                    {
                      "firstName": this.firstName,
                      "lastName": this.lastName,
                      "email1": this.email1,
                      "password": this.password,
                      "email2": this.email2,
                      "description": this.description
                    }
                ).then( response => {
                    if( response.status !== 201 ){
                        alert( "Error en la autenticación" );
                    }else{
                        //localStorage.setItem( 'token', response.data.access_token );
                        alert( "Funciono esta vaina!" )
                        console.log(response.message);
                        //this.$router.push( {name: 'home'} )
                    }
                } ).catch( error => {
                    if( error.response.status === 400 ){
                      alert( "Credenciales incorrectas" );
                    }else{
                      alert( "¡Parece que hubo un error de comunicación con el servidor!" );
                    }
                } );
                event.preventDefault();
            }
        }
    }
</script>

<style scoped>
  .form-inline {
    width: auto;
  }

  .form-inline .form-group {
    margin-bottom: 1rem;
  }

  .custom-label {
    display: inline-block;
    justify-content: right !important;
    text-align: right !important;
  }

  @media (max-width: 767px) {
    .custom-label {
      display: none !important;
    }
  }
</style>
