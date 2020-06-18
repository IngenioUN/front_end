import Vue from 'vue';
import Router from 'vue-router';

//Views
import Tests from "./views/Tests";
import Ingenio from "./views/Ingenio";
import ContactUs from "./views/ContactUs";
import Profile from "./views/Profile";
import Publication from "./views/Publication";

//Components
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AllAuthorRequest from "./components/AllAuthorRequest";
import Followed from "./components/Followed";
import PersonalInfo from "./components/PersonalInfo";
import AuthorRequest from "./components/AuthorRequest";
import AddPublication from "./components/AddPublication";
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
      path: "/signUp",
      name: "signup",
      component: SignUp
    },
    {
      path: "/signin",
      name: "signin",
      component: SignIn
    },
    {
      path: "/",
      name: "ingenio",
      component: Ingenio
    },
    {
      path: "/tests",
      name: "tests",
      component: Tests
    },
    {
      path: "/publication",
      name: "publication",
      component: Publication
    },
    {
      path: "/contactUs",
      name: "contactUs",
      component: ContactUs
    },
    {
      path: "/allAuthorRequest",
      name: "solicitudes autoria",
      component: AllAuthorRequest
    },
    {
      path: "/followed",
      name: "followed",
      component: Followed
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      children:[
        {
          path: "authorRequest",
          name: "authorRequest",
          component: AuthorRequest
        },
        {
          path: "addPublication",
          name: "addPublication",
          component: AddPublication
        },
        {
          path: "/personalInfo",
          name: "personalInfo",
          component: PersonalInfo
        }
      ]
    }
  ]
})