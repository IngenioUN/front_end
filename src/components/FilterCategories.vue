<template>
    <div class="divlogin">
        <div class="row">
          <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 mt-5 offset-1">
            <div class="row">
              <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3" v-for="item of publica" :key="item.id">
                <div class="card">
                  <img src="../assets/images/paris.jpg" class="card-img-top" alt="Paris">
                  <div class="card-body">
                    <router-link class="nav-link text-dark" to="/publication"><h5>
                      {{item.title}}
                    </h5></router-link>
                    <p class="card-text">
                    {{item.abstract}}
                    </p>
                    <div v-for="item2 of item.tags" :key="item2.id">
                      <button type="button" class="btn btn-outline-dark mt-2">
                        {{item2}}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
axios.defaults.withCredentials = true;

export default {
  name: 'FilterCategories.vue',
  components: {},
  data: function (){
    return {
      publicaciones: {}
    }
  },
  created: function(){},
  methods:{},
  computed:{
    changePublications(){
      this.publicaciones = {};
      axios
      .get( this.$store.state.backURL + '/publication/get-all-publications',
      {
        "categoryId": this.publica
      })
      .then( response => {
        if( response.status !== 200 ){
          alert( "Error en la autenticación" );
        }else{
          this.publicaciones = response.data;
        }
      })
      .catch( error => {
        if( error.response.status === 400 ){
          alert( "Credenciales incorrectas" );
        }else{
          alert( "¡Parece que hubo un error de comunicación con el servidor!" );
        }
      });
      return this.publica;
    }
  },
  props:['publica']
}
</script>
