<template>
    <div class="divlogin">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-5">
            <div class="row">
              <div class=" container col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3" v-for="item of Allpublica" :key="item.id">
                <div class="card">
                  <img src="../assets/images/paris.jpg" class="card-img-top" alt="Paris">
                  <div class="card-body">
                    <router-link :to="{ name: 'publication', params: { id: item._id }}"><h5>{{item.title}}</h5></router-link>
                    <p class="card-text">
                    {{item.abstract}}
                    </p>
                    <div v-for="item2 of item.listCategories" :key="item2.id" class="text-center">
                      <span class="badge badge-pill badge-primary badge-lg">{{item2}}</span>
                    </div>
                    <b-button v-if="Role!=3"  class="mt-3 mb-1" block variant="outline-primary" onClick="this.disabled=true" @click="savePublication(item._id)">Save Publication</b-button>
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
import Publication from '../views/Publication.vue';

export default {
  name: 'AllCategories.vue',
  components: {
    Publication
  },
  data: function (){
    return {
      Role: 3,
      hola:'Hola'
    }
  },
  created: function(){
    this.Role = parseInt(localStorage.getItem('Role'));
  },
  methods:{
    savePublication(item) {
      axios
      .post(this.$store.state.backURL + "/user/add-save-publication", {
        "publicationId": item
      })
      .then(response => {
        this.sendMessage("Correct", "success", response.data.message);
      })
      .catch(error => {
        this.sendMessage("Error", "danger", error.response.data.message);
      });
    },
    sendMessage(title, variant, message){
      this.$bvToast.toast(message, {
        title: title,
        variant: variant,
        solid: true
      })
    }
  },
  computed:{},
  props:['Allpublica']
}
</script>
