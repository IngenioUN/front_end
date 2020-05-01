import Vue from 'vue';
import Router from 'vue-router';
import SignUp from "./views/SignUp";
import Login from "./views/Login";
import Home from "./views/Home";
import NavBar from "./views/NavBar";
import Ingreso from "./views/Ingreso";
import AddRole from "./components/AddRole";
import Roles from "./components/Roles";


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {//End Points Laboratorio 2
      path: "/registro",
      name: "signup",
      component: SignUp
    },
    {
      path: "/iniciar-sesion",
      name: "login",
      component: Login
    },    
    {
      path: "/principal",
      name: "home",
      component: Home,
      children: [
        {
          path: "nuevo-rol",
          name: "add-role",
          component: AddRole
        },
        {
          path: "roles",
          name: "traer-roles",
          component: Roles
        }
      ]
    },
    //End Points Ingenio
    {
      path: "/nav-bar",
      name: "NavBar",
      component: NavBar
    },
    {
      path: "/ingreso",
      name: "ingreso",
      component: Ingreso
    },
  ]
})
