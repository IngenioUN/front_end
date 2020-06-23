<template>
    <div class="divlogin">
        <div class="row">
          <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10" v-for="(item,index) of categories" :key="item.id">
            <div class="row no-gutters mb-3">
              <div class="col-md-4">
                <img src="../assets/images/Civil.jpg" class="card-img" alt="FotoPerfil">
              </div>
              <div class="col-md-7 text-left">
                <div class="card-body">
                  <h5 class="card-title">{{item.name}}</h5>
                  <small>{{item.description}}</small>
                  <br/>
                  <!-- <b-button class="mt-2 btn btn-sm" variant="outline-dark" @click=" subscribe(item._id); setSubscri(index,true)">Subscribe</b-button> -->
                  <b-button class="mt-2 btn btn-sm" variant="outline-dark" @click=" unsubscribe(item._id); setSubscri(index,false)">Unsubscribe</b-button>
                  <!-- unsubscribe(item._id); -->
                  <!-- {{getVal}} -->
                  <!-- {{suscri[index]}} -->
                  &nbsp;
                  <b-button class="mt-2 btn btn-sm" variant="outline-dark">Publications</b-button>
                </div>
              </div>
              <div class="col-md-1 text-right">
                <br/>
                <br/>
                <a data-toggle="modal" data-target="#NotificationsModal">
                  <b-button class="mt-2 btn btn-sm align-rigth" variant="outline-dark" @click="searchNotifications(item._id)" disabled>
                  <!-- <a href="#" class="badge badge-danger">9</a> -->
                  Notifications
                  </b-button>
                </a>
              </div>
            </div>
            <div class="modal fade" id="NotificationsModal" tabindex="-1" role="dialog" aria-labelledby="NotificationsLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
                <div class="modal-content">
                  <div class="modal-header bg-light">
                  <h1 class="modal-title" id="NotificationsModal"><em>Notifications</em></h1>
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
import Notifications from '../components/NotificationsCategory.vue';

export default {
  name: 'Followed.vue',
  components: {
    Notifications
  },
  data: function (){
    return {
      categories:{},
      notifications:{},
      isSubscribed: true,
      IdActual:'',
      suscri: [],
      id:''
    }
  },
  created: function(){
    axios
		.get( this.$store.state.backURL + '/user/get-user-categories/null')
		.then( response => {
			if( response.status !== 200 ){
        alert( response.data.message );
			}else{
        this.categories = response.data;
        for(let item in this.categories){
          this.suscri.push(true);
        }
			}
		})
		.catch( error => {
			alert( error.response.data.message );
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
        "notificationId": "5ef0a3887f10b612c3663a57"
      }
      ).then( response => {
        lert( response.data.message );
      })
      .catch( error => {
        alert( error.response.data.message );
      });
    },
    searchNotifications(id){
      axios
      .get( this.$store.state.backURL + '/notification/get-notifications/' + id
      ).then( response => {
          alert( response.data.message );
      })
      .catch( error => {
        alert( error.response.data.message );
      });
    },
    subscribe(CatId){
      axios
    .post( this.$store.state.backURL + '/user/start-following',
    {
      "categoryId": CatId
    })
		.then( response => {
      this.sendMessage("Correct", "success", response.data.message);
		})
		.catch( error => {
      this.sendMessage("Error", "danger", error.response.data.message);
		});
    },
    unsubscribe(CatId){
      axios
    .post( this.$store.state.backURL + '/user/stop-following',
    {
      "categoryId": CatId
    })
		.then( response => {
      this.sendMessage("Correct", "success", response.data.message);
      this.$router.go(0);
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
  computed:{
  }
}
</script>
