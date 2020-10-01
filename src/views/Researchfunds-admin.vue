<template> 
  <div class="research-admin">
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
 <div class="mt-3 container" >
      </div >
   <b-container class="mt-3">
     <h2>ทุนวิจัย <b-button type="a" active href="/admin/researchfundsadd" variant="success">Add</b-button></h2>
   <b-list-group style="max-width: 100%;">
     
       <b-list-group-item class="d-flex align-items-center" href="/admin/researchfundsdetail">
        <img height="25px" src="https://img.icons8.com/cotton/2x/document-1.png">
        <span class="mr-auto" >ทุนวิจัย1</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center" href="/admin/researchfundsdetail">
          <img height="25px" src="https://img.icons8.com/cotton/2x/document-1.png">
        <span class="mr-auto" >ทุนวิจัย2</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center" href="/admin/researchfundsdetail">
          <img height="25px" src="https://img.icons8.com/cotton/2x/document-1.png">
        <span class="mr-auto" >ทุนวิจัย3</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center" href="/admin/researchfundsdetail">
         <img height="25px" src="https://img.icons8.com/cotton/2x/document-1.png" >
        <span class="mr-auto" >ทุนวิจัย4</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/admin/researchfundsdetail">
         <img height="25px" src="https://img.icons8.com/cotton/2x/document-1.png" >
        <span class="mr-auto" >ทุนวิจัย5</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/admin/researchfundsdetail">
         <img height="25px" src="https://img.icons8.com/cotton/2x/document-1.png" >
        <span class="mr-auto" >ทุนวิจัย6</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/admin/researchfundsdetail">
         <img height="25px" src="https://img.icons8.com/cotton/2x/document-1.png" >
        <span class="mr-auto" >ทุนวิจัย7</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/admin/researchfundsdetail">
         <img height="25px" src="https://img.icons8.com/cotton/2x/document-1.png" >
        <span class="mr-auto" >ทุนวิจัย8</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/admin/researchfundsdetail">
         <img height="25px" src="https://img.icons8.com/cotton/2x/document-1.png" >
        <span class="mr-auto" >ทุนวิจัย9</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/admin/researchfundsdetail">
         <img height="25px" src="https://img.icons8.com/cotton/2x/document-1.png" >
        <span class="mr-auto" >ทุนวิจัย10</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/admin/researchfundsdetail">
         <img height="25px" src="https://img.icons8.com/cotton/2x/document-1.png" >
        <span class="mr-auto" >ทุนวิจัย11</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/admin/researchfundsdetail">
         <img height="25px" src="https://img.icons8.com/cotton/2x/document-1.png" >
        <span class="mr-auto" >ทุนวิจัย12</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/admin/researchfundsdetail">
         <img height="25px" src="https://img.icons8.com/cotton/2x/document-1.png" >
        <span class="mr-auto" >ทุนวิจัย13</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/admin/researchfundsdetail">
         <img height="25px" src="https://img.icons8.com/cotton/2x/document-1.png" >
        <span class="mr-auto" >ทุนวิจัย14</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/admin/researchfundsdetail">
         <img height="25px" src="https://img.icons8.com/cotton/2x/document-1.png" >
        <span class="mr-auto" >ทุนวิจัย15</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/admin/researchfundsdetail">
         <img height="25px" src="https://img.icons8.com/cotton/2x/document-1.png" >
        <span class="mr-auto" >ทุนวิจัย16</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/admin/researchfundsdetail">
         <img height="25px" src="https://img.icons8.com/cotton/2x/document-1.png" >
        <span class="mr-auto" >ทุนวิจัย17</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/admin/researchfundsdetail">
         <img height="25px" src="https://img.icons8.com/cotton/2x/document-1.png" >
        <span class="mr-auto" >ทุนวิจัย18</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/admin/researchfundsdetail">
         <img height="25px" src="https://img.icons8.com/cotton/2x/document-1.png" >
        <span class="mr-auto" >ทุนวิจัย19</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
      
     
    </b-list-group>
   </b-container>
   
 
</div>


</template>

<script> 
export default {
    name : 'research'
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