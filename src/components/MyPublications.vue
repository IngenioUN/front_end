<template>
    <div class="divlogin">
      <table class="table table-hover table-bordered" aria-describedby="Author requestes Table">
        <thead class="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Publication Name</th>
            <th scope="col">Abstract</th>
            <th scope="col">Categories</th>
            <th scope="col">Go to</th>
          </tr>
        </thead>
        <tbody v-for="(item,index) of MyPublications" :key="item.id">
          <tr>
            <th scope="row">{{index + 1}} </th>
            <td>
              {{item.title}}
            </td>
            <td>
              <div class="form-check">
                {{item.abstract}}
              </div>
            </td>
            <td>
              <a v-for="item2 of item.listCategories" :key="item2.id">
                {{item2.name}}
              </a>
            </td>
            <td>
              <router-link :to="{ name: 'publication', params: { id: item._id }}" target="_blank">
                <button type="button" class="btn btn-primary" >Ir</button>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
import axios from 'axios';
axios.defaults.withCredentials = true;
const path = "/user";

export default {
  name: 'MyPublications.vue',
  components: {},
  data: function (){
    return {
      MyPublications: {}
    }
  },
  created: function(){
    axios
		.get( this.$store.state.backURL + '/user/get-author-publications/' + this.id)
		.then( response => {
			if( response.status !== 200 ){
        this.sendMessage("Error", "danger", response.data.message);
			}else{
        this.MyPublications = response.data;
			}
		})
		.catch( error => {
      this.sendMessage("Error", "danger", error.response.data.message);
		});
  },
  methods:{},
  computed:{},
  props:['id','mine']
}
</script>
