<template>
  <div id="NavBar">
    <div class="row">
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <!-- fixed-top  -->
        <nav id="navbar" class="navbar navbar-expand-lg">
          <router-link class="nav-link text-white" to="/">
            <img src="../assets/images/IngenioLogo.png" class="card-img-top" alt="Personaje" style="height: 80px; width:160px">
          </router-link>
          <div class="collapse navbar-collapse d-flex justify-content-around" id="navbarSupportedContent">
            <router-link class="nav-link text-white" to="/publication">Publication</router-link>
            <!-- ContactUs -->
            <router-link class="nav-link text-white" to="/contactUs">Contact us</router-link>
            <!-- ContactUs -->
            <router-link class="nav-link text-white"  to="/tests">Tests</router-link>
            <!-- Profile -->
            <router-link class="nav-link text-white" to="/profile" v-if="Role!=3">Profile</router-link>
            <!-- SignUp -->
            <a data-toggle="modal" data-target="#RegistrarseModal" v-if="Role==3">
              <div class="card-body">
                <button type="button" class="btn btn-outline-light">
                  <b-icon icon="arrow-bar-up" aria-hidden="true"></b-icon>
                  Sign Up
                </button>
              </div>
            </a>
            <!-- Iniciar sesion -->
            <a data-toggle="modal" data-target="#SignInModal" v-if="Role==3">
              <div class="card-body">
                <button type="button" class="btn btn-outline-light">
                  <b-icon icon="arrow-bar-right" aria-hidden="true"></b-icon>
                  Sign In
                </button>
              </div>
            </a>
            <!-- Cerrar sesion -->
            <a data-toggle="modal" data-target="#CerrarSesionModal" v-if="Role!=3">
              <div class="card-body">
                <button type="button" class="btn btn-outline-light" @click="getSignOut()">
                  <b-icon icon="power" aria-hidden="true"></b-icon>
                  Sign Out
                </button>
              </div>
            </a>
          </div>
        </nav>
      </div>
    </div>
    <div class="modal fade" id="SignInModal" tabindex="-1" role="dialog" aria-labelledby="SignInModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body bg-light border border-dark rounded container">
            <SignIn/>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="RegistrarseModal" tabindex="-1" role="dialog" aria-labelledby="RegistrarseModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body bg-light border border-dark rounded container">
            <SignUp/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.withCredentials = true;

import SignIn from './SignIn.vue'
import SignUp from './SignUp.vue'

export default {
  name: 'NavBar.vue',
  components:{
    SignIn,
    SignUp
  },
  data: function (){
    return {
      Role:3,
      nameRole: ''
    }
  },
  created: function(){
    this.Role = parseInt(localStorage.getItem('Role'));
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
  methods: {
    getSignOut( event ){
      axios
      .get( this.$store.state.backURL + "/session/signout" )
      .then( response => {
        alert(response.data.message);
        localStorage.setItem( 'Role', 3);
        console.log(response.data);
        this.$router.push('principal');
        this.$router.go(0);
      })
      .catch( error => {
        if( error.response.status == 401 ) {
          alert(error.response.data.message);
          localStorage.setItem( 'Role', 3 );
          //this.$router.push('principal')
          this.$router.go(0);
        } else {
          alert("Could not establish communication with the server");
        }
      });
    }
  }
}
</script>