<template> 

  <div class="admin">
<div>
  <b-navbar toggleable="lg"  type="dark" variant="info">
    <div class="container">
      <b-navbar-brand href="/admin">
      <img height="25px" src="https://www.computing.psu.ac.th/th/wp-content/uploads/2018/03/PSU_CoC_ENG.png">
    </b-navbar-brand>
    

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    
    <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav >
        <b-nav-item active href="/admin/res">ทุนวิจัย</b-nav-item>
        <b-nav-item active href="/admin/doc">เอกสาร</b-nav-item>
        <b-nav-item active href="/admin/qus">คำถามที่พบบ่อย(FAQ)</b-nav-item>

     
      </b-navbar-nav>
      
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
            <b-nav-form>
             <b-button  active href="/admin/editdetail" variant="success">แก้ไขข้อมูลการติดต่อ</b-button>
        </b-nav-form>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>Admin</em>
          </template>
          <b-dropdown-item href="/">logout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
    </div>
  </b-navbar>
</div>
 <div class="mt-3 container" >
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

  </div >
   <b-container class="mt-3  bv-example-row">
     <h4>ทุนวิจัย <b-button type="" active href="/admin/researchfundsadd" variant="success">เพิ่ม</b-button></h4>
   <b-list-group style="max-width: 100%;">
     
      <b-list-group-item class="d-flex align-items-center" :key="key" v-for="(research, key) in researchs" :href="'/admin/researchfundsdetail/'+key">
        <img height="25px" src="https://img.icons8.com/cotton/2x/document-1.png">
        <span class="mr-auto" >{{research.name}}</span>
        <b-badge>{{research.week1}}</b-badge>
      </b-list-group-item>
        <div class="overflow-auto mt-3">
      <b-pagination 
      v-model="currentPage"    
      :total-rows="repage"
      :per-page="perPage"
      pills 
      v-on:change="changePage" align="right"
    ></b-pagination>
       </div>
    </b-list-group>
   </b-container>
      <b-container class="mt-3 bv-example-row">
     <h4>เอกสาร <b-button type="" active href="/admin/documentadd" variant="success">เพิ่ม</b-button></h4>
   <b-list-group style="max-width: 100%;">
     
    <b-list-group-item  class="d-flex align-items-center" :key="key" v-for="(document, key) in documents" :href="'/admin/documentdetail/'+key">
        <img height="25px" src="https://img.icons8.com/ios/452/document.png">
        <span class="mr-auto" >{{document.name}}</span>
        <b-badge>{{document.week}}</b-badge>
      </b-list-group-item>
     
           <div class="overflow-auto mt-3">
      <b-pagination 
      v-model="currentPage1"    
      :total-rows="docpage"
      :per-page="perPage1"
      pills 
      v-on:change="changePage1" align="right"
    ></b-pagination>
       </div>
    </b-list-group>
   </b-container>
      <b-container class="mt-3 bv-example-row">
     <h4>คำถามที่พบบ่อย(FAQ) <b-button type="" active href="/admin/addquestion" variant="success">เพิ่ม</b-button></h4>
   <b-list-group style="max-width: 100%;">     
      <b-list-group-item class="d-flex align-items-center" :href="'/admin/questiondetail/'+key" :key="key" v-for="(question, key) in questions">
       <img height="25px" src="https://icons-for-free.com/iconfiles/png/512/question+icon-1320195549329729185.png" >
        <span class="mr-auto" >{{question.name}}</span>       
      </b-list-group-item>   
              <div class="overflow-auto mt-3">
      <b-pagination 
      v-model="currentPage2"    
      :total-rows="quespage"
      :per-page="perPage2"
      pills 
      v-on:change="changePage2" align="right"
    ></b-pagination>
       </div> 
    </b-list-group>
   </b-container>
  
 
</div>
</template>

<script> 
import firebase from "../components/firebase";

var database = firebase.database()
var documentRef = database.ref('/document')
var questionRef = database.ref('/question')
var researchRef = database.ref('/research')
export default {
 
  data () {
    return {
       perPage: 4,
      currentPage: 1,
       perPage1: 4,
      currentPage1: 1,
         perPage2: 4,
      currentPage2: 1,
      questions: {},
      documents: {},
      researchs: {},
      repage :{},
      quespage:{},
      docpage:{},
      dataList: [],
      dataList1: [],
      dataList2: []     
    }
  },methods:{
    changePage(page) {
      this.researchs = {};
      this.dataList.slice((page - 1) * this.perPage, page * this.perPage).forEach((item) => {
        this.researchs[item[0]] = item[1];
      })
    },
      changePage1(page) {
      this.documents = {};
      this.dataList1.slice((page - 1) * this.perPage1, page * this.perPage1).forEach((item) => {
        this.documents[item[0]] = item[1];
      })
    },
     changePage2(page) {
      this.questions = {};
      this.dataList2.slice((page - 1) * this.perPage2, page * this.perPage2).forEach((item) => {
        this.questions[item[0]] = item[1];
      })
    }
  },mounted () {
    questionRef.on('value', (snapshot) => {
       this.dataList2 = Object.entries(snapshot.val());

      this.dataList2.slice((this.currentPage2 - 1) * this.perPage2, this.currentPage2 * this.perPage2).forEach((item) => {
        this.questions[item[0]] = item[1];
      })
      const val = snapshot.val();
      const arr = Object.values(val);//เปลี่ยงจาก Oject เป็น Area
      this.quespage = arr.length
    }),  
   documentRef.on('value', (snapshot) => {
       this.dataList1 = Object.entries(snapshot.val());

      this.dataList1.slice((this.currentPage1 - 1) * this.perPage1, this.currentPage1 * this.perPage1).forEach((item) => {
        this.documents[item[0]] = item[1];
      })
      const val = snapshot.val();
      const arr = Object.values(val);//เปลี่ยงจาก Oject เป็น Area
      this.docpage = arr.length
    }),
      researchRef.on('value', (snapshot) => {
      this.dataList = Object.entries(snapshot.val());

      this.dataList.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage).forEach((item) => {
        this.researchs[item[0]] = item[1];
      })
      const val = snapshot.val();
      const arr = Object.values(val);//เปลี่ยงจาก Oject เป็น Area
      this.repage = arr.length
 
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