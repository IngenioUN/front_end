import Vue from 'vue';
import Router from 'vue-router';

//Views
import Pruebas from "./views/Pruebas";
import Ingenio from "./views/Ingenio";
import Contactenos from "./views/Contactenos";
import Perfil from "./views/Perfil";
import Publication from "./views/Publication";

//Components
import IniciarSesion from "./components/IniciarSesion";
import Registro from "./components/Registro";
import SolicitudesAutoria from "./components/SolicitudesAutoria";
import Siguiendo from "./components/Siguiendo";
import PerfilInfoPersonal from "./components/PerfilInfoPersonal";
import SolicitudAutor from "./components/SolicitudAutor";
import SubirPublicacion from "./components/SubirPublicacion";
import NavBar from "./components/NavBar";


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  //base: 'https://ingeniofrontend.herokuapp.com',
  routes: [
    //End Points Ingenio
    {
      path: "/navbar",
      name: "nabvar",
      component: NavBar
    },
    {
      path: "/registrar",
      name: "signup",
      component: Registro
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
      name: "pruebas",
      component: Pruebas
    },
    {
      path: "/publication",
      name: "publication",
      component: Publication
    },
    {
      path: "/contactenos",
      name: "contactenos",
      component: Contactenos
    },
    {
      path: "/solicitudesautoria",
      name: "solicitudes autoria",
      component: SolicitudesAutoria
    },
    {
      path: "/siguiendo",
      name: "siguiendo",
      component: Siguiendo
    },
    {
      path: "/perfil",
      name: "perfil",
      component: Perfil,
      children:[
        {
          path: "solicitudautor",
          name: "solicitudautor",
          component: SolicitudAutor
        },
        {
          path: "subirpublicacion",
          name: "subirpublicacion",
          component: SubirPublicacion
        },
        {
          path: "/pfinfopersonal",
          name: "pfinfopersonal",
          component: PerfilInfoPersonal
        }
      ]
    }
  ]
})