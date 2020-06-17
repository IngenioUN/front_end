<template>
    <div class="divlogin">
        <div class="row">
          <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
            <div class="card" >
              <div  class="card">
                <img src="../assets/images/Perfil1.jpg" class="card-img-top" alt="item.img" />
                <div class="card-body">
                  <small class="card-title">Template</small>
                </div>
                <div class="card-footer">
                  <small class="text-muted">template</small>
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
const path = "/user";

export default {
  name: 'Siguiendo.vue',
  components: {},
  data: function (){
    return {
    }
    },
    methods:{

    },
    computed:{}
}
</script>
