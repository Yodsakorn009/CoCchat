<template>
  <div class="login">
      <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <div class="container">
      <b-navbar-brand href="/">
      <img height="25px" src="https://www.computing.psu.ac.th/th/wp-content/uploads/2018/03/PSU_CoC_ENG.png">
    </b-navbar-brand>
    
     <b-nav right>
<b-button type="back" @click="OnBack"  variant="danger">back</b-button>
     </b-nav>

   
    </div>
  </b-navbar>
</div>
<div class="container mt-3">
      <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="PSU PHUKET CAMPUS"
        text="Prince of Songkla University"
        img-src="https://www.psu.ac.th/sites/files/n7424_ft160603_01.png"
      ></b-carousel-slide>

   


    </b-carousel>

<b-form class="mt-3" @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="User:"
        label-for="input-1"
        description="We'll never share your user."
      >
        <b-form-input
          id="input-1"
          v-model="user"
         type="email"
          required
          placeholder="Enter username"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="pass"
          required
          type="password"
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>&nbsp;
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
</div>

  </div>
</template>

<script>
import firebase from "../components/firebase"
   export default {
    data() {
      return {
         user: '',
          pass: '',   
        form: {
          user: '',
          pass: '',          
        },
       
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
  firebase.auth().signInWithEmailAndPassword(this.user, this.pass)
  .then((user) => {
    // Signed in 
    console.log(user);
     window.location.href = "/admin"
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
      console.log(errorCode,errorMessage);
    alert(errorMessage);
  });
        evt.preventDefault()
       
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.user = ''
        this.pass = ''        
      },OnBack(){
         window.history.back();
      }
      
    }
  }
</script>

<style>
</style>