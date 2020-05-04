<template>  
<!----------------------------------------------- Barra de navegacion ------------------------------------------------------->
    <div id="NavBar">
        <div class="row">            
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <nav class="navbar navbar-expand-lg bg-dark navbar-dark d-flex justify-content-between">                    
                    <router-link class="nav-link text-success" to="/"><i><h1>Ingenio</h1></i></router-link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <!-- Categorias -->
                        <router-link class="nav-link text-success" to="/categorias">Categorias</router-link>
                        <!-- Autores -->
                        <router-link class="nav-link text-success" to="/olvidarcontrasena">Autores</router-link>
                        <!-- Recientes -->
                        <router-link class="nav-link text-success" to="/lomasreciente">Lo mas reciente</router-link>
                        <!-- Perfil -->
                        <router-link class="nav-link text-success" to="/Perfil">Perfil</router-link>
                        <!-- Publicacion -->
                        <router-link class="nav-link text-success" to="/Publicacion">Publicacion</router-link>
                        <!-- Contactenos -->
                        <router-link class="nav-link text-success" to="/contactenos">Contactenos</router-link>
                        <!-- Contactenos -->
                        <router-link class="nav-link text-success"  to="/pruebas">Pruebas</router-link>
                        <!-- Registro -->
                        <a data-toggle="modal" data-target="#RegistrarseModal">
                            <div class="card-body">
                                <button type="button" class="btn btn-outline-success">Registrarse</button>
                            </div>
                        </a>
                        <!-- Iniciar sesion -->
                        <a data-toggle="modal" data-target="#IniciarSesionModal">
                            <div class="card-body">
                                <button type="button" class="btn btn-outline-success">Iniciar Sesion</button>
                            </div>
                        </a>
                        
                    </div>
                </nav>
            </div>
        </div>
        <div class="modal fade" id="IniciarSesionModal" tabindex="-1" role="dialog" aria-labelledby="IniciarSesionModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <!-- <div class="modal-header">
                    <h1 class="modal-title" id="IniciarSesionModal"><i>Bienvenido</i></h1>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div> -->
                    <div class="modal-body bg-light border border-dark rounded container">
                        <IniciarSesion/>
                        <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Ver mas</button>
                        <button type="button" class="btn btn-primary">Ir al sitio</button> -->
                    </div>
                    <!-- <div class="modal-footer">
                        Crear Footer
                        Terminos y Condiciones
                    </div> -->
                </div>
            </div>
        </div>
        <div class="modal fade" id="RegistrarseModal" tabindex="-1" role="dialog" aria-labelledby="RegistrarseModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <!-- <div class="modal-header">
                    <h1 class="modal-title" id="RegistrarseModal"><i>Bienvenido</i></h1>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div> -->
                    <div class="modal-body bg-light border border-dark rounded container">
                        <Registro/>
                        <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Ver mas</button>
                        <button type="button" class="btn btn-primary">Ir al sitio</button> -->
                    </div>
                    <!-- <div class="modal-footer">
                         Crear Footer
                        Terminos y Condiciones
                    </div> -->
                </div>
            </div>
        </div>
    </div>
<!----------------------------------------------- Barra de navegacion ------------------------------------------------------->    
</template>

<script>
import IniciarSesion from './IniciarSesion.vue'
import Registro from './Registro.vue'

export default {
  name: 'NavBar',
  components:{
      IniciarSesion,
      Registro
  }
}
</script>
