<template>
    <div class="divlogin">
      <div class="accordion" id="accordionExample">
        <div class="card" v-for="item of categories" :key="item.id">
          <div class="card-header" id="headingOne">
            <h2 class="mb-0">
              <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" :data-target="'#' + item.name" aria-expanded="true" aria-controls="collapseOne" @click="set(item._id,item.name); getSaveP()">
                {{item.name}}
              </button>
            </h2>
          </div>
          <div :id="item.name" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body" v-for="itemS of publications" :key="itemS.id">
              Title: {{itemS.title}}<br/>
              Description: {{itemS.abstract}}<br/>
              <!--Categories: {{itemS.listCategories}}<br/>-->
              <!--Author: {{itemS.authorId}}<br/>-->
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
  name: 'SavedPublications.vue',
  components: {},
  data: function (){
    return {
      categories:{},
      items:{},
      publications:[],
      categoryId:'',
      categoryName:''
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
  },
  mounted() {
    this.getSaveP();
  },
  methods:{
    set(idnuevo,namenuevo){
      this.categoryId = idnuevo;
      this.categoryName = namenuevo;
    },
    selectCategory(item){
      this.Category = item;
      console.log(this.Category);
    },
    getSaveP() {
      this.publications=[];
      var publicat = {};
      axios
      .get(this.$store.state.backURL + "/user/get-save-publication")
      .then(response => {
        this.items = response.data;
        console.log(this.items);
        for (let item in this.items.savedPublications){
          for (let item2 in this.items.savedPublications[item].listCategories){
               if(this.items.savedPublications[item].listCategories[item2] == this.categoryId){
                 console.log(this.items.savedPublications[item]);
                 publicat = this.items.savedPublications[item];
                 this.publications.push(publicat);
              }
          }
        }
      })
      .catch( error => {
        if( error.response.status === 400 ){
          console.log( "Credenciales incorrectas" );
        }else{
          console.log( "¡Parece que hubo un error de comunicación con el servidor!" );
        }
      });
    }
  },
  computed:{}
}
</script>
