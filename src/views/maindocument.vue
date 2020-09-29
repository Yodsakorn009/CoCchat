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
     <h2>คำถามทั่วไป</h2>
     </b-container>
     
     <div class="text-center">
         <h4>หนังสือขออนุมัติงบประมาณ</h4>
          <br>
          <img height="190px" src="https://assets-global.website-files.com/583347ca8f6c7ee058111b55/5afc770caa130421393fa412_google-doc-error-message.png">          
         
    </div><br>
    <div class="container">
      คำอธิบายเบื้องต้น :
      <div class="container">
    ขออนุมัติงบประมาณรายจ่ายประจำปีงบประมาณ พ.ศ. 2558 งบกลาง รายการเงินสำรองจ่ายเพื่อกรณีฉุกเฉินหรือจำเป็น เพื่อเป็นค่าใช้จ่าย ของมหาวิทยาลัย
    </div><br>
    </div>
     <div class="container">
      ดาวน์โหลดไฟล์ที่เกี่ยวข้อง :
      <div class="text-center">
    <a href="">หนังสือขออนุมัติงบประมาณ.PDF</a>
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