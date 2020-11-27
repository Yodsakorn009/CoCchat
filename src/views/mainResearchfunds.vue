<template> 

  <div class="mainResearchfunds">
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
   <b-container class="mt-3" :key="key" v-for="(research, key) in researchs">
       <b-form v-on="picon(research)"></b-form>
     <h2>ทุนวิจัย</h2>
    
     <div class="text-center">
         <h4>{{research.name}}</h4>
         <br>
          <img height="230px" weight=auto  :src="pic">
    </div><br>
    <div class="container">     
    ดาวน์โหลดไฟล์ที่เกี่ยวข้อง :  <a class="pointer" @click="h(research)" style="color:blue">{{research.docname}}</a>
    </div>
     <div class="container">
   วันที่ประกาศ : {{research.firstweek}}
    </div>
     <div class="container">
    วันหมดเขตของโครงการ : {{research.endweek}}
    </div>
     <div class="container">
       
    เนื้อความ :  <div class="container"><p style="white-space: pre-line;">{{research.detail}} </p>

</div>
    </div>
     <div class="container">
    การสนับสนุน :
    <div class="container"><p style="white-space: pre-line;">{{research.value}} </p>
</div>

    </div>
     <div class="container">
    ประเภท :
{{research.category}} 

    </div>
 </b-container>
 
   
   
 
</div>


</template>

<script> 
import firebase from '../components/firebase'
var database = firebase.database()
var researchRef = database.ref('/research')

export default {
    data() {
      return {
       researchs: {}
      }
    },
    methods: {
      picon(research){
           if(research.category=="ทุนภายนอกมหาวิทยาลัย"){
            this.pic="https://firebasestorage.googleapis.com/v0/b/chatbot01-hucg.appspot.com/o/pngtree-lovely-landscape-outside-the-window-window-png-image_463632.jpg?alt=media&token=78ca3238-79a7-4452-b13b-5b6e31e068cf"
          }else if(research.category=="ทุนภายในคณะวิทยาลัยการคอมพิวเตอร์"){
               this.pic="https://firebasestorage.googleapis.com/v0/b/chatbot01-hucg.appspot.com/o/coc.png?alt=media&token=44a0dee3-b0a4-423b-ad32-91a4e8ef88f1"
          }
         else {
         this.pic="https://firebasestorage.googleapis.com/v0/b/chatbot01-hucg.appspot.com/o/Logo-PSU-EH-01.png?alt=media&token=58eb28ac-aef5-42ee-837c-bd38202faf71"
          }
      },
         
    h(research) {  const storage = firebase.storage();
         storage.ref(`research/document/${research.docname}`).getDownloadURL()
      .then((url) => {
         console.log(url);
           window.location.href = url
         })
 
       
          }
    },
    
    mounted () {
   
  researchRef.orderByKey().equalTo(this.$route.params.key).on('value', (snapshot) => {
      this.researchs = snapshot.val()
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
.pointer {cursor: pointer;}
</style>