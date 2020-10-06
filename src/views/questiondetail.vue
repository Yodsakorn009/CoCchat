<template>
  <div class="login">
      <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <div class="container">
      <b-navbar-brand href="/admin">
      <img height="25px" src="https://www.computing.psu.ac.th/th/wp-content/uploads/2018/03/PSU_CoC_ENG.png">
    </b-navbar-brand>
    
     <b-nav right>
<b-button type="back" @click="OnBack"  variant="danger">back</b-button>
     </b-nav>

    

    </div>
  </b-navbar>
</div>
<div class="container mt-3">
    
<h2>คำถาม</h2>

 <b-form class="mt-3" :key="key" v-for="(question, key) in questions">
         
      <b-form-group label="Text1:"  v-on=" show (key, question) " >
        <b-form-input
      
         v-model="quest"
         type="text"
         required
         placeholder="คำถาม"

        ></b-form-input>
      </b-form-group>
       <b-form-group label="Text2:" >
        <b-form-textarea
         v-model="detail"
          type="text"
          required
           rows="3"
      max-rows="6"
          placeholder="Text Area (รายระเอียด)"
          
        ></b-form-textarea>     
        
      </b-form-group>
      <b-form-group label="Text3:" >
        <b-form-input
         v-model="web"
          type="text"
          required
          placeholder="web"
        ></b-form-input>
      </b-form-group>
    
    

      <b-button  @click=" updatequestion(key,quest,detail,web)" variant="primary">Update</b-button>&nbsp;
      <b-button  @click="Delete(key)" variant="danger">Delete</b-button>
    </b-form>
     
     
         
    
    
</div>

  </div>
</template>

<script>
 import firebase from '../components/firebase'
var database = firebase.database()
var questionRef = database.ref('/question')
export default {
    data() {
    
      return {
       questions: {}       
      }
    },
    methods: {
    Delete(key){
      questionRef.child(key).remove()
      window.history.back();
    },
    show (key, question) {
      this.quest = question.name
      this.detail = question.detail
      this.web = question.web
      
          },
     OnBack(){
      window.history.back();
      } ,
      updatequestion(key,quest,detail,web){
          questionRef.child(key).update({
        name : quest,
        detail : detail,
        web : web       
      })
    window.history.back();
    }
  },
    mounted () {
    questionRef.orderByKey().equalTo(this.$route.params.key).on('value', (snapshot) => {
      this.questions = snapshot.val()
    })
  }
  }
</script>

<style>

</style>