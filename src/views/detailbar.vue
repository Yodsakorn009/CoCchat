<template>
  <div class="login">
      <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <div class="container">
      <b-navbar-brand href="/admin">
      <img height="25px" src="https://www.computing.psu.ac.th/th/wp-content/uploads/2018/03/PSU_CoC_ENG.png">
    </b-navbar-brand>
    
     <b-nav right>
<b-button type="back" href="/admin" variant="danger">back</b-button>
     </b-nav>

    

    </div>
  </b-navbar>
</div>
<div class="container mt-3">
    

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
        id="input-group-1"
        label="Text2:"
        label-for="input-2"
        description=""
      >
        <b-form-input
          id="input-2"
          v-model="form.text2"
          type="text"
          required
          placeholder="Enter Text"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-1"
        label="Text3:"
        label-for="input-3"
        description=""
      >
        <b-form-input
          id="input-3"
          v-model="form.text3"
          type="text"
          required
          placeholder="Enter Text"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-1"
        label="Text4:"
        label-for="input-4"
        description=""
      >
        <b-form-input
          id="input-4"
          v-model="form.text4"
          type="text"
          required
          placeholder="Enter Text"
        ></b-form-input>
      </b-form-group>


      <b-button type="submit" variant="primary">Submit</b-button>
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
          text1: 'วิทยาลัยการคอมพิวเตอร์มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตภูเก็ต',
          text2: '80 หมู่ 1 ถ.วิชิตสงคราม ต.กะทู้ อ.กะทู้ จ.ภูเก็ต 83120',
          text3: 'โทร 076-276-471 , 076-276-562 Fax 076-276-453',
          text4: 'www.computing.psu.ac.th'           
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
        this.form.text3 = ''
        this.form.text4= ''        
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