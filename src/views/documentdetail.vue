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
<b-form class="mt-3" :key="key" v-for="(document, key) in documents">
      <b-form-group 
      v-on="show (key, document)"
        id="input-group-1"
        label="ชื่อเอกสาร:"
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
        label="ข้อมูล:"
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
        id="input-group-4"
        label="File:"
        label-for="input-4"
        description=""
      >
        <b-form-input
          id="input-4"
          v-model="text4"
          type="text"
          disabled
          placeholder=""
        ></b-form-input>
        
      </b-form-group>
   
       <b-form-group
        id="input-data-1"
        label="วันที่เริ่มประกาศ:"
        label-for="input-data-1"
        required
        description=""
      >
        <b-form-datepicker  v-model="week1"  close-button reset-button  locale="en"></b-form-datepicker>
        
      </b-form-group>
     
        
      <b-button @click="updatedocument(key,text1,text2,week1)" variant="primary">Update</b-button>&nbsp;
      <b-button type="reset" variant="warning">Clean</b-button>&nbsp;
       <b-button @click="Delete(key)" variant="danger">Delete</b-button>

    </b-form>
</div>

  </div>
</template>

<script>
import firebase from '../components/firebase'
var database = firebase.database()
var documentRef = database.ref('/document')

   export default {
    
    data() {
  
      return {   documents :{},
         file:null,
         file2:null
         
 
      }
    },
    methods: {
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.text1 = ''
         this.text2 = ''
          this.file = ''
           this.file2 = ''
           this.week1 = null
      },OnBack(){
         window.history.back();
      }
       ,show (key, document) {
      this.text1 = document.name
      this.text2 = document.detail
     this.week1 = document.week 
     this.text4 = document.docname 
      
          },Delete(key){
      documentRef.child(key).remove()
      window.history.back();
      
    },
     updatedocument(key,text1,text2,week1){
        documentRef.child(key).update({
        name : text1,
        detail : text2,
        week : week1       
      })
    window.history.back();
    }
    },
    mounted () {
    documentRef.orderByKey().equalTo(this.$route.params.key).on('value', (snapshot) => {
      this.documents = snapshot.val()
    })
    
 
  }
  }
</script>

<style>

</style> 