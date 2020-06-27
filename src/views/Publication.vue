<template>
  <div class="divlogin jumbotron">
    <div class="row">
      <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 offset-1 shadow p-3 mb-5 rounded">
        <div class="jumbotron">
          <div class="row">
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-center">
              <img src="../assets/images/PerfilMujer.jpg" class="w-100 p-3 border" alt="Image not found">
              <br/>
              <br/>
              <p class="lead text-center font-italic"><strong><p class="text-center">{{this.author.firstName}} {{this.author.lastName}}</p></strong></p>
              <div class="list-group">
                <a class="list-group-item list-group-item-action" v-for="item in categories" :key="item.id">
                  {{item.name}}
                </a>
              </div>
            </div>
            <div class="col-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 offset-1">
              <h1 class="display-4 text-center">  {{publication.title}}</h1>
              <hr class="my-4">
              <p class="lead text-center font-italic"><strong>Abstract</strong></p>
              <p class="lead text-justify font-italic">{{publication.abstract}}</p>
              <hr class="my-4">
              <p class="text-justify">{{publication.text}}</p>
              <br/>
              <hr class="my-4">
              <p class="lead text-center font-italic"><strong>Key Words</strong></p>
              <nav aria-label="breadcrumb" >
                <ol class="breadcrumb" >
                  <li class="breadcrumb-item active" aria-current="page" v-for="(item2) in publication.keyWords" :key="item2.id">{{item2}}</li>
                </ol>
              </nav>
              <hr class="my-4">
              <br/>
              <button type="button" class="btn btn-outline-dark" data-toggle="popover" title="Comming Soon" data-content="Comming Soon">
                <b-icon class="text-black" icon="download" font-scale="2"></b-icon>
              </button>
              <button type="button" class="btn btn-outline-dark" data-toggle="popover" title="Comming Soon" data-content="Comming Soon">
                <b-icon icon="box-arrow-up-right" font-scale="2"></b-icon>
              </button>
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

export default {
  name: 'Publication.vue',
  components: {},
  data: function (){
    return {
      publication:{},
      id: this.$route.params.id,
      author:'',
      categories:[]
    }
  },
  created: function(){
    axios
      .get(this.$store.state.backURL + "/publication/get-publication/" + this.id
      )
      .then(response => {
        this.publication = response.data;
        this.categories = response.data.listCategories;
        this.author = this.publication.authorId;
      })
      .catch(error => {
        this.sendMessage("Error", "danger", error.response.data.message);
      });
  },
  methods:{
    sendMessage(title, variant, message){
      this.$bvToast.toast(message, {
        title: title,
        variant: variant,
        solid: true
      })
    }
  },
  computed:{}
}
</script>
