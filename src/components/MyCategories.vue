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
                  <small>{{item.description}}</small><br/>
                  <small> Publications: {{item.publications}} </small>
                  <br/>
                  <b-button class="mt-2 btn btn-sm" variant="outline-dark" @click=" unsubscribe(item._id); setSubscri(index,false)" v-if="mine">Unsubscribe</b-button>
                  &nbsp;
                </div>
              </div>
              <div class="col-md-1">
                <br/>
                <a data-toggle="modal" data-target="#CategoriesNotifications">
                  <div class="card-body">
                    <b-button class="mt-2 btn btn-sm align-rigth" variant="outline-dark" @click="searchNotifications(item._id)" v-if="mine">
                      Notifications
                    </b-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="modal fade" id="CategoriesNotifications" tabindex="-1" role="dialog" aria-labelledby="CategoriesNotificationsLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
                <div class="modal-content">
                  <div class="modal-header bg-light">
                  <h1 class="modal-title" id="CategoriesNotifications"><em>Notifications</em></h1>
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
      suscri: []
    }
  },
  created: function(){
    axios
		.get( this.$store.state.backURL + '/user/get-user-categories/' + this.id)
		.then( response => {
			if( response.status !== 200 ){
        this.$router.push('/');
        this.$router.go(0);
			}else{
        this.categories = response.data;
        for(let item in this.categories){
          this.suscri.push(true);
        }
			}
		})
		.catch( error => {
			this.$router.push('/');
      this.$router.go(0);
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
      .get( this.$store.state.backURL + '/notification/get-notifications/null/' + idN
      ).then( response => {
        if( response.status !== 200 ){
          this.sendMessage("Error", "danger", response.data.message);
        }else{
          this.notifications = response.data;
        }
      })
      .catch( error => {
        this.sendMessage("Error", "danger", error.response.data.message);
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
      this.$router.push('/');
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
  computed:{},
  props:['id','mine']
}
</script>
