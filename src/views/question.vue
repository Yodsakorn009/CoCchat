<template> 

  <div class="question">
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
 <div class="mt-3 container" >
      </div >
   <b-container class="mt-3" >
     <h2>คำถามทั่วไป</h2>
   <b-list-group style="max-width: 100%;" >
     
      <b-list-group-item class="d-flex align-items-center" :href="'/mainquestion/'+key" :key="key" v-for="(question, key) in questions">
       <img height="25px" src="https://icons-for-free.com/iconfiles/png/512/question+icon-1320195549329729185.png" >
        <span class="mr-auto" >{{question.name}}</span>       
      </b-list-group-item>
      <div class="overflow-auto mt-3">
      <b-pagination 
      v-model="currentPage"    
      :total-rows="quespage"
      :per-page="perPage"
      pills 
      v-on:change="changePage" align="right"
    ></b-pagination>
       </div>
    </b-list-group>
   </b-container>
   
 
</div>


</template>

<script> 
import firebase from "../components/firebase";

var database = firebase.database()

var questionRef = database.ref('/question')

export default {
 
  data () {
    return {perPage: 10,
      currentPage: 1,
        questions: {},
      dataList: [],
      quespage:{}  
      
      
    }
  },methods:{
    changePage(page) {
      this.questions = {};
      this.dataList.slice((page - 1) * this.perPage, page * this.perPage).forEach((item) => {
        this.questions[item[0]] = item[1];
      })
    }},
  mounted () {
    questionRef.on('value', (snapshot) => {
       this.dataList = Object.entries(snapshot.val());

      this.dataList.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage).forEach((item) => {
        this.questions[item[0]] = item[1];
      })
      const val = snapshot.val();
      const arr = Object.values(val);//เปลี่ยงจาก Oject เป็น Area
      this.quespage = arr.length
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