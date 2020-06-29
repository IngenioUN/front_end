<template>
  <div id="AddPublication">
    <div class="row">
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <b-col sm="8">
          <b-form-group
            class="mb-0"
            label="CategoryName"
            label-for="input-formatter">
            <b-input
              id="email"
              class="form-control"
              type="text"
              name="categoryName"
              v-model="name"
              placeholder="Category Name"/>
          </b-form-group>
        </b-col>
        <br/>
        <b-col sm="11">
          <b-form-textarea
            class="form-control"
            id="categoryDescription"
            v-model="description"
            placeholder="Enter Category Description...">
          </b-form-textarea>
          <br/>
          <button @click="createCategory()" class="btn btn-outline-dark mb-3 mt-3" >Add Category</button>
        </b-col>
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
  }
}
</script>