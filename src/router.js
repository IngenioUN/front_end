import Vue from 'vue';
import Router from 'vue-router';

//Views
import Pruebas from "./views/Pruebas";
import Ingenio from "./views/Ingenio";
import Contactenos from "./views/Contactenos";
import Categorias from "./views/Categorias";
import LoMasReciente from "./views/LoMasReciente";
import Perfil from "./views/Perfil";

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
      path: "/",
      name: "ingenio",
      component: Ingenio
    },
    {
      path: "/pruebas",
      name: "usuario",
      component: Pruebas
    },
    {
      path: "/contactenos",
      name: "contactenos",
      component: Contactenos
    },
    {
      path: "/categorias",
      name: "categorias",
      component: Categorias
    },
    {
      path: "/lomasreciente",
      name: "lomasreciente",
      component: LoMasReciente
    },
    {
      path: "/perfil",
      name: "perfil",
      component: Perfil
    }
  ]
})