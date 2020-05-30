<template>    
  <div class="divlogin">        
    <div class="row">
      <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 mt-5 offset-1">
        <div class="jumbotron">
          <div class="row">
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 mt-5 text-center">              
              <img src="../assets/images/Perfil1.jpg" class="border border-dark" style="height: 200px; opacity: 0.8; border-radius: 0px 40px 0px 40px;">              
              <br/>
              {{AuthorName}} {{AuthorLastName}}
              <br/>
              <div  class="mt-3" v-for="(item) in Categories" :key="item.id">
                <div role="alert" class="alert alert-dark">
                  <div class="d-flex justify-content-between align-items-center">
                    <div> {{item}}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 mt-5 offset-1">
              <h1 class="display-4 text-center">{{Title}}</h1>
              <p class="lead"><b>Abstract: </b></p>
              <br/>
              <p class="lead text-center">{{Abstract}}</p>
              <hr class="my-4">
              <p class="text-center">{{Text}}</p>
              <a class="btn btn-secondary btn-lg" href="#" role="button">Download PDF</a>
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
      Title: 'Paris, la capital del mundo',
      Abstract: 'En el mundo actual... bla bla bla',
      KeyWords: ['Francia','Capitales del Mundo'],
      Text: 'Paris ha sido una de las ciudades mas importantes debido a la cantidad de personas en el mundo que la visitan constantemente, dado que...',
      AuthorName: 'Pepe',
      AuthorLastName: 'Perez',
      Categories: ['Systems', 'Chemistry']
    }
    },
    methods:{
        
    },
    computed:{}
}
</script>
