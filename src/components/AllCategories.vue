<template>
    <div class="divlogin">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-5">
            <div class="row">
              <div class=" container col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3" v-for="item of Allpublica" :key="item.id">
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
                    <b-button class="mt-3 mb-1" block variant="outline-primary" onClick="this.disabled=true" @click="savePublication(item._id)">Save Publication</b-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
axios.defaults.withCredentials = true;

const path = "/user";

export default {
  name: 'AllCategories.vue',
  components: {},
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
        "savedPublications": item
      })
      .then(response => {
        console.log("success save publication");
      })
      .catch(error => {
        if (error.response.status === 400) {
          console.log(item);
        } else {
          console.log(
            "¡Parece que hubo un error de comunicación con el servidor!"
          );
        }
      });
    }
  },
  computed:{},
  props:['Allpublica']
}
</script>
