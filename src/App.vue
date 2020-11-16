<template>  <div class="wrapper">
 
    <router-view class="body"/>  
    <my-footer class="footer"></my-footer>
    </div>
</template>

<script>

import Footer from './components/Footer'
  export default {
     components:{
        'my-footer': Footer
     }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}.wrapper {
   display: block;
   min-height: 100%; /* real browsers */
   height: auto !important; /* real browsers */
   height: 100%; /* IE6 bug */
   margin-bottom: -20px; /* กำหนด margin-bottom ให้ติดลบเท่ากับความสูงของ footer */
}
.body{
   
       bottom:0;
       left:0;
   width: 100%; 
    min-height:728px;  
       max-height: autopx;

 
}
.footer {
   
       bottom:0;
       left:0;
   width: 100%;
   height:110px;
   padding: 20px 0;
   padding: 15px 35px;
   text-align: center;
   color: #ffffff;
 
 
}

</style>
