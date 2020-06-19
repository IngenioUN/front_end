<template>
  <div id="AddPublication">
    <div class="row">
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <form>
          <div class="col-md-8 mb-3">
            <label for="exampleFormControlInput100">Name</label>
            <input type="text" class="form-control" id="exampleFormControlInput200" placeholder="Category Name" v-model="name">
            <br/>
            <label for="validationTextarea">Description</label>
            <textarea class="form-control" id="validationTextarea1" placeholder="Something about this category..." required v-model="description"></textarea>
            <br>
            <button @click="createCategory()" type="submit" class="btn btn-dark mb-2">Add Category</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.withCredentials = true;

export default {
  name: 'AddCategory.vue',
  data: function (){
    return {
      name:'',
      description: ''
    }
  },
  componenets:{
  },
  methods:{
    createCategory( event ){
      axios
      .post( this.$store.state.backURL + '/category/add-category',
        {
          "name": this.name,
          "description": this.description
        }
      ).then( response => {
        alert(response.data.message);
        console.log(response.data);
      })
      .catch( error => {
        alert( error.response.data.message );
        console.log(error.response);
      });
    },
  }
}
</script>