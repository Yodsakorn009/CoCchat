<template> <div class="mt-3  bg-info text-white" >
   
     <div class="text-center" :key="key" v-for="(detailbar, key) in detailbars" >
   {{detailbar.name}}<br>{{detailbar.address}}<br>{{detailbar.tel}}<br>{{detailbar.web}}
    
</div>
   </div> 
</template>

<script>
// import query from './mysql';


// export default {
//   data() {
//     return {
//       data: [{
//         name: '',
//         address: '',
//         tel: '',
//         web: ''
//       }]
//     }
//   },
//   mounted() {
//     console.log('fetch data')
//     query(`SELECT * FROM detailbar`).then(result => {
//       console.log('result', result)

//       this.data = result
//     })
//   }
// }
 import firebase from "../components/firebase";

var database = firebase.database()

var detailbarRef = database.ref('/detailbar')

   export default {
    data() {
      return {      
         detailbars: {}    
       
      }
    } , mounted () {
    detailbarRef.on('value', (snapshot) => {
      this.detailbars = snapshot.val()
    })
  }
  }
</script>

<style>

</style>