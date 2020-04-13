<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="/">IngenioUN</a>
    </nav>

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
      }
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
      fetch("/api/forms", {
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
      fetch("/api/tasks")
        .then(res => res.json())
        .then(data => {
          this.tasks = data;
        });
    },

    editTask(taskId) {
      fetch("/api/tasks/" + taskId)
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