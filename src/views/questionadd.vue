<template>
  <div class="addquestion">
      <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <div class="container">
      <b-navbar-brand href="/login">
      <img height="25px" src="https://www.computing.psu.ac.th/th/wp-content/uploads/2018/03/PSU_CoC_ENG.png">
    </b-navbar-brand>
    
     <b-nav right>
<b-button type="back" @click="OnBack"  variant="danger">back</b-button>
     </b-nav>

    

    </div>
  </b-navbar>
</div>
<div class="container mt-3">
    
<h2>คำถาม</h2>
<b-form class="mt-3" @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Text1:"
        label-for="input-1"
        description=""
      >
        <b-form-input
          id="input-1"
          v-model="form.text1"
          type="text"
          required
          placeholder="Enter Text"
        ></b-form-input>
      </b-form-group>
       <b-form-group
        id="input-group-2"
        label="Text2:"
        label-for="input-2"
        description=""
      >
        <b-form-textarea
          id="input-2"
          v-model="form.text2"
          type="text"
          required
           rows="3"
      max-rows="6"
          placeholder="Enter Text"
        ></b-form-textarea>
        
      </b-form-group>
    
    

      <b-button type="submit" variant="primary">Add</b-button>&nbsp;
      <b-button type="reset" variant="danger">Reset</b-button>

    </b-form>
</div>

  </div>
</template>

<script>
   export default {
    data() {
      return {
        form: {
          text1: 'คำถามทั่วไป',
          text2: 'Text Area (รายระเอียด)'          
        },
       
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
       window.location.href = "/admin"
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.text1 = ''
         this.form.text2 = ''
         
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },OnBack(){
         window.history.back();
      }
      
    }
  }
</script>

<style>

</style> 