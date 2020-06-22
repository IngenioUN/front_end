<template>
    <div class="divlogin">
        <div class="row">
          <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" v-for="item of items" :key="item.id">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src="../assets/images/Perfil2.jpg" class="card-img" alt="FotoPerfil">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{item.nombre}}</h5>
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
  name: 'Followed.vue',
  components: {},
  data: function (){
    return {
      items: {
        usu1: {
          id:1,
          nombre: 'Pepo Perez',
          img: '../assets/images/Perfil1.jpg'
        },
        usu2: {
          id:2,
          nombre: 'Juana Arevalo',
          img: '../assets/images/Perfil2.jpg'
        },
        usu3: {
          id:3,
          nombre: 'Roman Romero',
          img: '../assets/images/Perfil3.jpg'
        },
        usu4: {
          id:4,
          nombre: 'Juancho Perez',
          img: '../assets/images/Perfil1.jpg'
        },
        usu5: {
          id:5,
          nombre: 'Juancho Perez 2',
          img: '../assets/images/Perfil1.jpg'
        }
      }
    }
  },
  methods:{},
  computed:{}
}
</script>
