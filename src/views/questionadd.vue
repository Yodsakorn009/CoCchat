<template>
  <div class="addquestion">
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
<b-form class="mt-3"  @reset="onReset" v-if="show">
      <b-form-group 
      label="ชื่อคำถาม:" >
        <b-form-input
         v-model="question"
         type="text"
         required
         placeholder="ชื่อคำถาม"

        ></b-form-input>
      </b-form-group>
       <b-form-group label="ข้อมูล:" >
        <b-form-textarea
         v-model="detail"
          type="text"
          required
           rows="10"
     
          placeholder="ข้อมูลคำถาม"
          
        ></b-form-textarea>     
        
      </b-form-group>
      <b-form-group label="Website:" >
        <b-form-input
         v-model="web"
          type="text"
          required
          placeholder="web"
        ></b-form-input>
      </b-form-group>
    
    

      <b-button  @click="addquestion(question,detail,web)" variant="primary">บันทึก</b-button>&nbsp;
      <b-button type="reset" variant="danger">ยกเลิก</b-button>

    </b-form>
</div>

  </div>
</template>

<script>
import firebase from "../components/firebase";
var database = firebase.database()
var questionRef = database.ref('/question')
   export default {
    data() {
      return {
              question : '',
          detail: '',
          web: ''    ,
        form: {         
          question : '',
          detail: '',
          web: ''           
        },
       
        show: true
      }
    },
    methods: {
    addquestion ( question,detail,web) {      
      let data = {
        name: question,
        detail: detail,
        web : web
      }
      questionRef.push(data)
      window.history.back();
      
    },onReset(evt) {
        evt.preventDefault()
        this.question =''
        this.detail =''
        this.web =''
            this.show = false
        this.$nextTick(() => {
          this.show = true
        })  
      },OnBack(){
      window.history.back();
      }

  }
  
  
  }
</script>

<style>

</style> 