<template>
    <div class="divlogin">
      <div class="accordion" id="accordionExample">
        <div class="card" v-for="item of savedPublication" :key="item.id">
          <div class="card-header" id="headingOne">
            <h2 class="mb-0">
              <button class="btn btn-link btn-block text-left " type="button" data-toggle="collapse" :data-target="'#' + item.Name" aria-expanded="true" aria-controls="collapseOne">
                {{item.Name}}
              </button>
            </h2>
          </div>
          <div :id="item.Name" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample"  v-for="itemS of items.savedPublications" :key="itemS.id">
            <div class="card-body" >
              Title: {{itemS.title}}
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
      savedPublication: {
        _1 :{
          Name: 'Systems',
          Description: 'Hi, Im systems'
        },
        _2:{
          Name: 'Chemistry',
          Description: 'Hi, Im chemistry'
        },
        _3:{
          Name: 'Civil',
          Description: 'Hi, Im civil'
        },
        _4:{
          Name: 'Industrial',
          Description: 'Hi, Im industrial'
        }
      },
      items:[]
    }
  },
  mounted() {
    this.getSaveP();
  },
  methods:{
    selectCategory(item){
      this.Category = item;
      console.log(this.Category);
    },
    getSaveP() {
      axios
      .get(this.$store.state.backURL + "/user/get-save-publication")
      .then(response => {
        this.items = response.data;
        console.log(this.items);
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
