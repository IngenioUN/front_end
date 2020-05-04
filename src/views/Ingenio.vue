<template>    
    <div class="divlogin">
        <div class="row container-fuild">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" >
                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                      <div class="carousel-item active" >
                        <img src="../assets/images/arches.jpg" class="d-block w-100" alt="Arches" style="height: 500px; opacity: 0.2">
                        <div class="carousel-caption d-none d-md-block text-dark">
                          <h1>Ingenio</h1>
                          <p>Una pagina donde puedes...</p>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img src="../assets/images/building.jpg" class="d-block w-100" alt="building" style="height: 500px; opacity: 0.2">
                        <div class="carousel-caption d-none d-md-block text-dark">
                          <h1>Ingenio</h1>
                          <p>..encontrar cada noticia, informacion o investigacion ...</p>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img src="../assets/images/car.jpg" class="d-block w-100" alt="car" style="height: 500px; opacity: 0.2">
                        <div class="carousel-caption d-none d-md-block text-dark">
                          <h1>Ingenio</h1>
                          <p>... de tus temas favoritos.</p>
                        </div>
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
<!----------------------------------------------- Cuadro Izquierdo: Vacio --------------------------------------------------->        
        <hr width="70%"/>
        <div class="row">
            <div class="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                <a></a>
            </div>
<!--------------------------------------------------------------------------------------------------------------------------->
<!---------------------------------------------- Cuadro Central: Publicaciones ---------------------------------------------->
            <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 mt-5">
                <div class="card-columns">
                    <div class="card">
                    <a href="Publicacion.html"  target="_blank">
                        <!-- data-toggle="modal" data-target="#ParisModal" -->
                        <img src="../assets/images/paris.jpg" class="card-img-top" alt="Paris">
                    </a>
                    <div class="card-body">
                        <a href="Publicacion.html" target="_blank">
                            <h5 class="card-title text-dark">Paris, la capital del mundo</h5>
                        </a>
                        <p class="card-text">
                        Paris ha sido una de las ciudades mas importantes debido a la cantidad de personas en el mundo que 
                        la visitan constantemente, dado que...</p>
                        <button type="button" class="btn btn-outline-primary mt-2">Internacional</button>
                        <button type="button" class="btn btn-outline-secondary mt-2">Ingenieria</button>
                        <button type="button" class="btn btn-outline-success mt-2">Capitales</button>
                        <button type="button" class="btn btn-outline-danger mt-2">Reciente</button>
                        <button type="button" class="btn btn-outline-warning mt-2">Francia</button>
                        <button type="button" class="btn btn-outline-info mt-2">2020</button>
                        <button type="button" class="btn btn-outline-light mt-2">Construcciones</button>
                        <button type="button" class="btn btn-outline-dark mt-2">Lugares Importantes</button>
                    </div>
                    </div>
                    <div class="card p-3">
                      <blockquote class="blockquote mb-0 card-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer class="blockquote-footer">
                          <small class="text-muted">
                            Tadeus Lockmasrs de <cite title="Source Title">Hebreus Mark</cite>
                          </small>
                        </footer>
                      </blockquote>
                    </div>
                    <div class="card">
                    <a href="Publicacion.html"  target="_blank">
                        <img src="../assets/images/newyork.jpg" class="card-img-top" alt="NewYork">                        
                    </a>                      
                    <div class="card-body">
                        <a href="Publicacion.html" target="_blank">
                            <h5 class="card-title text-dark">El secreto de New York</h5>
                        </a>
                        <p class="card-text">
                            New York ha sido por mucho tiempo la ciudad mas cara para vivir. 
                            Pero lo que muchos no saben es que...
                        </p>
                        <p class="card-text"><small class="text-muted">Actualizado hace 3 minutos</small></p>
                    </div>
                    </div>
                    <div class="card p-3 text-right">
                      <blockquote class="blockquote mb-0">
                        <p>¿Quieres recibir notificaciones de nuevo contenido en tu correo?</p>
                        <footer class="blockquote-footer">
                          <small>
                            Registrate en <cite title="Source Title">Ingenio</cite>
                          </small>
                        </footer>
                      </blockquote>
                    </div>
                    <div class="card text-center">
                        <a data-toggle="modal" data-target="#DesarrolladorModal">
                            <div class="card-body">
                                <a href="Publicacion.html" target="_blank">
                                    <h5 class="card-title text-dark">¿Como ser buen desarrollador?</h5>
                                </a>
                                <p class="card-text">
                                    Existen 5 trucos para lograr ser un buen desarrollador...
                                </p>
                                <p class="card-text"><small class="text-muted">Actualizado hace 2 minutos</small></p>                            
                            </div>
                        </a>
                    </div>
                    <div class="card">
                        <img src="../assets/images/office.jpg" class="card-img-top" alt="...">                        
                    </div>
                    <div class="card p-3 text-right">
                      <blockquote class="blockquote mb-0">
                        <p>
                            Sigue a los mejores autores de tus categorias favoritas.
                        </p>
                        <footer class="blockquote-footer">
                          <small class="text-muted">
                            Registrate en <cite title="Source Title">Ingenio</cite>
                          </small>
                        </footer>
                      </blockquote>
                    </div>
                    <div class="card">
                        <a data-toggle="modal" data-target="#TrabajoRemotoModal">
                            <div class="card-body">
                                <h5 class="card-title">Trabajo Remoto</h5>
                                <p class="card-text">
                                    La mejor forma de trabajar en 2020, es de forma remota. Y hay formas muy faciles de hacerlo.
                                </p>
                                <p class="card-text"><small class="text-muted">Actualizad el mes pasado</small></p>
                            </div>
                        </a>
                    </div>
                </div>
                                    
<!------------------------------------------------- Modals ------------------------------------------------------------------>
                <!-------------------------------- Modal Paris -------------------------------->
                <div class="modal fade" id="ParisModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                            <i>
                                Paris, la capital del mundo<br/>
                                Autor: Juan Perez
                            </i>
                        </h5>                        
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div class="modal-body">
                        Paris ha sido una de las ciudades mas importantes debido a la cantidad de personas en el mundo que 
                        la visitan constantemente, dado que...
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Ver mas</button>
                        <button type="button" class="btn btn-primary">Ir al sitio</button>
                        </div>
                    </div>
                    </div>
                </div>
                <!-------------------------------------------------------------------------------->
                <!-------------------------------- Modal New York -------------------------------->
                <div class="modal fade" id="NewYorkModal" tabindex="-1" role="dialog" aria-labelledby="NewYorkModalModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h5 class="modal-title" id="NewYorkModalLabel">
                            <i>
                                El secreto de New York<br/>
                                Autor: Ana Martinez
                            </i>
                        </h5>                        
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div class="modal-body">
                            New York ha sido por mucho tiempo la ciudad mas cara para vivir. 
                            Pero lo que muchos no saben es que...
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Ver mas</button>
                        <button type="button" class="btn btn-primary">Ir al sitio</button>
                        </div>
                    </div>
                    </div>
                </div>
                <!-------------------------------------------------------------------------------->
                <!-------------------------------- Modal Buen Desarrollador -------------------------------->
                <div class="modal fade" id="DesarrolladorModal" tabindex="-1" role="dialog" aria-labelledby="DesarrolladorModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h5 class="modal-title" id="DesarrolladorModalLabel">
                            <i>
                                ¿Como ser buen desarrollador?<br/>
                                Autor: Pepe Zapata
                            </i>                            
                        </h5>                        
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div class="modal-body">
                            Existen 5 trucos para lograr ser un buen desarrollador...
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Ver mas</button>
                        <button type="button" class="btn btn-primary">Ir al sitio</button>
                        </div>
                    </div>
                    </div>
                </div>
                <!-------------------------------------------------------------------------------------------------->
                <!-------------------------------- Modal Trabajo Remoto -------------------------------->
                <div class="modal fade" id="TrabajoRemotoModal" tabindex="-1" role="dialog" aria-labelledby="TrabajoRemotoModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h5 class="modal-title" id="TrabajoRemotoModalLabel">
                            <i>
                                Trabajo Remoto<br/>
                                Autor: Juana Cuevas
                            </i>  
                        </h5>                        
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div class="modal-body">
                            La mejor forma de trabajar en 2020, es de forma remota. Y hay formas muy faciles de hacerlo.
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Ver mas</button>
                        <button type="button" class="btn btn-primary">Ir al sitio</button>
                        </div>
                    </div>
                    </div>
                </div>
                <!-------------------------------------------------------------------------------------------------->
                
            </div>
<!--------------------------------------------------------------------------------------------------------------------------->
<!----------------------------------------------- Cuadro Derecho: Vacio ----------------------------------------------------->
            <div class="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                <a></a>
            </div>
<!--------------------------------------------------------------------------------------------------------------------------->
        </div>
        <hr width="70%"/>
        <div class="row">
            <div class="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                <a></a>
            </div>
<!--------------------------------------------------------------------------------------------------------------------------->
<!---------------------------------------------- Cuadro Central: Publicaciones ---------------------------------------------->
            <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 mt-5">
                <div class="row row-cols-1 row-cols-md-3">
                    <div class="col mb-3">
                      <div class="card h-100">
                        <img src="../assets/images/Perfil1.jpg" class="card-img-top" alt="Perfil1">
                        <div class="card-body">
                          <h5 class="card-title">Autor 1</h5>
                          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          <a href="http://www.freepik.com" target="_blank">Designed by Freepik</a>
                        </div>
                      </div>
                    </div>
                    <div class="col mb-3">
                      <div class="card h-100">
                        <img src="../assets/images/Perfil2.jpg" class="card-img-top" alt="Perfil2">
                        <div class="card-body">
                          <h5 class="card-title">Autor 2</h5>
                          <p class="card-text">This is a short card.</p>
                          <a href="http://www.freepik.com" target="_blank">Designed by Freepik</a>
                        </div>
                      </div>
                    </div>
                    <div class="col mb-3">
                      <div class="card h-100">
                        <img src="../assets/images/Perfil3.jpg" class="card-img-top" alt="Perfil3">
                        <div class="card-body">
                          <h5 class="card-title">Autor 3</h5>
                          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                          <a href="http://www.freepik.com" target="_blank">Designed by Freepik</a>
                        </div>
                      </div>
                    </div>
            </div>
<!--------------------------------------------------------------------------------------------------------------------------->
<!----------------------------------------------- Cuadro Derecho: Vacio ----------------------------------------------------->
            <div class="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                <a></a>
            </div>
<!--------------------------------------------------------------------------------------------------------------------------->
        </div>
        </div>
        <hr width="70%"/>
<!--------------------------------------- Barra de navegacion inferior ------------------------------------------------------>
        <div class="row">            
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <nav class="navbar navbar-expand-sm bg-dark navbar-dark d-flex justify-content-between">		
                    <a class="navbar-brand">
                    <h1><i>Ingenio</i></h1>    <!-- <img src="images/ingenio.png" alt="Ingenio" style="width:200px;"> -->
                    </a>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link">Sobre Nosotros</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link">Contactenos</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
<!--------------------------------------------------------------------------------------------------------------------------->
        
    </div>
</template>

<script>
import axios from 'axios';

const path = "/user";

export default {
  name: 'Ingenio.vue',
  components: {},
  data: function (){
    return {
    }
    },
    methods:{
        
    },
    computed:{}
}
</script>
