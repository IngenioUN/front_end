<template>
	<div id="divclas">
		<div class="row jumbotron">
			<div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 offset-3 shadow-lg p-3 mb-5">
				<p class="text-right"><em><h1>ContactUs</h1></em></p>
				<br/>
				<p class="text-right" ><em><h3>
				Scrum Master:<br/>
				<h5>Guiselle Tatiana Zambrano Penagos</h5><br/>
				Desarrolladores:
				<h5>
				Valeria Huepa Ducuara<br/>
				Juan José Peña Becerra<br/>
				Carlos Daniel Rincón Mora<br/>
				</h5>
				<br/>
				Product Owner:
				<h5>Sebastian David Moreno Bernal<br/>
				Ingenieria de Software II<br/>
				</h5>
				</h3></em></p>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
axios.defaults.withCredentials = true;
import { ToastPlugin } from 'bootstrap-vue';
import { BToast } from 'bootstrap-vue';

const path = "/user";

export default {
  name: 'ContactUs.vue',
  components: {
    ToastPlugin,
    BToast
  },
  data: function (){
    return {
      hide: false,
      message: '',
      toastCount: 0
    }
	},
	methods: {}
}
</script>

