<template>
  <div id="app">
    <NavBar id="navbar"/>
    <!-- <NavBar/> -->
    <router-view/>
    <Footer id="navbar"/>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
name: 'App',
components:{
  NavBar,
  Footer
  }
}
</script>
<style>
#navbar{
  background-color: #000D0D;
}
</style>
