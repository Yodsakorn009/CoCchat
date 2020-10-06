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
    
<h2>ทุนวิจัย</h2>
<b-form class="mt-3" @submit="onSubmit" @reset="onReset" v-if="show">
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
        id="input-data-1"
        label="Data Start:"
        label-for="input-data-1"
      
        description=""
      >
        <b-form-datepicker  v-model="week1" locale="en"></b-form-datepicker>
        
      </b-form-group>
       <b-form-group
        id="input-data-2"
        label="Data End:"
        label-for="input-data-2"
      
        description=""
      >
        <b-form-datepicker  v-model="week2" locale="en"></b-form-datepicker>
        
      </b-form-group>
      <b-form-group
        id="input-data-2"
        label="ประเภทของทุนวิจัย:"
        label-for="input-data-2"
      
        description=""
      >
         <b-form-select  v-model="selected" :options="options"></b-form-select>
        
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
          required
           rows="3"
      max-rows="6"
          placeholder="Text Area (รายระเอียด)"
        ></b-form-textarea>
        
      </b-form-group>
           <b-form-group
        id="input-group-3"
        label="File:"
        label-for="input-3"
        description="*เอกสาารต่างๆสามารถอัพโหลดได้โดยเป็น (PDF)"
      >
        <b-form-file
          id="input-3"
          v-model="file"
          :state="Boolean(file)"
          required
          placeholder="Enter File"
        ></b-form-file>
        
      </b-form-group>
        <b-form-group
        id="input-group-4"
        label="Photo:"
        label-for="input-4"
        description="* ไม่จำเป็นต้องเพิ่มไฟล์รูปภาพหากไม่มี
เอกสาารต่างๆสามารถอัพโหลดได้โดยเป็น (PDF)"
      >
        <b-form-file
          id="input-4"
          v-model="file2"
          :state="Boolean(file2)"         
          placeholder="Enter File"
        ></b-form-file>
        
      </b-form-group>
        

        
      <b-button @click="researchadd( text1,selected,text2,week1,week2)" variant="primary">Add</b-button>&nbsp;
      <b-button type="reset" variant="warning">Reset</b-button>&nbsp;
      

    </b-form>
</div>

  </div>
</template>

<script>
import firebase from "../components/firebase";
var database = firebase.database()
var researchRef = database.ref('/research')
   export default {
    data() {
     

      return {
        form: {
          text1: '',
          text2: '',     
        file: null,
         file2: null,
        week1: '',
        week2: ''
 
        },       
        show: true,
        selected: null,
        options: [
          { value: null, text: 'เลือกประเภททุนวิจัย' },
          { value: 'ทุนภายในมหาวิทยาลัย', text: 'ทุนภายในมหาวิทยาลัย' },
          { value: 'ทุนภายในคณะวิทยาลัยการคอมพิวเตอร์', text: 'ทุนภายในคณะวิทยาลัยการคอมพิวเตอร์' },
          { value: 'ทุนภายนอกมหาวิยลัย', text: 'ทุนภายนอกมหาวิยลัย' },
       
        ]
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
       window.location.href = "/admin"
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.text1 = ''
         this.form.text2 = ''
         this.form.file = ''
         this.form.file2 = ''
         this.week1 = ''
         this.day1 = ''
         this.year1 = ''      
          this.week2 = ''
         this.day2 = ''
         this.year2= ''  
         this.selected = null     
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },OnBack(){
         window.history.back();
      },researchadd( text1,selected,text2,week1,week2){      
      let data = {
        name: text1,
        week1 : week1,
        wwek2: week2,
        detail: text2,
        category : selected
     
      }
     researchRef.push(data)
      window.history.back();
      
    }
      
    }
  }
</script>

<style>

</style> 