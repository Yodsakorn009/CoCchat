<template> 

  <div class="Home">

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
     <h4>ทุนวิจัย</h4>
   <b-list-group style="max-width: 100%;">
     
      <b-list-group-item class="d-flex align-items-center" href="mainResearchfunds">
        <img height="25px" src="https://img.icons8.com/cotton/2x/document-1.png">
        <span class="mr-auto" >ทุนวิจัย1</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center" href="mainResearchfunds">
          <img height="25px" src="https://img.icons8.com/cotton/2x/document-1.png">
        <span class="mr-auto" >ทุนวิจัย2</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center" href="mainResearchfunds">
          <img height="25px" src="https://img.icons8.com/cotton/2x/document-1.png">
        <span class="mr-auto" >ทุนวิจัย3</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center" href="mainResearchfunds">
         <img height="25px" src="https://img.icons8.com/cotton/2x/document-1.png" >
        <span class="mr-auto" >ทุนวิจัย4</span>
        <b-badge>12-2-2563</b-badge>
      </b-list-group-item>
     
    </b-list-group>
   </b-container>
      <b-container class="mt-3 bv-example-row">
     <h4>เอกสาร</h4>
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
     
     
    </b-list-group>
   </b-container>
      <b-container class="mt-3 bv-example-row">
     <h4>คำถามทั่วไป</h4>
   <b-list-group style="max-width: 100%;">     
      <b-list-group-item class="d-flex align-items-center" href="/mainquestion">
       <img height="25px" src="https://icons-for-free.com/iconfiles/png/512/question+icon-1320195549329729185.png" >
        <span class="mr-auto" >คำถามทั่วไป1</span>       
      </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center" href="/mainquestion">
        <img height="25px" src="https://icons-for-free.com/iconfiles/png/512/question+icon-1320195549329729185.png"  >
        <span class="mr-auto" >คำถามทั่วไป2</span>
             </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center" href="/mainquestion">
        <img height="25px" src="https://icons-for-free.com/iconfiles/png/512/question+icon-1320195549329729185.png" >
        <span class="mr-auto" >คำถามทั่วไป3</span>       
      </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center" href="/mainquestion">
        <img height="25px" src="https://icons-for-free.com/iconfiles/png/512/question+icon-1320195549329729185.png"  >
        <span class="mr-auto" >คำถามทั่วไป4</span>        
      </b-list-group-item>
     
    </b-list-group>
   </b-container>
   
 
</div>
</template>

<script> 
export default {
   name : 'Home'
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