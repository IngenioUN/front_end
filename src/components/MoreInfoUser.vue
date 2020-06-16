<template>
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div class="d-flex justify-content-between align-items-center">
            <label for="validationServer01"><h5>E-Mail: </h5></label>
            {{email2}}
        </div>
        <br/>
        <div class="d-flex justify-content-between align-items-center">
            <label for="validationServer01"><h5>Profesional Card: </h5></label>
            {{pC}}
        </div>
        <br/>
        <div class="d-flex justify-content-between align-items-center">
            <label for="validationServer01"><h5>Employment History: </h5></label>
            {{eH}}
        </div>
        <br/>
        <div class="d-flex justify-content-between align-items-center">
            <label for="validationServer01"><h5>Academic History: </h5></label>
            {{aH}}
            
        </div>
    </div>
</template>

<script>
import axios from 'axios';
axios.defaults.withCredentials = true;
import router from '../router';
import MoreInfoUser from '../components/MoreInfoUser.vue';

export default {
  name: 'Ingreso.vue',
  components: {
      MoreInfoUser
  },
  data: function (){
    return {
        
        userdata: {
            EMail: 'pp@gmail.com',
            ProfCard: '12345678-9',
            EmpHis: 'Nada',
            AcaHis: 'Nada'
        }
    }
    },
    props:['email2', 'pC', 'eH','aH'],
    methods:{
    },
    computed:{
    }
}
</script>
