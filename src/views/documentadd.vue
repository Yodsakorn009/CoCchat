<template>
  <div class="documentdetail">
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
    
<h2>เอกสาร</h2>
<b-form class="mt-3" @reset="onReset" >
      <b-form-group
        id="input-group-1"
        label="Text1:"
        label-for="input-1"
        description=""
      >
        <b-form-input
          id="input-1"
          v-model="text1"
          type="text"
          required
          placeholder="ชื่อเอกสาร"
        ></b-form-input>
      </b-form-group>
       <b-form-group
        id="input-group-2"
        label="Text2:"
        label-for="input-2"
        description=""
      >
        <b-form-textarea
          id="input-2"
          v-model="text2"
          type="text"
          
           rows="3"
      max-rows="6"
          placeholder="ข้อมูลเพิ่มเติม"
        ></b-form-textarea>
        
      </b-form-group>
           <b-form-group
        id="input-group-3"
        label="File:"
        label-for="input-3"
        description=""
      >
        <b-form-file
          id="input-3"
          v-model="file"
          :state="Boolean(file)"
          required
          placeholder="upload file"
        ></b-form-file>
        
      </b-form-group>
        <b-form-group
        id="input-group-4"
        label="Photo:"
        label-for="input-4"
        description=""
      >
        <b-form-file
          id="input-4"
          v-model="file2"
          :state="Boolean(file2)"
         
          placeholder="upload photo"
        ></b-form-file>
        
      </b-form-group>
      <b-form-group
        id="input-data-1"
        label="Data Start:"
        label-for="input-data-1"
        required
        description=""
      >
        <b-form-datepicker  v-model="week1"  close-button reset-button  locale="en"></b-form-datepicker>
        
      </b-form-group>
    

        
      <b-button @click="adddocument( text1,text2,week1) " variant="primary">Add</b-button>&nbsp;
      <b-button type="reset" variant="warning">Reset</b-button>

    </b-form>
</div>

  </div>
</template>

<script>
import firebase from "../components/firebase";
var database = firebase.database()
var documentRef = database.ref('/document')
   export default {
    data() {
      return {
        
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
       window.location.href = "/admin"
      },
      onReset() {      
        // Reset our form values
         this.text1 = ''
         this.text2 = ''
         this.file = ''
         this.file2 = ''
         
        
  
      },OnBack(){
         window.history.back();
      },adddocument( text1,text2,week1){      
      let data = {
        name: text1,
        detail: text2,
        week : week1
     
      }
      documentRef.push(data)
      window.history.back();
      
    }
      
    }
  }
</script>

<style>

</style> 