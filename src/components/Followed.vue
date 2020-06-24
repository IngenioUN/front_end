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
                  <b-button class="mt-2 btn btn-sm" block variant="outline-dark" @click="stopFollow(item._id)" v-if="mine">Stop Follow</b-button>
                  <b-button class="mt-2 btn btn-sm" block variant="outline-dark">Profile</b-button>
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
  name: 'Followed.vue',
  components: {},
  data: function (){
    return {
      items: {}
    }
  },
  created: function(){
    axios
		.get( this.$store.state.backURL + '/user/get-following/' + this.id)
		.then( response => {
			if( response.status !== 200 ){
        alert( response.data.message );
			}else{
        this.items = response.data;
			}
		})
		.catch( error => {
      alert( error.response.data.message );
		});
  },
  methods:{
    stopFollow(idN){
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
    }
  },
  computed:{},
  props:['id','mine']
}
</script>
