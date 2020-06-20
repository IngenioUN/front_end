<template>
  <div id="AddPublication">
    <div class="row">
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <b-col sm="8">
          <b-form-group
            class="mb-0"
            label="Title"
            label-for="input-formatter">
            <b-input
              id="publicationTitle"
              class="form-control"
              type="text"
              name="PublicationTitle"
              v-model="publication.title"
              placeholder="Publication Title"/>
          </b-form-group>
        </b-col>
        <b-col sm="12">
          <br/>
          <label for="exampleFormControlInput2">Abstract</label>
          <b-form-textarea
            class="form-control"
            id="publicationAbstract"
            v-model="publication.abstract"
            placeholder="Enter Publication Abstract...">
          </b-form-textarea>
          <br/>
          <label for="exampleFormControlInput2">Select Categories</label>
          <b-form-checkbox-group
            v-model="publication.listCategories"
            :options="categories"
            class="mb-3"
            value-field="_id"
            text-field="name"
            disabled-field="notEnabled"
          ></b-form-checkbox-group>
          <div class="mb-3">
              <label for="exampleFormControlInput2">Key Words</label>
              <input type="text" class="form-control col-sm-10" id="exampleFormControlInput3" placeholder="New keword..." v-model="keyword">
              <br/>
              <button type="button" class="btn btn-sm btn-dark" @click="AddKeyWord()">Add</button>
          </div>
            <div  class="mt-3" v-for="(item,index) in publication.keyWords" :key="item.id">
              <div role="alert" class="alert alert-dark">
                <div class="d-flex justify-content-between align-items-center">
                  <div> {{item}}</div>
                  <div>
                    <button type="button" class="btn btn-danger btn-sm" @click="DeleteKeyWord(index)">X</button>
                  </div>
                </div>
              </div>
            </div>
          <label for="exampleFormControlInput2">Text</label>
          <b-form-textarea
            class="form-control"
            id="publicationText"
            v-model="publication.text"
            placeholder="Enter Publication Text...">
          </b-form-textarea>
          <br/>
          <button @click="addPublication()" class="btn btn-outline-dark mb-3 mt-3" >Add Publication</button>
        </b-col>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
axios.defaults.withCredentials = true;

export default {
  name: 'AddPublication.vue',
  data: function (){
    return {
      categories: [],
      keyword: '',
      publication: {
        title: "",
        abstract: "",
        keyWords: [],
        listCategories: [],
        text: ""
      }
    }
  },
  created: function(){
    axios
    .get( this.$store.state.backURL + '/category/get-all-categories' )
    .then( response => {
      this.categories = response.data;
    })
    .catch( error => {
      alert(error.response.data.message );
      if( error.response.status == 401 ) {
        this.$router.push('principal');
        this.$router.go(0);
      }
    })
  },
  componenets:{},
  methods:{
    addPublication( event ){
      axios
      .post( this.$store.state.backURL + '/publication/add-publication',
        {
          "title": this.publication.title,
          "abstract": this.publication.abstract,
          "keyWords": this.publication.keyWords,
          "listCategories": this.publication.listCategories,
          "text": this.publication.text
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
    AddKeyWord(){
      this.publication.keyWords.push(this.keyword);
      this.keyword = ''
    },
    DeleteKeyWord: function(index){
      this.publication.keyWords.splice(index,1);
    }
  }
}
</script>