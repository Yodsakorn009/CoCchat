<template>
  <div class="documentdetail">
      <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <div class="container">
      <b-navbar-brand href="/login">
      <img height="25px" src="https://www.computing.psu.ac.th/th/wp-content/uploads/2018/03/PSU_CoC_ENG.png">
    </b-navbar-brand>
    
     <b-nav right>
<b-button type="back" href="/admin" variant="danger">back</b-button>
     </b-nav>

    

    </div>
  </b-navbar>
</div>
<div class="container mt-3">
    
<h2>เอกสาร</h2>
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
           <b-form-group
        id="input-group-3"
        label="File:"
        label-for="input-3"
        description=""
      >
        <b-form-file
          id="input-3"
          v-model="form.file"
          :state="Boolean(file)"
          required
          placeholder="Enter File"
        ></b-form-file>
        
      </b-form-group>
        <b-form-group
        id="input-group-4"
        label="Photo:"
        label-for="input-4"
        description=""
      >
        <b-form-file
          id="input-4"
          v-model="form.file2"
          :state="Boolean(file2)"
         
          placeholder="Enter File"
        ></b-form-file>
        
      </b-form-group>
    

        
      <b-button type="submit" variant="primary">Submit</b-button>&nbsp;
      <b-button type="reset" variant="warning">Reset</b-button>&nbsp;
       <b-button type="reset" variant="danger">delete</b-button>

    </b-form>
</div>

  </div>
</template>

<script>
   export default {
    data() {
      return {
        form: {
          text1: 'ชื่อเอกสาร',
          text2: 'Text Area (รายระเอียด)',     
        file: null,
         file2: null
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
          this.form.file = ''
           this.form.file2 = ''
         
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },OnBAck(){

      }
      
    }
  }
</script>

<style>

</style> 