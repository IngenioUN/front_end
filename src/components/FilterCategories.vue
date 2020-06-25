<template>
    <div class="divlogin">
        <div class="row">
          <div class="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 mt-5">
            <div class="row">
              <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4" v-for="item of publica" :key="item.id">
                <div class="card">
                  <img src="../assets/images/paris.jpg" class="card-img-top" alt="Paris">
                  <div class="card-body">
                    <router-link :to="{ name: 'publication', params: { id: item._id }}" target="_blank"><h5>{{item.title}}</h5></router-link>
                    <p class="card-text">
                    {{item.abstract}}
                    </p>
                    <div v-for="item2 of item.listCategories" :key="item2.id" class="text-center">
                      <span class="badge badge-pill badge-primary btn-lg">{{item2}}</span>
                    </div>
                    <b-button class="mt-3 mb-1" block variant="outline-primary" onClick="this.disabled=true" @click="savePublication(item._id)">Save Publication</b-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 mt-5">
            <b-button class="mt-2" block variant="outline-primary" @click="subscribeCategory(idCat)">Suscribe to {{nameCat}}
              <br/>
              </b-button>
            <br/>
            <div class="border" style="height: 300px; max-width: 600px; overflow-y: scroll; overflow-x: hidden;">
              <p class="text-muted text-center">
                Authors you may know...
              </p>
              <RandomAuthors :authors="authors" :logged="logged"/>
            </div>
            <div class="border mt-3" style="height: 300px; max-width: 600px; overflow-y: scroll; overflow-x: hidden;">
              <p class="text-muted text-center">
                Users you may know...
              </p>
              <RandomUsers :users="users" :logged="logged"/>
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
  methods:{
    savePublication(item) {
      axios
      .post(this.$store.state.backURL + "/user/add-save-publication", {
        "publicationId": item
      })
      .then(response => {
        console.log("success save publication");
      })
      .catch(error => {
        console.log(error.response.data.message)
      });
    },
    subscribeCategory(item) {
      axios
      .post(this.$store.state.backURL + "/user/start-following", {
        "categoryId": item
      })
      .then(response => {
        alert(response.data.message);
      })
      .catch(error => {
        alert(error.response.data.message);
      });
    }
   },
  computed:{},
  props:['publica', 'idCat', 'nameCat', 'users', 'authors', 'logged']
}
</script>
