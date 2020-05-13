<template>
  <div class="divlogin">
    <div class="row container-fluid">
        <div class="col-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 mt-5 offset-1">
            <button @click="cambiarRol(1)" class="btn btn-outline-dark mb-3 mt-3">Rol 1</button>
            <button @click="cambiarRol(2)" class="btn btn-outline-dark mb-3 mt-3">Rol 2</button>
            <button @click="cambiarRol(3)" class="btn btn-outline-dark mb-3 mt-3">Rol 3</button>
            <div class="card text-center" v-if="rol!=3">
              <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" id="siguiendo-tab" data-toggle="tab" href="#siguiendo1" role="tab" aria-controls="siguiendo1" aria-selected="true">Siguiendo</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="mesiguen-tab" data-toggle="tab" href="#mesiguen" role="tab" aria-controls="mesiguen" aria-selected="false">Me Siguen</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="categorias-tab" data-toggle="tab" href="#categorias" role="tab" aria-controls="categorias" aria-selected="false">Categorias</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="articulosguardados-tab" data-toggle="tab" href="#articulosguardados" role="tab" aria-controls="articulosguardados" aria-selected="false">Articulos Guardados</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="publicaciones-tab" data-toggle="tab" href="#publicaciones" role="tab" aria-controls="publicaciones" aria-selected="false" v-if="rol==2">Publicaciones</a>
                  </li>
                </ul>
              </div>
              <div class="card-body tab-content">
                <div class="tab-pane fade show active" id="siguiendo1" role="tabpanel" aria-labelledby="profile-tab">
                  <Siguiendo/>
                </div>
                <div class="tab-pane fade" id="mesiguen" role="tabpanel" aria-labelledby="profile-tab">
                  Me siguen
                </div>
                <div class="tab-pane fade" id="categorias" role="tabpanel" aria-labelledby="profile-tab">
                  Categorias
                </div>
                <div class="tab-pane fade" id="articulosguardados" role="tabpanel" aria-labelledby="profile-tab">
                  Articulos Guardados
                </div>
                <div class="tab-pane fade" id="publicaciones" role="tabpanel" aria-labelledby="profile-tab" v-if="rol==2">
                  Publicaciones
                </div>              
              </div>
            </div>
            <div class="card text-center" v-if="rol==3">
              <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                  <li class="nav-item">
                    <a class="nav-link active" id="usuarios-tab" data-toggle="tab" href="#usuarios" role="tab" aria-controls="usuarios" aria-selected="true">Todos los usuarios</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="solicitudesautoria-tab" data-toggle="tab" href="#solicitudesautoria" role="tab" aria-controls="solicitudesautoria" aria-selected="false">Solicitudes Autoria</a>
                  </li>
                </ul>
              </div>
              <div class="card-body tab-content">
                <div class="tab-pane fade show active" id="usuarios" role="tabpanel" aria-labelledby="profile-tab">
                  Usuarios<br/>
                  Tu rol: {{rol}}
                </div>
                <div class="tab-pane fade" id="solicitudesautoria" role="tabpanel" aria-labelledby="profile-tab">
                  <SolicitudesAutoria/>
                </div>
              </div>
            </div>
        </div>
        <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 mt-5">
          <PerfilInfoPersonal/>
        </div>
    </div>      
  </div>
</template>

<script>
import axios from 'axios';
import {mapState,mapMutations} from 'vuex';
import SolicitudesAutoria from '../components/SolicitudesAutoria.vue'
import Siguiendo from '../components/Siguiendo.vue'
import PerfilInfoPersonal from '../components/PerfilInfoPersonal.vue'

const path = "/user";

export default {
  name: 'Ingenio.vue',
  components:{
      SolicitudesAutoria,
      Siguiendo,
      PerfilInfoPersonal
  },
  data: function (){
    return {
      //rol : 1 // 1 - Usuario, 2 - Autor, 3 - Admin
      
    }
  },
  methods:{
    ...mapMutations(['cambiarRol'])  
  },
  computed:{
    ...mapState(['rol'])
  }
}
</script>

