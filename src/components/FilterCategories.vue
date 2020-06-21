<template>
    <div class="divlogin">
        <div class="row">
          <div class="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 mt-5">
            <div class="row">
              <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4" v-for="item of publica" :key="item.id">
                <!-- <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" v-for="item of publica" :key="item.id"> -->
                <div class="card">
                  <img src="../assets/images/paris.jpg" class="card-img-top" alt="Paris">
                  <div class="card-body">
                    <router-link class="nav-link text-dark" to="/publication"><h5>{{item.title}}</h5></router-link>
                    <p class="card-text">
                    {{item.abstract}}
                    </p>
                    <div v-for="item2 of item.listCategories" :key="item2.id">
                      <b-button class="mt-2" block variant="outline-dark">{{item2}}</b-button>
                    </div>
                    <b-button class="mt-3 mb-1" block variant="outline-primary">Save Publication</b-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 mt-5">
            <b-button class="mt-2" block variant="outline-primary">Suscribe to {{nameCat}}
              <br/>
              <!-- Para probar que se esta trayendo correctmente el id de la categoria Id: {{idCat}} -->
              </b-button>
            <br/>
            <div class="border" style="height: 300px; max-width: 600px; overflow-y: scroll; overflow-x: hidden;">
              <p class="text-muted text-center">
                Authors you may know...
              </p>
              <RandomAuthors :IdCat="idCat"/>
            </div>
            <div class="border mt-3" style="height: 300px; max-width: 600px; overflow-y: scroll; overflow-x: hidden;">
              <p class="text-muted text-center">
                Users you may know...
              </p>
              <RandomUsers :IdCat="idCat"/>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
axios.defaults.withCredentials = true;
import RandomAuthors from '../components/RandomAuthors.vue';
import RandomUsers from '../components/RandomUsers.vue';

export default {
  name: 'FilterCategories.vue',
  components: {
    RandomAuthors,
    RandomUsers
  },
  data: function (){
    return {
    }
  },
  created: function(){
  },
  methods:{  },
  computed:{},
  props:['publica', 'idCat', 'nameCat']
}
</script>
