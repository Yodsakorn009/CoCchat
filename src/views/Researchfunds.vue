<template>
  <div class="research">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <div class="container">
          <b-navbar-brand href="/">
            <img
              height="25px"
              src="https://www.computing.psu.ac.th/th/wp-content/uploads/2018/03/PSU_CoC_ENG.png"
            />
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
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
    <div class="mt-3 container"></div>
    <b-container class="mt-3">
      <h2>ทุนวิจัย</h2>
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
            <b-form-select v-model="sortBy" class="w-10">
              <template #first>
                <option value="name">-- ชื่อ --</option>
                <option value="date">-- เวลา --</option>
              </template>
            </b-form-select>
            <b-form-select v-model="sorttype" class="w-25">
              <template #first>
                <option value="">-- none --</option>
                <option value="in">-- ทุนภายในคณะวิทยาลัยการคอมพิวเตอร์ --</option>
                <option value="out">-- ทุนภายนอกมหาวิทยาลัย --</option>
                <option value="psu">-- ทุนภายในมหาวิทยาลัย --</option>
              </template>
            </b-form-select>
            <b-form-select v-model="sortDesc" size="sm" class="w-10">
              <option :value="false">Asc</option>
              <option :value="true">Desc</option>
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
              v-model="filter"
              type="search"
              id="filterInput"
              placeholder="Type to Search"
            ></b-form-input>
            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
            
          </b-input-group>
          
        </b-form-group>
      </b-col>
      
      </b-row>
      <b-list-group style="max-width: 100%;">
        <b-list-group-item
          class="d-flex align-items-center"
          :key="key"
          v-for="(research, key) in researchs"
          :href="'/mainResearchfunds/' + key"
        >
          <img
            height="25px"
            src="https://img.icons8.com/cotton/2x/document-1.png"
          />
          <span class="mr-auto">{{ research.name }}</span>
          <b-badge>{{ research.firstweek }}</b-badge>
        </b-list-group-item>

        <div class="overflow-auto mt-3">
          <b-pagination
            v-model="currentPage"
            :total-rows="repage"
            :per-page="perPage"
            pills
            v-on:change="changePage"
            align="right"
          ></b-pagination>
        </div>
      </b-list-group>
    </b-container>
  </div>
</template>

<script>
import firebase from "../components/firebase";

var database = firebase.database();

var researchRef = database.ref("/research");

export default {
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      researchs: {},
      dataList: [],
      repage: {},
      sortBy: "name",
      sorttype: "",
      filter:"",
      sortDesc: false,
    };
  },
  methods: {
    changePage(page) {
      this.researchs = {};
      this.dataList
        .slice((page - 1) * this.perPage, page * this.perPage)
        .forEach((item) => {
       
       this.researchs[item[0]] = item[1];
        });
    },
  },
  mounted() {
    researchRef.on("value", (snapshot) => {
      this.dataList = Object.entries(snapshot.val());
      this.dataList
        .slice(
          (this.currentPage - 1) * this.perPage,
          this.currentPage * this.perPage
        )
        .forEach((item) => {
          this.researchs[item[0]] = item[1];
        });
      const val = snapshot.val();
      const arr = Object.values(val); //เปลี่ยงจาก Oject เป็น Area
      this.repage = arr.length;
    });
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
