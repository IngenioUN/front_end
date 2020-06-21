<template>
    <div class="divlogin">
        <div class="row">
          <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 offset-1">
            <!-- Para probar que se esta trayendo correctmente el id de la categoria {{IdCat}} -->
            <div class="card mb-3 mt-3" v-for="index in 10" :key="index">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="../assets/images/Perfil3.jpg" class="card-img" alt="FotoPerfil">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">User {{index}}</h5>
                    <b-button class="mt-2 btn btn-sm" block variant="outline-dark">Follow</b-button>
                    <b-button class="mt-2 btn btn-sm" block variant="outline-dark">Profile</b-button>
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
  name: 'RandomAuthors.vue',
  components: {

  },
  data: function (){
    return {
    }
  },
  created: function(){
  },
  methods:{  },
  computed:{},
  props:['IdCat']
}
</script>
