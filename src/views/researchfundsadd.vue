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
        label="ชื่อ:"
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
        <b-form-datepicker  v-model="week1" close-button reset-button locale="en"></b-form-datepicker>
        
      </b-form-group>
       <b-form-group
        id="input-data-2"
        label="Data End:"
        label-for="input-data-2"
      
        description=""
      >
        <b-form-datepicker  v-model="week2" close-button reset-button locale="en"></b-form-datepicker>
        
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
        label="ข้อมูล:"
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
        id="input-group-2"
        label="การสนับสนุน:"
        label-for="input-3"
        description=""
      >
        <b-form-textarea
          id="input-3"
          v-model="text3"
          type="text"
          required
           rows="2"
      max-rows="6"
          placeholder="Text Area (รายระเอียด)"
        ></b-form-textarea>
        
      </b-form-group>

            <b-form-group
        id="input-group-4"
        label="File:"
        label-for="input-4"
        description="* 
เอกสาารต่างๆสามารถอัพโหลดได้โดยเป็น (PDF)"
      >
        <b-form-file
          id="input-4"
          v-model="file1"
          :state="Boolean(file1)"         
          placeholder="Enter File"
          accept=".pdf"
        ></b-form-file>
        
      </b-form-group>
        <b-form-group
        id="input-group-5"
        label="Photo:"
        label-for="input-5"
        description="* ไม่จำเป็นต้องเพิ่มไฟล์รูปภาพหากไม่มี
"
      >
        <b-form-file
          id="input-5"
          v-model="file2"
          :state="Boolean(file2)"         
          placeholder="Enter File"
          accept="image/*"
        ></b-form-file>
        
      </b-form-group>
        
<div>
      <p>Progress:  {{uploadValue.toFixed()+"%"}}
      <progress id="progress" :value="uploadValue" max="100" ></progress>  </p>
    </div>
  <a :href="picture">test</a>        <br>
      <b-button @click="researchadd( text1,selected,text2,week1,week2,text3,file1,file2)" variant="primary">Add</b-button>&nbsp;
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
     

      return { picture: null,
        uploadValue: 0,
            text1: '',
            text2: '',    
            text3: '',   
          file1: null,
          file2: null,
          week1: '',
          week2: '',
          form: {
            text1: '',
            text2: '',    
            text3: '',   
          file1: null,
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
        this.text1 = ''
         this.text2 = ''
         this.text3 = ''
         this.file1 = ''
         this.file2 = ''
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
      },researchadd( text1,selected,text2,week1,week2,text3,file1,file2){   
        this.picture=null;
      let data = {
        name: text1,
        firstweek : week1,
        endweek: week2,
        detail: text2,
        category : selected,
        value : text3,
        docname : file1.name,
        photoname : file2.name
     
      }
        researchRef.push(data)
        const storageRef=(firebase.storage().ref(`research/document/${file1.name}`).put(file1),firebase.storage().ref(`research/photo/${file2.name}`).put(file2)); 
        storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100;
       storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.picture =url;
          console.log(url)
        });
      }
      );
        
     
      
    }
    
      
    }
  }
</script>

<style>

</style> 