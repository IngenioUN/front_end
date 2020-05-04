<template>    
  <div class="divlogin">        
      <div class="row">
          <div class="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 mt-5 offset-2">
              <div class="card text-center">
                <div class="card-header">
                  <ul class="nav nav-tabs card-header-tabs">
                    <li class="nav-item">
                      <a class="nav-link active" id="info-tab" data-toggle="tab" href="#info" role="tab" aria-controls="info" aria-selected="true">Informacion Personal</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="siguiendo-tab" data-toggle="tab" href="#siguiendo" role="tab" aria-controls="siguiendo" aria-selected="false">Siguiendo</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="mesiguen-tab" data-toggle="tab" href="#mesiguen" role="tab" aria-controls="mesiguen" aria-selected="false">Me Siguen</a>
                    </li>
                  </ul>
                </div>
                <div class="card-body"> 
                  <div class="tab-pane fade show active" id="info" role="tabpanel" aria-labelledby="home-tab">Informacion Personal</div>
                  <div class="tab-pane fade" id="siguiendo" role="tabpanel" aria-labelledby="profile-tab">Siguiendo</div>
                  <div class="tab-pane fade" id="mesiguen" role="tabpanel" aria-labelledby="profile-tab">Me siguen</div>
              </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

const path = "/user";

export default {
  name: 'Ingenio.vue',
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
