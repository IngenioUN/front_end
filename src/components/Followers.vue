<template>
    <div class="divlogin">
      <div class="row">
        <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" v-for="item of 20" :key="item.id">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="../assets/images/Perfil2.jpg" class="card-img" alt="FotoPerfil">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">item.nombre</h5>
                <b-button class="mt-2 btn btn-sm" block variant="outline-dark">Stop Follow</b-button>
                <b-button class="mt-2 btn btn-sm" block variant="outline-dark">Profile</b-button>
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
const path = "/user";

export default {
  name: 'Followers.vue',
  components: {},
  data: function (){
    return {}
  },
  methods:{},
  computed:{},
  props:['id']
}
</script>
