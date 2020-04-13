<template>
  <div>
    <div class="row">            
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <nav class="navbar navbar-expand-sm bg-dark navbar-dark d-flex justify-content-between">		
                    <a class="navbar-brand" href="#">
                    <h1><i>Ingenio</i></h1>    <!-- <img src="images/ingenio.png" alt="Ingenio" style="width:200px;"> -->
                    </a>
                    <ul class="navbar-nav">				
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#home">Inicio</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categorias</a>
                            <div class="dropdown-menu">
                            <a class="dropdown-item" href="#one">Sistemas</a>
                            <div role="separator" class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#two">Electricidad</a>
                            <div role="separator" class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#three">Medicina</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Autores</a>
                            <div class="dropdown-menu">
                            <a class="dropdown-item" href="#one">Valeria Huepa</a>
                            <a class="dropdown-item" href="#two">Tatiana Zambrano</a>
                            <div role="separator" class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#three">Jose Peña</a>
                            <a class="dropdown-item" href="#three">Carlos Rincon</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Lo mas recientes</a>
                            <div class="dropdown-menu">
                            <a class="dropdown-item" href="#one">2020</a>
                            <div role="separator" class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#two">2019</a>
                            <div role="separator" class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#three">2018</a>
                            <div role="separator" class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#three">2017</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#fat">Lo mas visto</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#fat">Sobre Nosotros</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#mdo">Contactenos</a>
                        </li>
                        <div class="justify-content-between">
                            <button class="btn btn-secondary" href="#usuario" @click="form.type=1">Registrarse</button>
                            <button class="btn btn-secondary" href="#usuario" @click="form.type=0">Iniciar Sesion</button>			
                        </div>
                    </ul>
                </nav>
            </div>
        </div>

    <div class="divlogin">
      <div class="container">
        <div class="divcont">
          <h3>{{ title }}</h3>
          <form @submit.prevent="sendform()">
            <div class="form-group">
              <input
                type="email"
                :class="{'error':validaEmail}"
                placeholder="Correo"
                v-model="form.email"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                v-if="form.type!=2"
                :class="{'error':validaPassword}"
                placeholder="Contraseña"
                v-model="form.password"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                v-if="form.type==1"
                :class="{'error':validaRepetirPassword}"
                placeholder="Repetir contraseña"
                v-model="form.passwordos"
              />
            </div>

            <button v-if="form.type!=1">Iniciar sesión</button>
            <button v-if="form.type!=0">Registar</button>
            <div>
              <!--<a href="javascript:void(0)" @click="form.type=2" v-if="form.type!=2" >Recuper contraseña</a>-->
              <a href="javascript:void(0)" @click="form.type=1" v-if="form.type!=1">Registrarme</a>
              <a href="javascript:void(0)" @click="form.type=0" v-if="form.type!=0">Iniciar sesión</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>>

<script>
export default {
  data() {
    return {
      form: {
        type: 0, // 0 = Login , 1 = Registro 2- Recuperar contraseña
        email: "",
        password: "",
        passwordos: ""
      },
      users: []
    };
  },
  //
  created() {
    this.getTasks();
  },
  methods: {
    sendform() {
      console.log(this.form);
      this.form.email = "";
      this.form.password = "";
      this.form.passwordos = "";

      //solicitud y envio de datos al server
      fetch("/ingenio", {
        method: "POST",
        body: JSON.stringify(this.form),
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        }
      })
        //respuesta del server
        .then(res => res.json())
        .then(data => {
            this.getTasks();
        });
    },
    getTasks() {
      fetch("/ingenio")
        .then(res => res.json())
        .then(data => {
          this.users = data;
          console.log(this.users);
        });
    },

    editTask(taskId) {
      fetch("/ingenio" + taskId)
        .then(res => res.json())
        .then(data => {
          const { _id, title, description } = data;
          this.task = new Task(title, description);
          this.taskToEdit = _id;
          this.edit = true;
        });
    }
  },
  computed: {
    validaEmail() {
      var exp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (exp.test(this.form.email)) {
        return false;
      } else {
        return true;
      }
    },
    validaPassword() {
      var exp = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;
      if (exp.test(this.form.password)) {
        return false;
      } else {
        return true;
      }
    },
    validaRepetirPassword() {
      if (this.form.password == this.form.passwordos) {
        return false;
      } else {
        return true;
      }
    },
    title() {
      return this.form.type == 0
        ? "Iniciar Sesión"
        : this.form.type == 1
        ? "Registro"
        : "Recuperar contraseña";
    }
  }
};
</script>
