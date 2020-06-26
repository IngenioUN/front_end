<template>
  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
    <table class="table table-hover table-bordered" aria-describedby="Users Table">
      <thead class="thead-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody v-for="(item,index) of items" :key="item.id">
        <tr>
          <th scope="row">{{index + 1}} </th>
          <td>
            <a data-toggle="modal"  >
              {{item.firstName}}
            </a>
          </td>
          <td>
            <a data-toggle="modal" >
              {{item.lastName}}
            </a>
          </td>
          <td>
            <a data-toggle="modal" >
              {{item.email1}}
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
axios.defaults.withCredentials = true;
import MoreInfoUser from '../components/MoreInfoUser.vue';

export default {
  name: 'Users.vue',
  components: {
    MoreInfoUser
  },
  data(){
    return {
      disabled:0,
      datoPasar : [],
      items: []
    };
  },
  mounted() {
    this.getItems();
  },
  methods:{
    getItems() {
      axios
      .get(this.$store.state.backURL + "/user/get-users")
      .then(response => {
        this.items = response.data;
      })
      .catch( error => {
        console.log( "¡Parece que hubo un error de comunicación con el servidor!" );
      });
    }
  },
  computed:{
  }
}
</script>
