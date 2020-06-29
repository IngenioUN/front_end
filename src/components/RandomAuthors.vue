<template>
    <div class="divlogin">
        <div class="row">
          <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 offset-1">
            <div class="card mb-3 mt-3" v-for="item in authors" :key="item.id">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="../assets/images/Perfil2.jpg" class="card-img" alt="FotoPerfil">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{{item.firstName}} {{item.lastName}}</h5>
                    <b-button class="mt-2 btn btn-sm" block variant="outline-dark" v-if="logged && item.isFollowing == 0" @click="Follow(item._id)">Subscribe</b-button>
                    <b-button class="mt-2 btn btn-sm" block variant="outline-dark" v-if="logged && item.isFollowing == 1" @click="stopFollow(item._id)">Unsubscribe</b-button>
                    <b-button class="mt-2 btn btn-sm" block variant="outline-dark" v-if="!logged" @click="notLogged()">Follow</b-button>
                    <router-link :to="{ name: 'userprofile', params: { id: item._id }}" v-if="logged">
                      <b-button class="mt-2 btn btn-sm" block variant="outline-dark">Profile</b-button>
                    </router-link>
                    <b-button class="mt-2 btn btn-sm" block variant="outline-dark" v-if="!logged" @click="notLogged()">Profile</b-button>
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


export default {
  name: 'RandomAuthors.vue',
  components: {

  },
  data: function (){
    return {
    }
  },
  created: function(){
  },
  methods:{
    notLogged(){
      this.sendMessage("Error", "danger", "You need to sign in");
    },
    stopFollow(idN){
      axios
      .post( this.$store.state.backURL + '/user/stop-following',
      {
        "authorId": idN
      }
      )
      .then( response => {
        this.sendMessage("Correct", "success", response.data.message);
      })
      .catch( error => {
        this.sendMessage("Error", "danger", error.response.data.message);
      });
    },
    Follow( idN){
      axios
      .post( this.$store.state.backURL + '/user/start-following',
      {
        "authorId": idN
      }
      )
      .then( response => {
        this.sendMessage("Correct", "success", response.data.message);
      })
      .catch( error => {
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
  props:['authors', 'logged']
}
</script>
