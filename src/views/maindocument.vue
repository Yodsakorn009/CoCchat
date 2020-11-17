<template> 

  <div class="maindocument">
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <div class="container">
      <b-navbar-brand href="/">
      <img height="25px" src="https://www.computing.psu.ac.th/th/wp-content/uploads/2018/03/PSU_CoC_ENG.png">
    </b-navbar-brand>
    

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    
    <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav >
        <b-nav-item active href="/Research">ทุนวิจัย</b-nav-item>
        <b-nav-item active href="/document">เอกสาร</b-nav-item>
        <b-nav-item active href="/question">คำถามทั่วไป</b-nav-item>
      </b-navbar-nav>
      
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
         <b-nav-form>
          <b-form-input size="s" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="s" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>Admin</em>
          </template>
          <b-dropdown-item href="/login">login</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
    </div>
  </b-navbar>
</div>

   <b-container class="mt-3">
     <h2>เอกสารทั่วไป</h2>
     </b-container>
     <div :key="key" v-for="(document, key) in documents">
     <div class="text-center">
         <h4>{{document.name}}</h4>
          <br>
          <img height="190px" src="https://assets-global.website-files.com/583347ca8f6c7ee058111b55/5afc770caa130421393fa412_google-doc-error-message.png">          
         
    </div><br>
    <div class="container">
      คำอธิบายเบื้องต้น : 
      <div class="container">   เนื้อความ :
         <div class="container"><p style="white-space: pre-line;">{{document.detail}}</p>
         </div>
    </div><br>
    </div>
    <div class="container">
      เวลาที่อัพโหลดเอกสาร :
      <div class="container">
    {{document.week}}
    </div><br>
    </div>
     <div class="container">
      ดาวน์โหลดไฟล์ที่เกี่ยวข้อง :
      <div class="text-center">
    <a @click="h(document)" style="color:blue">{{document.docname}}</a>
    </div>
    </div>
     </div>
   
 
</div>


</template>

<script> 

import firebase from '../components/firebase'
var database = firebase.database()
var documentRef = database.ref('/document')
export default {
    data() {
      return {
       documents: {}
      }
    },
    methods: {
         
    h(research) {  const storage = firebase.storage();
         storage.ref(`document/document/${research.docname}`).getDownloadURL()
      .then((url) => {
         console.log(url);
           window.location.href = url
         })
 
          }
    },
    mounted () {
   documentRef.orderByKey().equalTo(this.$route.params.key).on('value', (snapshot) => {
      this.documents = snapshot.val()
    })
  }
  }

</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>