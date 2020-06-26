<template>
	<div class="divlogin jumbotron">
		<div class="row container-fuild">
			<div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" >
				<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
					<ol class="carousel-indicators">
						<li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
						<li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
						<li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
					</ol>
					<div class="carousel-inner">
						<div class="carousel-item active" >
							<img src="../assets/images/arches.jpg" class="d-block w-100" alt="Arches" style="height: 200px; opacity: 0.2">
							<div class="carousel-caption d-none d-md-block text-dark">
								<h1>Ingenio</h1>
								<p>A web site where you could...</p>
							</div>
						</div>
						<div class="carousel-item">
							<img src="../assets/images/building.jpg" class="d-block w-100" alt="building" style="height: 200px; opacity: 0.2">
							<div class="carousel-caption d-none d-md-block text-dark">
								<h1>Ingenio</h1>
								<p>..find every notice, information or investigation ...</p>
							</div>
						</div>
						<div class="carousel-item">
							<img src="../assets/images/car.jpg" class="d-block w-100" alt="car" style="height: 200px; opacity: 0.2">
							<div class="carousel-caption d-none d-md-block text-dark">
								<h1>Ingenio</h1>
								<p>... of your favorites topics.</p>
							</div>
						</div>
					</div>
					<a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="sr-only">Previous</span>
					</a>
					<a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="sr-only">Next</span>
					</a>
				</div>
				<nav class="nav nav-tabs nav-justified shadow p-3 mb-5 bg-light rounded sticky-top">
					<a class="nav-item nav-link active" id="all-tab" data-toggle="tab" href="#all" role="tab" aria-controls="all" aria-selected="true" @click="getAllPublications()">
						All Categories
						<span class="badge badge-dark">{{numAll}}</span>
					</a>
					<a class="nav-item nav-link" id="filter-tab" data-toggle="tab" href="#forum" role="tab" aria-controls="filter" aria-selected="false" v-for="item of categories" :key="item.id" @click="cambiarId(item._id); setIdName(item._id,item.name, item.isFollowing == 0)">
						{{item.name}}
						<span class="badge badge-dark">{{item.publications}}</span>
					</a>
				</nav>
				<div class="tab-content" id="myTabContent">
					<div class="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
						<AllCategories :Allpublica="publicaciones"/>
					</div>
					<div class="tab-pane fade" id="forum" role="tabpanel" aria-labelledby="filter-tab">
						<FilterCategories :publica="publicaciones" :idCat="id" :nameCat="nameCat" :users="users" :authors="authors" :logged="logged" :isLoggedCat="isLoggedCategory"/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
axios.defaults.withCredentials = true;
import AllCategories from '../components/AllCategories.vue';
import FilterCategories from '../components/FilterCategories.vue';

export default {
  name: 'Ingenio.vue',
  components: {
    AllCategories,
		FilterCategories
  },
  data: function (){
    return {
			categories:{},
			publicaciones:{},
			id:'',
			nameCat: '',
			numAll:0,
			authors:{},
			users:{},
			logged: false,
			isLoggedCategory: true
    }
  },
  created: function(){
    axios
		.get( this.$store.state.backURL + '/category/get-all-categories',)
		.then( response => {
			if( response.status !== 201 ){
				alert( "Error en la autenticación" );
			}else{
				this.categories = response.data;
			}
		})
		.catch( error => {
			if( error.response.status === 400 ){
				alert( "Credenciales incorrectas" );
			}else{
				alert( "¡Parece que hubo un error de comunicación con el servidor!" );
			}
		});
		this.getAllPublications();
		//Is Logged?
		axios
		.get( this.$store.state.backURL + '/user/get-personal-data/null',)
		.then( response => {
			if( response.status !== 200 ){
				alert( "Error en la autenticación" );
			}else{
				this.logged = true;
			}
		})
		.catch( error => {
			this.logged = false;
		});
  },
  methods:{
		cambiarId(categoryId){
			this.publicaciones = {};
      axios
      .get( this.$store.state.backURL + '/publication/get-all-publications/' + categoryId)
      .then( response => {
        if( response.status !== 200 ){
          alert( "Error en la autenticación" );
        }else{
					this.publicaciones = response.data;
					for (let item in this.publicaciones){
						for (let item2 in this.publicaciones[item].listCategories){
							for (let cat in this.categories){
								if(this.categories[cat]._id == this.publicaciones[item].listCategories[item2]){
									this.publicaciones[item].listCategories[item2] = this.categories[cat].name;
								}
							}
						}
					}
        }
      })
      .catch( error => {
        if( error.response.status === 400 ){
          alert( "Credenciales incorrectas" );
        }else{
          alert( "¡Parece que hubo un error de comunicación con el servidor!" );
        }
			});
			this.users = {};
			//Users
			axios
			.get(this.$store.state.backURL + "/user/get-random-users/0/" + categoryId)
			.then(response => {
				this.users = response.data;
			})
			.catch(error => {
				console.log(error.response.data);
			});
			//Authors
			this.authors = {};
			axios
			.get(this.$store.state.backURL + "/user/get-random-users/1/" + categoryId)
			.then(response => {
				this.authors = response.data;
			})
			.catch(error => {
				console.log(error.response.data);
			});
		},
		getAllPublications(){
			this.publicaciones = {};
			const value2 = "null";
      axios
      .get( this.$store.state.backURL + '/publication/get-all-publications/' + value2 )
      .then( response => {
        if( response.status !== 200 ){
          alert( "Error en la autenticación" );
        }else{
					this.publicaciones = response.data;
					this.numAll = this.publicaciones.length;
					for (let item in this.publicaciones){
						for (let item2 in this.publicaciones[item].listCategories){
							for (let cat in this.categories){
								if(this.categories[cat]._id == this.publicaciones[item].listCategories[item2]){
									this.publicaciones[item].listCategories[item2] = this.categories[cat].name;
								}
							}
						}
					}
        }
      })
      .catch( error => {
        if( error.response.status === 400 ){
          alert( "Credenciales incorrectas" );
        }else{
          alert( "¡Parece que hubo un error de comunicación con el servidor!" );
        }
      });
		},
		setIdName(idnuevo,namenuevo,islog){
			this.id = idnuevo;
			this.nameCat = namenuevo;
			this.isLoggedCategory = islog;
		}
	},
  computed:{}
}
</script>
