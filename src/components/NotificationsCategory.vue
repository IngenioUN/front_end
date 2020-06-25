<template>
    <div class="divlogin">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div class="text-center" v-if="numberId.length == 0">
            {{noNot}}
          </div>
          <div class="row no-gutters mb-3 border" v-for="item of numberId.listPublications" :key="item.id">
            <div class="col-md-10 text-left">
              <div class="card-body">
                <h5 class="card-title">{{item.title}}</h5>
                Category: {{item.authorId.firstName}} {{item.authorId.lastName}}
              </div>
            </div>
            <div class="col-md-2">
              <br/>
              <div v-for="item2 of item.listCategories" :key="item2.id">
                {{item2.name}}
              </div>
              <b-button class="mt-1 btn btn-sm" block variant="outline-danger" @click="deleteNotif(item._id,numberId._id)">Delete</b-button>
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
    deleteNotif(idPublic,idNot){
      axios
      .post( this.$store.state.backURL + '/notification/remove-notification',
      {
        "notificationId": idNot,
	      "publicationId": idPublic
      }
      ).then( response => {
        alert( response.data.message);
        this.$router.go(0);
      })
      .catch( error => {
        alert( error.response.data.message );
      });
    },
  },
  computed:{},
  props:['numberId']
}
</script>
