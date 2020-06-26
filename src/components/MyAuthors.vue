<template>
    <div class="divlogin">
        <div class="row">
          <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10" v-for="(item,index) of authors" :key="item.id">
            <div class="row no-gutters mb-3">
              <div class="col-md-4">
                <img src="../assets/images/Civil.jpg" class="card-img" alt="FotoPerfil">
              </div>
              <div class="col-md-7 text-left">
                <div class="card-body">
                  <h5 class="card-title">{{item.firstName}} {{item.lastName}}</h5>
                  <small> Publications: {{item.publications}} </small>
                  <br/>
                  <b-button class="mt-2 btn btn-sm" variant="outline-dark" @click=" Subscribe(item._id); setSubscri(index,false)" v-if="item.isSubscribed == 0 && mine">Subscribe</b-button>
                  <b-button class="mt-2 btn btn-sm" variant="outline-dark" @click=" unsubscribe(item._id); setSubscri(index,false)" v-if="item.isSubscribed == 1 && mine">Unsubscribe</b-button>
                  &nbsp;
                </div>
              </div>
              <div class="col-md-1">
                <br/>
                <a data-toggle="modal" data-target="#NotModal">
                  <div class="card-body">
                    <b-button class="mt-2 btn btn-sm align-rigth" variant="outline-dark" @click="searchNotifications(item._id)" v-if="mine">
                      Notifications
                    </b-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="modal fade" id="NotModal" tabindex="-1" role="dialog" aria-labelledby="NotModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
                <div class="modal-content">
                  <div class="modal-header bg-light">
                  <h1 class="modal-title" id="NotModal"><em>Notifications</em></h1>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  </div>
                  <div class="modal-body bg-light container">
                    <Notifications :numberId="notifications"/>
                  </div>
                  <div class="modal-footer bg-light">
                    <b-button class="mt-2 btn btn-sm align-rigth" block variant="outline-danger" @click="deleteAllNotif()">Delete All Notifications</b-button>
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
import Notifications from '../components/NotificationsAuthors.vue';

export default {
  name: 'Followed.vue',
  components: {
    Notifications
  },
  data: function (){
    return {
      authors:{},
      notifications:{},
      isSubscribed: true,
      IdActual:'',
      suscri: []
    }
  },
  created: function(){
    axios
		.get( this.$store.state.backURL + '/user/get-user-authors/' + this.id)
		.then( response => {
      this.authors = response.data;
      this.sendMessage("Correct", "success", response.data.message);
		})
		.catch( error => {
      this.sendMessage("Error", "danger", error.response.data.message);
		});
  },
  methods:{
    setSubscri(num, val){
      this.suscri[num] = val;
    },
    getSubscri(num, val){
      return this.suscri[num];
    },
    deleteAllNotif(){
      axios
      .post( this.$store.state.backURL + '/notification/remove-all-notifications',
      {
        "notificationId": this.notifications._id
      }
      ).then( response => {
        this.sendMessage("Correct", "success", response.data.message);
        this.$router.go(0);
      })
      .catch( error => {
        this.sendMessage("Error", "danger", error.response.data.message);
        this.$router.go(0);
      });
    },
    searchNotifications(idN){
      axios
      .get( this.$store.state.backURL + '/notification/get-notifications/' + idN + '/null'
      ).then( response => {
        this.sendMessage("Correct", "success", response.data.message);
        this.notifications = response.data;
      })
      .catch( error => {
        this.sendMessage("Error", "danger", error.response.data.message);
      });
    },
    Subscribe(CatId){
      axios
    .post( this.$store.state.backURL + '/user/start-following',
    {
      "authorId": CatId
    })
		.then( response => {
      this.sendMessage("Correct", "success", response.data.message);
      this.$router.go(0);
		})
		.catch( error => {
      this.sendMessage("Error", "danger", error.response.data.message);
      this.$router.go(0);
		});
    },
    unsubscribe(AutId){
      axios
    .post( this.$store.state.backURL + '/user/stop-following',
    {
      "authorId": AutId
    })
		.then( response => {
      this.sendMessage("Correct", "success", response.data.message);
      this.$router.go(0);
		})
		.catch( error => {
        this.sendMessage("Error", "danger", error.response.data.message);
        this.$router.go(0);
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
  props:['id','mine']
}
</script>
