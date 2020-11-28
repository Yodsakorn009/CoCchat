<template> 

  <div class="mainquestion">
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
        <b-nav-item active href="/question">คำถามที่พบบ่อย(FAQ)</b-nav-item>
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

   <b-container class="mt-3">
     <h2>คำถามที่พบบ่อย(FAQ)</h2>
     <center> <img height="230px" weight=auto  src="https://firebasestorage.googleapis.com/v0/b/chatbot01-hucg.appspot.com/o/73-738732_transparent-green-question-mark-png-questions-mark-in.jpg?alt=media&token=942f85bb-d0a6-4cca-99c9-e4f795e571d5"></center>
     </b-container>
     <b-container class="mt-3"  :key="key" v-for="(question, key) in questions">
        <p>{{question.name}}</p>
        <div class="container mt-3">
            ข้อมูล<br> <div class="container">
            <p style="white-space: pre-line;">{{question.detail}}</p>
          </div>
        </div>
        <div class="container mt-3">
            สำนักวิจัยและพัฒนา<br> 
            <p style="white-space: pre-line;">{{question.web}}</p>
           
           
        </div>
     </b-container>
   
 
</div>


</template>

<script> 
import firebase from '../components/firebase'
var database = firebase.database()
var questionRef = database.ref('/question')
export default {
    data() {
      return {
       questions: {}
      }
    },
    mounted () {
    questionRef.orderByKey().equalTo(this.$route.params.key).on('value', (snapshot) => {
      this.questions = snapshot.val()
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