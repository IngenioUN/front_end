<template>
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <table class="table table-hover table-bordered" aria-describedby="User Table">
            <thead class="thead-light">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre Usuario</th>
                    <th scope="col">Apellido Usuario</th>
                    <th scope="col">Perfil</th>
                </tr>
            </thead>
            <tbody v-for="item of items" :key="item.id">
                <tr>
                    <th scope="row">{{item.id}}</th>
                    <td>{{item.nombre}}</td>
                    <td>{{item.apellido}}</td>
                    <td>{{item.img}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
axios.defaults.withCredentials = true;

export default {
  name: 'Usuarios.vue',
  components: {},
  data: function (){
    return {
        form:{
            type: 0, // 0 - Iniciar Sesion , 1 - Registro,  2 - Recuperar contraseña
            email1:"",
            password:""
            //passwordos:""
        },
        items: {
        usu1: {
          id:1,
          nombre: 'Pepo',
          apellido: 'Perez',
          img: '../assets/images/Perfil1.jpg'
        },
        usu2: {
          id:2,
          nombre: 'Juana',
          apellido: 'Rodriguez',
          img: '../assets/images/Perfil2.jpg'
        },
        usu3: {
          id:3,
          nombre: 'Roman',
          apellido: 'Romero',
          img: '../assets/images/Perfil3.jpg'
        },
        usu4: {
          id:4,
          nombre: 'Juancho',
          apellido: 'Diaz',
          img: '../assets/images/Perfil1.jpg'
        },
        usu5: {
          id:5,
          nombre: 'Mari',
          apellido: 'Gonzalez',
          img: '../assets/images/Perfil1.jpg'
        }
      }

    }
    },
    methods:{
    },
    computed:{
    }
}
</script>
