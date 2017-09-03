<template>
  <div id="app">
    <!-- App Navigation Bar -->
     <mu-appbar title="TechScan">
      <mu-text-field icon="search" class="appbar-search-field"  slot="right" hintText="Search..."/>
         <mu-icon-menu icon="more_vert" slot="right">
      <mu-menu-item title="Home" to="/" />
      <mu-menu-item title="Technologies" to="/technologies"/>
      <mu-menu-item title="Users" to="/users"/>
    
    </mu-icon-menu>
     </mu-appbar>
    <div class="main-container">
        <!-- use router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will be rendered as an `<a>` tag by default 
    <router-link to="/technologies">Technologies</router-link>
    -->
    <!-- Router Componenets will load at router-view -->
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 0px;
   background-image:url('assets/bg.jpeg');
    height: 800px;
    color:#fff;
}


.appbar-search-field{
  color: #000;
  margin-bottom: 0;
 
}
 .mu-appbar{
   background-color: #fff;
   color:#000;
   text-align: center;
 }
 
  .mu-text-field-hint {
    color: fade(#000, 54%);
  }
  .mu-text-field-input {
    color: #000;
  }
  .mu-text-field-focus-line {
    background-color: #FFF;
  }
  
</style>