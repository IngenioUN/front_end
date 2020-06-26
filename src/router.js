import Vue from 'vue';
import Router from 'vue-router';

//Views
import Tests from "./views/Tests";
import Ingenio from "./views/Ingenio";
import ContactUs from "./views/ContactUs";
import Profile from "./views/Profile";
import UserProfile from "./views/OtherProfile";
import Publication from "./views/Publication";

//Components
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AllAuthorRequest from "./components/AllAuthorRequest";
import Authors from "./components/Authors";
import Users from "./components/Users";
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
      path: "/principal",
      name: "principal",
      component: Ingenio
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
      path: "/publication/:id",
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
      name: "allAuthorRequest",
      component: AllAuthorRequest
    },
    {
      path: "/authors",
      name: "authors",
      component: Authors
    },
    {
      path: "/users",
      name: "users",
      component: Users
    },
    {
      path: "/followed",
      name: "followed",
      component: Followed
    },
    {
      path: "/userprofile/:id",
      name: "userprofile",
      component: UserProfile,
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      children:[
        {
          path: "/authorRequest",
          name: "authorRequest",
          component: AuthorRequest
        },
        {
          path: "/addPublication",
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