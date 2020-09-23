<template> 

  <div class="home">
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <div class="container">
      <b-navbar-brand href="#">
      <img height="25px" src="https://www.computing.psu.ac.th/th/wp-content/uploads/2018/03/PSU_CoC_ENG.png">
    </b-navbar-brand>
    

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav >
        <b-nav-item active href="#">ทุนวิจัย</b-nav-item>
        <b-nav-item active href="#">เอกสาร</b-nav-item>
        <b-nav-item active href="#">คำถามทั่วไป</b-nav-item>
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
        caption="PSU"
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
     <h4>ทุนวิจัย</h4>
   <b-list-group style="max-width: 100%;">
     
      <b-list-group-item class="d-flex align-items-center" href="#">
        <img height="25px" src="https://img.icons8.com/cotton/2x/document-1.png">
        <span class="mr-auto" >BootstrapVue</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center" href="#">
          <img height="25px" src="https://img.icons8.com/cotton/2x/document-1.png">
        <span class="mr-auto" >BootstrapVue</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center" href="#">
          <img height="25px" src="https://img.icons8.com/cotton/2x/document-1.png">
        <span class="mr-auto" >BootstrapVue</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center" href="#">
         <img height="25px" src="https://img.icons8.com/cotton/2x/document-1.png" >
        <span class="mr-auto" >BootstrapVue</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
     
    </b-list-group>
   </b-container>
      <b-container class="mt-3 bv-example-row">
     <h4>เอกสาร</h4>
   <b-list-group style="max-width: 100%;">
     
      <b-list-group-item class="d-flex align-items-center" href="#">
      <img height="25px" src="https://img.icons8.com/ios/452/document.png" >
        <span class="mr-auto" >BootstrapVue</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center" href="#">
       <img height="25px" src="https://img.icons8.com/ios/452/document.png"  >
        <span class="mr-auto" >BootstrapVue</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center" href="#">
        <img height="25px" src="https://img.icons8.com/ios/452/document.png" >
        <span class="mr-auto" >BootstrapVue</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center" href="#">
       <img height="25px" src="https://img.icons8.com/ios/452/document.png"  >
        <span class="mr-auto" >BootstrapVue</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
     
    </b-list-group>
   </b-container>
      <b-container class="mt-3 bv-example-row">
     <h4>คำถามทั่วไป</h4>
   <b-list-group style="max-width: 100%;">
     
      <b-list-group-item class="d-flex align-items-center" href="#">
       <img height="25px" src="https://icons-for-free.com/iconfiles/png/512/question+icon-1320195549329729185.png" >
        <span class="mr-auto" >BootstrapVue</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center" href="#">
        <img height="25px" src="https://icons-for-free.com/iconfiles/png/512/question+icon-1320195549329729185.png"  >
        <span class="mr-auto" >BootstrapVue</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center" href="#">
        <img height="25px" src="https://icons-for-free.com/iconfiles/png/512/question+icon-1320195549329729185.png" >
        <span class="mr-auto" >BootstrapVue</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center" href="#">
        <img height="25px" src="https://icons-for-free.com/iconfiles/png/512/question+icon-1320195549329729185.png"  >
        <span class="mr-auto" >BootstrapVue</span>
        <b-badge>12-2-2563</b-badge>
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