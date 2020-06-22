<template>
    <div class="divlogin">
      {{numberId}}
        <div class="row">
          <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10" v-for="item of numberId.response" :key="item.id">
            <div class="row no-gutters mb-3 border">
              <div class="col-md-10 text-left">
                <div class="card-body">
                  <h5 class="card-title">{{item.title}}</h5>
                  Pepito Perez
                  {{item._id}}
                </div>
              </div>
              <div class="col-md-2">
                <br/>
                <b-button class="mt-1 btn btn-sm" block variant="outline-dark">Systems</b-button>
                <b-button class="mt-1 btn btn-sm" block variant="outline-danger" @click="deleteNotif()">Delete</b-button>
                <br/>
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
  name: 'Notifications.vue',
  components: {},
  data: function (){
    return {
      notifications:{}
    }
  },
  created: function(){

  },
  methods:{
    deleteNotif(){
      axios
      .post( this.$store.state.backURL + '/notification/remove-notification',
      {
        "notificationId": "5ef07d22a6651d498a52d855",
	      "publicationId": "5ef07d30a6651d498a52d856"
      }
      ).then( response => {
        if( response.status !== 201 ){
          alert( response.data.message );
        }else{
          alert( response.data.message );
        }
      })
      .catch( error => {
        if( error.response.status === 400 ){
          alert( error.response.data.message );
        }else{
          alert( error.response.data.message );
        }
      });
    },
  },
  computed:{},
  props:['numberId']
}
</script>
