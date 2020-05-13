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
        <hr width="70%"/>
        <div class="row">
          <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 mt-5 offset-1">
            <div class="row">
              <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3" v-for="item of publicaciones" :key="item.id">
                <div class="card">
                  <img src="../assets/images/paris.jpg" class="card-img-top" alt="Paris">
                  <div class="card-body">
                      <router-link class="nav-link text-dark" to="/Publicacion"><h5>{{item.titulo}}</h5></router-link>
                      <p class="card-text">
                      {{item.abstract}}
                      </p>
                      <button type="button" class="btn btn-outline-dark mt-2">{{item.tags}}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr width="70%"/>
        <div class="row">
          <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 mt-5 offset-1">
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
          </div>
        </div>
        <hr width="70%"/>
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
     publicaciones:{
        pub1:{
          id: 1,
          img: '',
          titulo: 'Paris, la capital del mundo',
          abstract: 'Paris ha sido una de las ciudades mas importantes debido a la cantidad de personas en el mundo que la visitan constantemente, dado que...',
          tags: {
            _1: 'Lugares Importantes'
          }
        },
        pub2:{
          id: 2,
          img: '',
          titulo: 'El secreto de New York',
          abstract: 'New York ha sido por mucho tiempo la ciudad mas cara para vivir. Pero lo que muchos no saben es que...',
          tags: {
            _1: 'USA'
          }
        },
        pub3:{
          id: 3,
          img: '',
          titulo: 'Trabajo Remoto',
          abstract: 'La mejor forma de trabajar en 2020, es de forma remota. Y hay formas muy faciles de hacerlo.',
          tags: {
            _1: 'Online'
          }
        },
        pub4:{
          id: 4,
          img: '',
          titulo: 'Prueba',
          abstract: 'Pruebita',
          tags: {
            _1: 'Ok'
          }
        },
        pub6:{
          id: 6,
          img: '',
          titulo: 'Prueba2',
          abstract: 'Pruebita2',
          tags: {
            _1: 'Ok2'
          }
        },
        pub7:{
          id: 7,
          img: '',
          titulo: 'Prueba2',
          abstract: 'Pruebita2',
          tags: {
            _1: 'Ok2'
          }
        },
        pub7:{
          id: 8,
          img: '',
          titulo: 'Prueba2',
          abstract: 'Pruebita2',
          tags: {
            _1: 'Ok2'
          }
        },
        pub9:{
          id: 9,
          img: '',
          titulo: 'Prueba2',
          abstract: 'Pruebita2',
          tags: {
            _1: 'Ok2'
          }
        }
      } 
    }
  },  
  methods:{},
  computed:{}
}
</script>
