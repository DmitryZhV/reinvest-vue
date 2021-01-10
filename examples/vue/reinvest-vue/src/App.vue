<template>
  <div id="app">
    <Nav />
    <router-view/>
    <Footer /> 
  </div>
</template>

<script>
import Nav from "./components/Nav";
import Footer from "./components/Footer";
export default {
  components: {Nav, Footer}
}
</script>

<style>
@import "./assets/css/bootstrap.min.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  
}


html,
body,
.view{
  height: 100%;
}

a {
  -webkit-transition-duration: 500ms;
  -o-transition-duration: 500ms;
  transition-duration: 500ms;
  outline: none;
  font-size: 15px;
  color: #505050;
  text-decoration: none;
  font-weight: 300; }
a:hover, a:focus {
  text-decoration: none;
  outline: none;
  font-weight: 300;
  color: #cf0000;
  }
.section_padding_100 {
  padding: 100px 0; }
</style>
