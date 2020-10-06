<template> 

  <div class="admin">
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <div class="container">
      <b-navbar-brand href="/admin">
      <img height="25px" src="https://www.computing.psu.ac.th/th/wp-content/uploads/2018/03/PSU_CoC_ENG.png">
    </b-navbar-brand>
    

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    
    <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav >
        <b-nav-item active href="/admin/res">ทุนวิจัย</b-nav-item>
        <b-nav-item active href="/admin/doc">เอกสาร</b-nav-item>
        <b-nav-item active href="/admin/qus">คำถามทั่วไป</b-nav-item>
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
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="PSU PHUKET CAMPUS"
        text="Prince of Songkla University"
        img-src="https://www.psu.ac.th/sites/files/n7424_ft160603_01.png"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>


    </b-carousel>

  </div >
   <b-container class="mt-3  bv-example-row">
     <h4>ทุนวิจัย <b-button type="" active href="/admin/researchfundsadd" variant="success">Add</b-button></h4>
   <b-list-group style="max-width: 100%;">
     
      <b-list-group-item class="d-flex align-items-center" :key="key" v-for="(research, key) in researchs" href="/admin/researchfundsdetail">
        <img height="25px" src="https://img.icons8.com/cotton/2x/document-1.png">
        <span class="mr-auto" >{{research.name}}</span>
        <b-badge>{{research.week}}</b-badge>
      </b-list-group-item>
     
    </b-list-group>
   </b-container>
      <b-container class="mt-3 bv-example-row">
     <h4>เอกสาร <b-button type="" active href="/admin/documentadd" variant="success">Add</b-button></h4>
   <b-list-group style="max-width: 100%;">
     
    <b-list-group-item  class="d-flex align-items-center" :key="key" v-for="(document, key) in documents" :href="'/admin/documentdetail/'+key">
        <img height="25px" src="https://img.icons8.com/ios/452/document.png">
        <span class="mr-auto" >{{document.name}}</span>
        <b-badge>{{document.week}}</b-badge>
      </b-list-group-item>
     
     
    </b-list-group>
   </b-container>
      <b-container class="mt-3 bv-example-row">
     <h4>คำถามทั่วไป <b-button type="" active href="/admin/addquestion" variant="success">Add</b-button></h4>
   <b-list-group style="max-width: 100%;">     
      <b-list-group-item class="d-flex align-items-center" :href="'/admin/questiondetail/'+key" :key="key" v-for="(question, key) in questions">
       <img height="25px" src="https://icons-for-free.com/iconfiles/png/512/question+icon-1320195549329729185.png" >
        <span class="mr-auto" >{{question.name}}</span>       
      </b-list-group-item>    
    </b-list-group>
   </b-container>
   <div class="container mt-3"> <center>
<b-button :pressed.sync="myToggle" active href="/admin/editdetail" variant="primary">Edit Detail bar</b-button></center>
   </div>
 
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
       questions: {},
        documents: {},
      researchs: {}     
    }
  },mounted () {
    questionRef.on('value', (snapshot) => {
      this.questions = snapshot.val()
    }),
   documentRef.on('value', (snapshot) => {
      this.documents = snapshot.val()
    }),
      researchRef.on('value', (snapshot) => {
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
</style>