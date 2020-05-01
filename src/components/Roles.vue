<template>
  <div class="col-12 col-sm-10 col-md-8 offset-sm-1 offset-md-2">
    <div class="mt-5">
      <form class="border border-primary rounded form-inline">
        <h2 class="col-12 text-center text-primary mt-3 mb-5">Mis Roles</h2>
        <div class="form-group col-12">   
          <ul id="roles">
            <li v-for="role in roles" :key="role.id" :value="role.id">
              {{role.roleName}}
            </li>
          </ul>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "Roles",
    data( ){
      return {
        roles: []
      }
    },
    beforeCreate( ){
      const rolesPath = '/registro/my-rol';
      axios
        .get( this.$store.state.backURL + rolesPath,
            {
              params: {
                access_token: localStorage.getItem( "token" )
              }
            })
        .then( response => {
          if( response.status !== 200 ){
            alert( "Error en la petición. Intente nuevamente")            
          }else{
            //alert( "Conectado" );
            this.roles = response.data;
          }
        }).catch( response => {
          alert( "No es posible conectar con el backend en este momento" );
        });
    }
  }
</script>

<style scoped>
  .form-inline .form-group{
    margin-bottom: 1rem;
  }
</style>
