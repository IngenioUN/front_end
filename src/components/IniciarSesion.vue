<template>
    <div class="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 offset-2">
        <div class="divcont">
            <h2><i>Iniciar Sesion</i></h2>
            <form @submit.prevent="sendForm()">
                <!-- Clases para form utiles: action="/action_page.php class="was-validated" -->
                <div class="form-group">
                    <label for="uname">Usuario:</label>
                    <input type="email" class="form-control" :class="{'border border-success':!validaEmail}" placeholder="Email" v-model="form.email" required>
                    <label for="pwd">Contraseña:</label>
                    <input type="password" class="form-control" v-if="form.type!=2" :class="{'border border-success':!validaPassword}" placeholder="Contraseña" v-model="form.password" required>
                    <!-- <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Favor llenar este campo.</div> -->
                    <button @click="sendForm()" class="btn btn-outline-dark mb-3 mt-3" v-if="form.type==0">Ingresar</button>
                </div>
                <!-- <button type="button" class="btn btn-link" href="javascript:void(0)" @click="form.type=2" v-if="form.type!=2">Recuperar contraseña</button>
                <button type="button" class="btn btn-link" href="javascript:void(0)" @click="form.type=1" v-if="form.type!=1">Registrarme</button>
                <button type="button" class="btn btn-link" href="javascript:void(0)" @click="form.type=0" v-if="form.type!=0">Iniciar sesión</button>                 -->
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Ingreso.vue',
  components: {},
  data: function (){
    return {
        form:{
            type: 0, // 0 - Iniciar Sesion , 1 - Registro,  2 - Recuperar contraseña
            email:"",
            password:"",
            passwordos:""
        }
    }
    },
    methods:{
        sendForm(){                 //Validar
            if(this.validaType()){
                console.log(this.form);
            }
        },
        validaType(){
            if(this.form.type==0 && !this.validaEmail && !this.validaPassword){
                return true;
            }
            else if(this.form.type==1 && !this.validaEmail && !this.validaRepetirPassword){
                return true;
            }
            else if(this.form.type==2 && !this.validaEmail){
                return true;
            }
            return false;
        }

    },
    computed:{
        validaEmail(){
            var exp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if(exp.test(this.form.email)){
                return false;
            } else{
                return true;
            }
        },
        validaPassword(){
            var exp = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;
            if(exp.test(this.form.password)){
                return false;
            } else{
                return true;
            }
        },
        validaRepetirPassword(){
            if(this.form.password==this.form.passwordos && this.form.passwordos != ''){
                return false;
            } else{
                return true;
            }
        }
    }
}
</script>
