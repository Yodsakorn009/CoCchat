<template> 

  <div class="question-admin">
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
 <div class="mt-3 container" >
      </div >
   <b-container class="mt-3">
    
     <b-row>
     <b-col lg="6">
     <h2>คำถามที่พบบ่อย(FAQ) <b-button type="" active href="/admin/addquestion" variant="success">เพิ่ม</b-button></h2></b-col></b-row>
      <b-row>
      <b-col lg="6" class="my-2">
        <b-form-group
          label="เรียงโดย"
          label-cols-sm="15"
          label-align-sm="left"
          label-size="sm"
          label-for="sortBySelect"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-select v-model="sortDesc" size="sm" v-on:change="changeType" class="w-10">
              <option :value="false">ก-ฮ</option>
              <option :value="true">ฮ-ก</option>
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col lg="6" class="my-2">
        <b-form-group
          label="ค้นหา"
          label-cols-sm="2"
          label-align-sm="right"
          label-size="sm"
          label-for="filterInput"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              v-model="filters"
              type="search"
              id="filterInput"
              placeholder="Type to Search"
              v-on:input="search"
            ></b-form-input>
          
            
          </b-input-group>
          
        </b-form-group>
      </b-col>
      
      </b-row>
      <br>
     
   <b-list-group style="max-width: 100%;">
     
         <b-list-group-item class="d-flex align-items-center" :href="'/admin/questiondetail/'+key" :key="key" v-for="(question, key) in questions">
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

const sortData = (dataList,sortDesc) => {
  return dataList.sort((a, b) => {
      const aData = a[1];
      const bData = b[1];
            return sortDesc ? bData.name.localeCompare(aData.name) : aData.name.localeCompare(bData.name) 
      
  })
}

// const searchData = (dataList, search) => {
//   return dataList.filter(item => item[1].name.indexOf(search) >= 0)
// }

const selectPage = (dataList, page, pageSize) => {
  return dataList.slice((page - 1) * pageSize, page * pageSize)
}


export default {
 
  data () {
    return {perPage: 10,
      currentPage: 1,
        questions: {},
      dataList: [],
      quespage:{}  
      ,sortDesc:false
      ,filters:""
      
      
    }
  }, methods: {
    changePage(page) {
      this.questions = {};

       const sortedData = sortData(this.dataList,this.sortDesc);
       const pagedData = selectPage(sortedData, page, this.perPage);

       pagedData.forEach(item => {
         this.questions[item[0]] = item[1];
       })

     
      this.quespage = sortedData.length;

    },
    changeType() {
      const sortedData = sortData(this.dataList,this.sortDesc);
      const pagedData = selectPage(sortedData, this.currentPage, this.perPage);

      this.questions = {};

       pagedData.forEach(item => {
         this.questions[item[0]] = item[1];
       });

       this.quespage = sortedData.length;
    },
      search(){   
   questionRef.on("value", (snapshot) => {

      this.dataList = Object.entries(snapshot.val());
      this.questions = {};
   
      let filteredList = this.dataList
      filteredList = filteredList.filter(item => item[1].name.indexOf(this.filters) >= 0);
      //  &&item[1].category.indexOf("")
      const pagedData = selectPage(filteredList, this.currentPage, this.perPage);
        pagedData.forEach((item) => {
          this.questions[item[0]] = item[1];
        })
     
      this.quespage = filteredList.length;
  
    })}
  },
  mounted() {
    questionRef.on("value", (snapshot) => {

      this.dataList = Object.entries(snapshot.val());

       const sortedData = sortData(this.dataList,this.sortDesc);
       const pagedData = selectPage(sortedData, this.currentPage, this.perPage);

       pagedData.forEach(item => {
         this.questions[item[0]] = item[1];
       })

     
      this.quespage = sortedData.length;
    });
  },
};
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