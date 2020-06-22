<template>
    <div class="divlogin">
        <div class="row">
          <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10" v-for="item of items" :key="item.id">
            <div class="row no-gutters mb-3">
              <div class="col-md-4">
                <img src="../assets/images/Civil.jpg" class="card-img" alt="FotoPerfil">
              </div>
              <div class="col-md-7 text-left">
                <div class="card-body">
                  <h5 class="card-title">{{item.nombre}}</h5>
                  Description
                  <br/>
                  <b-button class="mt-2 btn btn-sm" variant="outline-dark">Unsusbcribe</b-button>
                  &nbsp;
                  <b-button class="mt-2 btn btn-sm" variant="outline-dark">Publications</b-button>
                </div>
              </div>
              <div class="col-md-1 text-right">
                <br/>
                <br/>
                <b-button class="mt-2 btn btn-sm align-rigth" variant="outline-dark">
                  <a href="#" class="badge badge-danger">9</a>
                  Notifications
                </b-button>
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
          nombre: 'Category 1',
          img: '../assets/images/Civil.jpg'
        },
        usu2: {
          id:2,
          nombre: 'Category 2',
          img: '../assets/images/Perfil2.jpg'
        },
        usu3: {
          id:3,
          nombre: 'Category 3',
          img: '../assets/images/Perfil3.jpg'
        },
        usu4: {
          id:4,
          nombre: 'Category 4',
          img: '../assets/images/Perfil1.jpg'
        },
        usu5: {
          id:5,
          nombre: 'Category 5',
          img: '../assets/images/Perfil1.jpg'
        }
      }
    }
  },
  methods:{},
  computed:{}
}
</script>
