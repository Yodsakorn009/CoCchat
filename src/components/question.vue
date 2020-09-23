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
         <b-nav-form>
          <b-form-input size="s" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="s" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>Admin</em>
          </template>
          <b-dropdown-item href="#">login</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
    </div>
  </b-navbar>
</div>
 <div class="mt-3 container" >
      </div >
   <b-container class="mt-3">
     <h2>คำถามทั่วไป</h2>
   <b-list-group style="max-width: 100%;">
     
      <b-list-group-item class="d-flex align-items-center" href="/mainquestion">
       <img height="25px" src="https://icons-for-free.com/iconfiles/png/512/question+icon-1320195549329729185.png" >
        <span class="mr-auto" >คำถามทั่วไป1</span>       
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/mainquestion">
       <img height="25px" src="https://icons-for-free.com/iconfiles/png/512/question+icon-1320195549329729185.png" >
        <span class="mr-auto" >คำถามทั่วไป2</span>       
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/mainquestion">
       <img height="25px" src="https://icons-for-free.com/iconfiles/png/512/question+icon-1320195549329729185.png" >
        <span class="mr-auto" >คำถามทั่วไป3</span>       
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/mainquestion">
       <img height="25px" src="https://icons-for-free.com/iconfiles/png/512/question+icon-1320195549329729185.png" >
        <span class="mr-auto" >คำถามทั่วไป4</span>       
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/mainquestion">
       <img height="25px" src="https://icons-for-free.com/iconfiles/png/512/question+icon-1320195549329729185.png" >
        <span class="mr-auto" >คำถามทั่วไป5</span>       
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/mainquestion">
       <img height="25px" src="https://icons-for-free.com/iconfiles/png/512/question+icon-1320195549329729185.png" >
        <span class="mr-auto" >คำถามทั่วไป6</span>       
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/mainquestion">
       <img height="25px" src="https://icons-for-free.com/iconfiles/png/512/question+icon-1320195549329729185.png" >
        <span class="mr-auto" >คำถามทั่วไป7</span>       
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/mainquestion">
       <img height="25px" src="https://icons-for-free.com/iconfiles/png/512/question+icon-1320195549329729185.png" >
        <span class="mr-auto" >คำถามทั่วไป8</span>       
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/mainquestion">
       <img height="25px" src="https://icons-for-free.com/iconfiles/png/512/question+icon-1320195549329729185.png" >
        <span class="mr-auto" >คำถามทั่วไป9</span>       
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/mainquestion">
       <img height="25px" src="https://icons-for-free.com/iconfiles/png/512/question+icon-1320195549329729185.png" >
        <span class="mr-auto" >คำถามทั่วไป10</span>       
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/mainquestion">
       <img height="25px" src="https://icons-for-free.com/iconfiles/png/512/question+icon-1320195549329729185.png" >
        <span class="mr-auto" >คำถามทั่วไป11</span>       
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/mainquestion">
       <img height="25px" src="https://icons-for-free.com/iconfiles/png/512/question+icon-1320195549329729185.png" >
        <span class="mr-auto" >คำถามทั่วไป12</span>       
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/mainquestion">
       <img height="25px" src="https://icons-for-free.com/iconfiles/png/512/question+icon-1320195549329729185.png" >
        <span class="mr-auto" >คำถามทั่วไป13</span>       
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/mainquestion">
       <img height="25px" src="https://icons-for-free.com/iconfiles/png/512/question+icon-1320195549329729185.png" >
        <span class="mr-auto" >คำถามทั่วไป14</span>       
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/mainquestion">
       <img height="25px" src="https://icons-for-free.com/iconfiles/png/512/question+icon-1320195549329729185.png" >
        <span class="mr-auto" >คำถามทั่วไป15</span>       
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/mainquestion">
       <img height="25px" src="https://icons-for-free.com/iconfiles/png/512/question+icon-1320195549329729185.png" >
        <span class="mr-auto" >คำถามทั่วไป16</span>       
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/mainquestion">
       <img height="25px" src="https://icons-for-free.com/iconfiles/png/512/question+icon-1320195549329729185.png" >
        <span class="mr-auto" >คำถามทั่วไป17</span>       
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/mainquestion">
       <img height="25px" src="https://icons-for-free.com/iconfiles/png/512/question+icon-1320195549329729185.png" >
        <span class="mr-auto" >คำถามทั่วไป18</span>       
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/mainquestion">
       <img height="25px" src="https://icons-for-free.com/iconfiles/png/512/question+icon-1320195549329729185.png" >
        <span class="mr-auto" >คำถามทั่วไป19</span>       
      </b-list-group-item>

      
     
    </b-list-group>
   </b-container>
   <div class="mt-3  bg-info text-white" >
     <div class="text-center">
    <mediam> วิทยาลัยการคอมพิวเตอร์มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตภูเก็ต<br> 80 หมู่ 1 ถ.วิชิตสงคราม ต.กะทู้ อ.กะทู้ จ.ภูเก็ต 83120 <br>โทร 076-276-471 , 076-276-562 <br>Fax 076-276-453 www.computing.psu.ac.th
    </mediam>
</div>
   </div>
 
</div>


</template>

<script> 
export default {
    data() {
      return {
        value: ''
      }
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