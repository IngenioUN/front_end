<template>
  <div id="PersonalInfo">
    <div class="card text-center shadow p-3 mb-5 bg-white rounded" style="width: 18rem;">
      <img src="../assets/images/Perfil1.jpg" class="card-img-top" alt="...">
      <div class="card-body">
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <h5 class="card-title"> {{user.firstName}} {{user.lastName}} </h5>
          Tu rol: {{nameRole}}<br/>
          {{user.email1}}
          <p class="card-text">
          Hola! <br/>
          {{user.description}}
          </p>
          <a data-toggle="modal" data-target="#AuthorRequestModal" v-if="Role==0">
            <div class="card-body">
              <button id="boton" type="button" class="btn btn-outline-dark">Solicitud Autor</button>
            </div>
          </a>
          <a data-toggle="modal" data-target="#AddPublicationModal" v-if="Role==1">
            <div class="card-body">
              <button id="boton" type="button" class="btn btn-outline-dark">Subir Publicacion</button>
            </div>
          </a>
          <a data-toggle="modal" data-target="#CrearCategoriaModal" v-if="Role==2">
            <div class="card-body">
              <button id="boton" type="button" class="btn btn-outline-dark">Crear Categorias</button>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="modal fade" id="AuthorRequestModal" tabindex="-1" role="dialog" aria-labelledby="AuthorRequestModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header bg-light">
          <h1 class="modal-title" id="SignInModal"><em>Solicitud Autoria</em></h1>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          </div>
          <div class="modal-body bg-light container">
            <AuthorRequest/>
          </div>
          <div class="modal-footer bg-light">
            Terms y Conditions
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="AddPublicationModal" tabindex="-1" role="dialog" aria-labelledby="AddPublicationModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header bg-light">
          <h1 class="modal-title" id="AddPublicationModal"><em>Add New Publication</em></h1>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          </div>
          <div class="modal-body bg-light container">
            <AddPublication/>
          </div>
          <div class="modal-footer bg-light">
            Terms y Conditions
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="CrearCategoriaModal" tabindex="-1" role="dialog" aria-labelledby="CrearCategoriaModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-md modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header bg-light">
          <h1 class="modal-title" id="CrearCategoriaModal"><em>Add new category</em></h1>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          </div>
          <div class="modal-body bg-light container">
            <AddCategory/>
          </div>
          <div class="modal-footer bg-light">
            Terms y Conditions
          </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
import AuthorRequest from '../components/AuthorRequest.vue';
import AddPublication from '../components/AddPublication.vue';
import AddCategory from '../components/AddCategory.vue';

import axios from'axios';
axios.defaults.withCredentials = true;
export default {
  name: 'PersonalInfo.vue',
  components:{
    AuthorRequest,
    AddPublication,
    AddCategory
  },
  data: function (){
    return {
      Role:3,
      nameRole: '',
      user: {}
    }
  },
  created: function(){
    axios
    .get(this.$store.state.backURL + '/user/get-personal-data')
    .then( response => {
      this.user = response.data;
    })
    .catch( error => {
      if( error.response.status === 401){
        alert(error.response.data.message);
      }else{
        alert("Database Problem.");
      }
      this.$router.push('principal');
      this.$router.go(0);
    });
    this.Role = localStorage.getItem('Role');
    switch(this.Role) {
      case "0":
        this.nameRole = 'Usuario'
        break;
      case "1":
        this.nameRole = 'Autor'
        break;
      case "2":
        this.nameRole = 'Administrador'
        break;
      default:
        this.nameRole = 'Error'
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