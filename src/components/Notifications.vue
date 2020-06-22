<template>
    <div class="divlogin">
        <div class="row">
          <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10" v-for="item of items" :key="item.id">
            <div class="row no-gutters mb-3 border">
              <div class="col-md-10 text-left">
                <div class="card-body">
                  <h5 class="card-title">{{item.nombre}}</h5>
                  Pepito Perez
                </div>
              </div>
              <div class="col-md-2">
                <br/>
                <b-button class="mt-1 btn btn-sm" block variant="outline-dark">Systems</b-button>
                <b-button class="mt-1 btn btn-sm" block variant="outline-danger">Delete</b-button>
                <br/>
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
          nombre: 'Topic 1',
          img: '../assets/images/Civil.jpg'
        },
        usu2: {
          id:2,
          nombre: 'Topic 2',
          img: '../assets/images/Perfil2.jpg'
        },
        usu3: {
          id:3,
          nombre: 'Topic 3',
          img: '../assets/images/Perfil3.jpg'
        },
        usu4: {
          id:4,
          nombre: 'Topic 4',
          img: '../assets/images/Perfil1.jpg'
        },
        usu5: {
          id:5,
          nombre: 'Topic 5',
          img: '../assets/images/Perfil1.jpg'
        }
      }
    }
  },
  methods:{},
  computed:{}
}
</script>
