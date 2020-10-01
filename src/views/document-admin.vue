<template> 

  <div class="document-admin">
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
     <h2>เอกสาร <b-button type="" active href="/admin/documentadd" variant="success">Add</b-button></h2>
   <b-list-group style="max-width: 100%;">
     
      <b-list-group-item class="d-flex align-items-center" href="/maindocument">
        <img height="25px" src="https://img.icons8.com/ios/452/document.png">
        <span class="mr-auto" >เอกสาร1</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item><b-list-group-item class="d-flex align-items-center" href="/maindocument">
        <img height="25px" src="https://img.icons8.com/ios/452/document.png">
        <span class="mr-auto" >เอกสาร2</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/maindocument">
        <img height="25px" src="https://img.icons8.com/ios/452/document.png">
        <span class="mr-auto" >เอกสาร3</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/maindocument">
        <img height="25px" src="https://img.icons8.com/ios/452/document.png">
        <span class="mr-auto" >เอกสาร4</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/maindocument">
        <img height="25px" src="https://img.icons8.com/ios/452/document.png">
        <span class="mr-auto" >เอกสาร5</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/maindocument">
        <img height="25px" src="https://img.icons8.com/ios/452/document.png">
        <span class="mr-auto" >เอกสาร6</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/maindocument">
        <img height="25px" src="https://img.icons8.com/ios/452/document.png">
        <span class="mr-auto" >เอกสาร7</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/maindocument">
        <img height="25px" src="https://img.icons8.com/ios/452/document.png">
        <span class="mr-auto" >เอกสาร8</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/maindocument">
        <img height="25px" src="https://img.icons8.com/ios/452/document.png">
        <span class="mr-auto" >เอกสาร9</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/maindocument">
        <img height="25px" src="https://img.icons8.com/ios/452/document.png">
        <span class="mr-auto" >เอกสาร10</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/maindocument">
        <img height="25px" src="https://img.icons8.com/ios/452/document.png">
        <span class="mr-auto" >เอกสาร11</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/maindocument">
        <img height="25px" src="https://img.icons8.com/ios/452/document.png">
        <span class="mr-auto" >เอกสาร12</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/maindocument">
        <img height="25px" src="https://img.icons8.com/ios/452/document.png">
        <span class="mr-auto" >เอกสาร13</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/maindocument">
        <img height="25px" src="https://img.icons8.com/ios/452/document.png">
        <span class="mr-auto" >เอกสาร14</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/maindocument">
        <img height="25px" src="https://img.icons8.com/ios/452/document.png">
        <span class="mr-auto" >เอกสาร15</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/maindocument">
        <img height="25px" src="https://img.icons8.com/ios/452/document.png">
        <span class="mr-auto" >เอกสาร16</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/maindocument">
        <img height="25px" src="https://img.icons8.com/ios/452/document.png">
        <span class="mr-auto" >เอกสาร17</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/maindocument">
        <img height="25px" src="https://img.icons8.com/ios/452/document.png">
        <span class="mr-auto" >เอกสาร18</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/maindocument">
        <img height="25px" src="https://img.icons8.com/ios/452/document.png">
        <span class="mr-auto" >เอกสาร19</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/maindocument">
        <img height="25px" src="https://img.icons8.com/ios/452/document.png">
        <span class="mr-auto" >เอกสาร20</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/maindocument">
        <img height="25px" src="https://img.icons8.com/ios/452/document.png">
        <span class="mr-auto" >เอกสาร21</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="/maindocument">
        <img height="25px" src="https://img.icons8.com/ios/452/document.png">
        <span class="mr-auto" >เอกสาร22</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
    </b-list-group>
   </b-container>
   
 
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