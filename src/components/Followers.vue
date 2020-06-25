<template>
    <div class="divlogin">
      <div class="row">
        <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" v-for="item of items" :key="item.id">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="../assets/images/Perfil2.jpg" class="card-img" alt="FotoPerfil">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{item.firstName}}{{item.lastName}}</h5>
                <b-button class="mt-2 btn btn-sm" block variant="outline-dark" @click="Follow(item._id,item.role)" v-if="item.isFollowing == 0 && mine">Follow</b-button>
                <b-button class="mt-2 btn btn-sm" block variant="outline-dark" @click="stopFollow(item._id,item.role)" v-if="item.isFollowing == 1 && mine">Stop Follow</b-button>
                <router-link :to="{ name: 'userprofile', params: { id: item._id }}">
                  <b-button class="mt-2 btn btn-sm" block variant="outline-dark">Profile</b-button>
                </router-link>
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
  name: 'Followers.vue',
  components: {},
  data: function (){
    return {
      items: {}
    }
  },
  created: function(){
    axios
		.get( this.$store.state.backURL + '/user/get-followers/' + this.id)
		.then( response => {
			if( response.status !== 200 ){
        alert( response.data.message );
			}else{
        this.items = response.data;
        //console.log(response.data);
			}
		})
		.catch( error => {
      this.$router.push('principal');
      this.$router.go(0);
		});
  },
  methods:{
    stopFollow(idN,Role){
      if(Role == 0){
        axios
        .post( this.$store.state.backURL + '/user/stop-following',
        {
          "userId": idN
        }
        )
        .then( response => {
          alert( response.data.message );
          this.$router.go(0);
        })
        .catch( error => {
          alert( error.response.data.message );
        });
      }else if(Role == 1){
        axios
        .post( this.$store.state.backURL + '/user/stop-following',
        {
          "authorId": idN
        }
        )
        .then( response => {
          alert( response.data.message );
          this.$router.go(0);
        })
        .catch( error => {
          alert( error.response.data.message );
        });
      }else{
        alert("Error! Ese rol no existe");
      }
    },
    Follow(idN, Role){
      if(Role == 0){
        axios
        .post( this.$store.state.backURL + '/user/start-following',
        {
          "userId": idN
        }
        )
        .then( response => {
          alert( response.data.message );
          this.$router.go(0);
        })
        .catch( error => {
          alert( error.response.data.message );
        });
      }else if(Role == 1){
        axios
        .post( this.$store.state.backURL + '/user/start-following',
        {
          "authorId": idN
        }
        )
        .then( response => {
          alert( response.data.message );
          this.$router.go(0);
        })
        .catch( error => {
          alert( error.response.data.message );
        });
      }else{
        alert("Error! Ese rol no existe");
      }
    }
  },
  computed:{},
  props:['id','mine']
}
</script>
