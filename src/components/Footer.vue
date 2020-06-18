<template>
  <div id="Footer">
    <div class="row">
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <!-- fixed-bottom  -->
        <nav id="navbar" class="navbar navbar-expand-lg d-flex justify-content-between">
          <router-link class="nav-link text-white" to="/"><em><h1>Ingenio</h1></em></router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- ContactUs -->
            <router-link class="nav-link text-white" to="/contactUs">ContactUs</router-link>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import ContactUs from '../views/ContactUs.vue'

export default {
  name: 'Footer.vue',
  components:{
    ContactUs
  }
}
</script>
