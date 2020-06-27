<template>
  <div class="divlogin jumbotron">
    <div class="row container-fluid p-3">
			<div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 offset-1 shadow p-3 bg-white">
				<div class="row">
					<div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 offset-1">
						<br/>
						<img src="../assets/images/Perfil1.jpg" class="card-img-top" alt="...">
					</div>
					<div class="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 text-center">
						<ul class="list-group list-group-flush">
							<li class="list-group-item">
								<h5 class="card-title"> {{userData.firstName}} {{userData.lastName}} </h5>
								Role<br/>
								<em>{{this.Role}}</em>
								<br/>
								E-mail<br/>
								<em>{{userData.email1}}</em>
								<p class="card-text">
								Description <br/>
								<em>{{userData.description}}</em>
								<b-button class="mt-2 btn btn-sm" block variant="outline-dark" @click="Follow(userData.role)" v-if="userData.isFollowing == 0">Follow</b-button>
                <b-button class="mt-2 btn btn-sm" block variant="outline-dark" @click="stopFollow(userData.role)" v-if="userData.isFollowing == 1">Stop Follow</b-button>
								</p>
							</li>
						</ul>
					</div>
				</div>
				<br/>
				<hr class="my-4">
				<div class="row">
					<div class="col-3">
						<div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
							<a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Following</a>
							<a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Follow me</a>
							<a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Categories</a>
							<a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Authors</a>
							<a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-publications" role="tab" aria-controls="v-pills-publications" aria-selected="false" v-if="userData.role == 1">Publications</a>
						</div>
					</div>
					<div class="col-9">
						<div class="tab-content" id="v-pills-tabContent">
							<div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" style="height: 500px; max-width: 700px; overflow-y: scroll; overflow-x: hidden;"><Followed :id="this.id" :mine="false"/></div>
							<div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" style="height: 500px; max-width: 700px; overflow-y: scroll; overflow-x: hidden;"><Followers :id="this.id" :mine="false"/></div>
							<div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" style="height: 500px; max-width: 700px; overflow-y: scroll; overflow-x: hidden;"><MyCategories :id="this.id" :mine="false"/></div>
							<div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" style="height: 500px; max-width: 700px; overflow-y: scroll; overflow-x: hidden;"><MyAuthors :id="this.id" :mine="false"/></div>
							<div class="tab-pane fade" id="v-pills-publications" role="tabpanel" aria-labelledby="v-pills-publications-tab" style="height: 500px; max-width: 700px; overflow-y: scroll; overflow-x: hidden;" v-if="userData.role == 1"><MyPublications :id="this.id" :mine="false" v-if="userData.role == 1"/></div>
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
import AllAuthorRequest from '../components/AllAuthorRequest.vue';
import Authors from '../components/Authors.vue';
import MyAuthors from '../components/MyAuthors.vue';
import Users from '../components/Users.vue';
import Followed from '../components/Followed.vue';
import Followers from '../components/Followers.vue';
import MyCategories from '../components/MyCategories.vue';
import SavedPublications from '../components/SavedPublications.vue';
import MyPublications from '../components/MyPublications.vue';

const path = "/user";

export default {
  name: 'Ingenio',
  components:{
		AllAuthorRequest,
		Users,
		Authors,
		MyAuthors,
		Followed,
		Followers,
		MyCategories,
		SavedPublications,
		MyPublications
  },
  data: function (){
    return {
			id: this.$route.params.id,
			userData: {},
			Role:''
    }
  },
  created: function(){
		axios
    .get(this.$store.state.backURL + '/user/get-personal-data/' + this.id)
    .then( response => {
			this.userData = response.data;
			if(response.data.role == 0){
				this.Role = "User"
			}else if(response.data.role == 1){
				this.Role = "Author"
			}else{
				this.Role = "This role doesn't exist"
			}
    })
    .catch( error => {
      if( error.response.status === 401){
        alert(error.response.data.message);
        this.Role = localStorage.setItem('Role',3);
      }else{
        this.Role = localStorage.setItem('Role',3);
        alert("Database Problem.");
      }
      this.$router.push('/');
      this.$router.go(0);
    });
    this.Role = localStorage.getItem('Role');
  },
  methods:{
		stopFollow(Role){
      if(Role == 0){
        axios
        .post( this.$store.state.backURL + '/user/stop-following',
        {
          "userId": this.id
        }
        )
        .then( response => {
          this.sendMessage("Correct", "success", response.data.message);
          this.$router.go(0);
        })
        .catch( error => {
          this.sendMessage("Error", "danger", error.response.data.message);
        });
      }else if(Role == 1){
        axios
        .post( this.$store.state.backURL + '/user/stop-following',
        {
          "authorId": this.id
        }
        )
        .then( response => {
          this.sendMessage("Correct", "success", response.data.message);
          this.$router.go(0);
        })
        .catch( error => {
          this.sendMessage("Error", "danger", error.response.data.message);
          this.$router.go(0);
        });
      }else{
        alert("Error! Ese rol no existe");
      }
    },
    Follow( Role){
      if(Role == 0){
        axios
        .post( this.$store.state.backURL + '/user/start-following',
        {
          "userId": this.id
        }
        )
        .then( response => {
          this.sendMessage("Correct", "success", response.data.message);
          this.$router.go(0);
        })
        .catch( error => {
          this.sendMessage("Error", "danger", error.response.data.message);
          this.$router.go(0);
        });
      }else if(Role == 1){
        axios
        .post( this.$store.state.backURL + '/user/start-following',
        {
          "authorId": this.id
        }
        )
        .then( response => {
          this.sendMessage("Correct", "success", response.data.message);
          this.$router.go(0);
        })
        .catch( error => {
          this.sendMessage("Error", "danger", error.response.data.message);
          this.$router.go(0);
        });
      }else{
        alert("Error! Ese rol no existe");
      }
    }
  },
  sendMessage(title, variant, message){
      this.$bvToast.toast(message, {
        title: title,
        variant: variant,
        solid: true
      })
    }
}
</script>

<style>
	a { color: #01403A; }
</style>
