<template>
  <div class="login">
      <div>
  <b-navbar toggleable="lg" type="dark" variant="info" >
    <div class="container">
      <b-navbar-brand href="/admin">
      <img height="25px" src="https://www.computing.psu.ac.th/th/wp-content/uploads/2018/03/PSU_CoC_ENG.png">
    </b-navbar-brand>
    
     <b-nav right>
<b-button type="back" @click="back()" variant="danger">back</b-button>
     </b-nav>

    

    </div>
  </b-navbar>
</div>
<div class="container mt-3">
    

<b-form class="mt-3" :key="key" v-for="(detailbar, key) in detailbars">
  
      <b-form-group
     
      v-on=" showdetail (key, detailbar)"
        id="input-group-1"
        label="Text1:"
        label-for="input-1"
        description=""
      >
        <b-form-input

          id="input-1"
          v-model="text1"
          type="text"
      
          placeholder="Enter Text"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-1"
        label="Text2:"
        label-for="input-2"
        description=""
      >
        <b-form-input
          id="input-2"
          v-model="text2"
          type="text"
  
          placeholder="Enter Text"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-1"
        label="Text3:"
        label-for="input-3"
        description=""
      >
        <b-form-input
          id="input-3"
          v-model="text3"
          type="text"
        
          placeholder="Enter Text"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-1"
        label="Text4:"
        label-for="input-4"
        description=""
      >
        <b-form-input
          id="input-4"
          v-model="text4"
          type="text"
      
          placeholder="Enter Text"
        ></b-form-input>
      </b-form-group>


           <b-button  @click=" detailbarupdate(key,text1,text2,text3,text4)" variant="primary">Update</b-button>&nbsp;
      <b-button type="back" @click="back()" variant="danger">Back</b-button>
    </b-form>
</div>

  </div>
</template>

<script>
import firebase from "../components/firebase";

var database = firebase.database()

var detailbarRef = database.ref('/detailbar')

   export default {
    data() {
      return {      
        
       
       
      }
    },
    methods: {
      back(){
           window.history.back();
      },
      showdetail(key,detailbar) {
      this.text1 = detailbar.name
      this.text2 = detailbar.address
      this.text3 = detailbar.tel
      this.text4 = detailbar.web
          },
      detailbarupdate(key,tex1,tex2,text3,tex4){
          detailbarRef.child(key).update({
        name : tex1,
        address : tex2,
        tel: text3,
        web : tex4       
      })
    window.history.back();
    }
      
    },
  mounted () {
    detailbarRef.on('value', (snapshot) => {
      this.detailbars = snapshot.val()
    })
  }
  }
</script>

<style>

</style>