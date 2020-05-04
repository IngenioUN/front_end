import Vue from 'vue';
import Router from 'vue-router';

//Views
import Usuario from "./views/Usuario";
import Ingenio from "./views/Ingenio";

//Components
import NavBar from "./components/NavBar";
import IniciarSesion from "./components/IniciarSesion";
import Registro from "./components/Registro";
import OlvidarContrasena from "./components/OlvidarContrasena";


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    //End Points Ingenio
    {
      path: "/registrar",
      name: "signup",
      component: Registro
    },
    {
      path: "/olvidarcontrasena",
      name: "forgetpass",
      component: OlvidarContrasena
    },
    {
      path: "/ingresar",
      name: "signin",
      component: IniciarSesion
    },
    {
      path: "/ingenio",
      name: "ingenio",
      component: Ingenio
    },
    {
      path: "/usuarios",
      name: "usuario",
      component: Usuario
    }//,
    // beforeCreated(){
    //   router =  {name: 'home'}
    // }
  ]
})
