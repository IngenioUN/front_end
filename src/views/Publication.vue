<template>    
  <div class="divlogin">        
      <div class="row">
          <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 mt-5 offset-1">
            <div class="jumbotron">
              <div class="row">
                <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 mt-5">
                  <div class="card bg-dark text-white">
                    <img src="../assets/images/Otras.jpg" class="card-img" alt="..." style="height: 200px; opacity: 0.2"> 
                    <div class="card-img-overlay">
                      <h5 class="card-title">Otras Categorias</h5><br/>
                      <p class="card-text">En esta seccion puedes encontrar todo lo encargado de Otras Categorias</p>
                      <!-- <p class="card-text">Last updated 3 mins ago</p> -->
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 mt-5">
                  
                    <h1 class="display-4">Hello, world!</h1>
                    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr class="my-4">
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                  </div>
                
              </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

const path = "/user";

export default {
  name: 'Publication.vue',
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
