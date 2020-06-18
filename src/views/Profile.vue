<template>
  <div class="divlogin">
    <div class="row container-fluid jumbotron">
			<div class="col-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 offset-1 shadow p-3">
				<div class="card text-center" v-if="Role!=2">
					<div class="card-header ">
						<ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
							<li class="nav-item">
								<a class="nav-link active" id="followed-tab textcolor" data-toggle="tab" href="#siguiendo1" role="tab" aria-controls="siguiendo1" aria-selected="true">
									Following
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" id="mesiguen-tab" data-toggle="tab" href="#mesiguen" role="tab" aria-controls="mesiguen" aria-selected="false">
									Follow me
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" id="categorias-tab" data-toggle="tab" href="#categorias" role="tab" aria-controls="categorias" aria-selected="false">
									Categories
									<a href="#" class="badge badge-dark">9</a>
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" id="articulosguardados-tab" data-toggle="tab" href="#articulosguardados" role="tab" aria-controls="articulosguardados" aria-selected="false">
									Saved Publications
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" id="publicaciones-tab" data-toggle="tab" href="#publicaciones" role="tab" aria-controls="publicaciones" aria-selected="false" v-if="Role==1">
									My Publications
								</a>
							</li>
						</ul>
					</div>
					<div class="card-body tab-content">
						<div class="tab-pane fade show active" id="siguiendo1" role="tabpanel" aria-labelledby="profile-tab">
							<Followed/>
						</div>
						<div class="tab-pane fade" id="mesiguen" role="tabpanel" aria-labelledby="profile-tab">
							<Followers/>
						</div>
						<div class="tab-pane fade" id="categorias" role="tabpanel" aria-labelledby="profile-tab">
							<MyCategories/>
						</div>
						<div class="tab-pane fade" id="articulosguardados" role="tabpanel" aria-labelledby="profile-tab">
							<SavedPublications/>
						</div>
						<div class="tab-pane fade" id="publicaciones" role="tabpanel" aria-labelledby="profile-tab" v-if="Role==1">
							<MyPublications/>
						</div>
					</div>
					</div>
					<div class="card text-center" v-if="Role==2">
						<div class="card-header">
							<ul class="nav nav-tabs card-header-tabs">
								<li class="nav-item">
									<a class="nav-link" id="allAuthorRequest-tab" data-toggle="tab" href="#allAuthorRequest" role="tab" aria-controls="allAuthorRequest" aria-selected="false">Solicitudes Autoria</a>
								</li>
							</ul>
						</div>
						<div class="card-body tab-content">
							<div class="tab-pane fade show active" id="usuarios" role="tabpanel" aria-labelledby="usuarios-tab">
								<Usuarios/>
							</div>
							<div class="tab-pane fade" id="autores" role="tabpanel" aria-labelledby="autores-tab">
								<Autores/>
							</div>
							<div class="tab-pane fade" id="allAuthorRequest" role="tabpanel" aria-labelledby="allAuthorRequest-tab">
								<AllAuthorRequest/>
							</div>
						</div>
					</div>
			</div>
			<div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
				<PersonalInfo/>
			</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
axios.defaults.withCredentials = true;
import AllAuthorRequest from '../components/AllAuthorRequest.vue';
import Followed from '../components/Followed.vue';
import Followers from '../components/Followers.vue';
import PersonalInfo from '../components/PersonalInfo.vue';
import MyCategories from '../components/MyCategories.vue';
import SavedPublications from '../components/SavedPublications.vue';
import MyPublications from '../components/MyPublications.vue';

const path = "/user";

export default {
  name: 'Ingenio',
  components:{
		AllAuthorRequest,
		Followed,
		Followers,
		PersonalInfo,
		MyCategories,
		SavedPublications,
		MyPublications
  },
  data: function (){
    return {
      Role:3,
      nameRole: ''
    }
  },
  created: function(){
    this.Role = parseInt(localStorage.getItem('Role'));
  },
  methods:{}
}
</script>

<style>
	a { color: #01403A; }
</style>
