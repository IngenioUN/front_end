<template>
  <div class="divlogin jumbotron">
    <div class="row container-fluid p-3">
			<div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 offset-1 shadow p-3 bg-white">
				<div class="row">
					<div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 offset-1">
						<img src="../assets/images/Perfil1.jpg" class="card-img-top" alt="...">
					</div>
					<div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
						<ul class="list-group list-group-flush">
							<li class="list-group-item">
								<h5 class="card-title"> {{userData.firstName}} {{userData.lastName}} </h5>
								E-mail<br/>
								{{userData.email1}}
								<p class="card-text">
								<br/>
								Description <br/>
								{{userData.description}}
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
						</div>
					</div>
					<div class="col-9">
						<div class="tab-content" id="v-pills-tabContent">
							<div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"><Followed :id="this.id"/></div>
							<div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"><Followers :id="this.id"/></div>
							<div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab"><MyCategories :id="this.id"/></div>
							<div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab"><MyAuthors :id="this.id"/></div>
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
			userData: {}
    }
  },
  created: function(){
		axios
    .get(this.$store.state.backURL + '/user/get-personal-data/' + this.id)
    .then( response => {
      this.userData = response.data;
    })
    .catch( error => {
      if( error.response.status === 401){
        alert(error.response.data.message);
        this.Role = localStorage.setItem('Role',3);
      }else{
        this.Role = localStorage.setItem('Role',3);
        alert("Database Problem.");
      }
      this.$router.push('principal');
      this.$router.go(0);
    });
    this.Role = localStorage.getItem('Role');
  },
  methods:{}
}
</script>

<style>
	a { color: #01403A; }
</style>
