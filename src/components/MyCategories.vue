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
                <a data-toggle="modal" data-target="#NotificationsModal">
                  <b-button class="mt-2 btn btn-sm align-rigth" variant="outline-dark">
                  <a href="#" class="badge badge-danger">9</a>
                  Notifications
                  </b-button>
                </a>
              </div>
            </div>
            <div class="modal fade" id="NotificationsModal" tabindex="-1" role="dialog" aria-labelledby="NotificationsLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
                <div class="modal-content">
                  <div class="modal-header bg-light">
                  <h1 class="modal-title" id="NotificationsModal"><em>Notifications</em></h1>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  </div>
                  <div class="modal-body bg-light container">
                    <Notifications/>
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
const path = "/user";
import Notifications from '../components/Notifications.vue';

export default {
  name: 'Followed.vue',
  components: {
    Notifications
  },
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
