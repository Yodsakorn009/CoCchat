import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/index.vue'
import research from '../views/Researchfunds.vue'
import document from '../views/document.vue'
import question from '../views/question.vue'
import mainquestion from '../views/mainquestion.vue'
import mainResearchfunds from '../views/mainResearchfunds.vue'
import maindocument from '../views/maindocument.vue'
import admin from '../views/admin.vue'
import login from '../views/login.vue'
import admindoc from '../views/document-admin.vue'
import adminres from '../views/Researchfunds-admin.vue'
import adminqus from '../views/question-admin.vue'
import editdetail from '../views/detailbar.vue'
import questiondetail from '../views/questiondetail.vue'
import addquestion from "../views/questionadd.vue"
import documentdetail from "../views/documentdetail.vue"
import documentadd from "../views/documentadd.vue"
import researchfundsdetail from "../views/researchfundsdetail.vue"
import researchfundsadd from "../views/researchfundsadd.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
      path: '/Research',
      name : 'research',
      component : research
  },
  {
      path :'/document',
      name : 'document',
      component: document
  },
  {
      path :'/question',
      name : 'question',
      component:question
  },
  {
      path :'/mainquestion',
      name : 'mainquestion',
      component:mainquestion
  }
  ,
  {
      path :'/maindocument',
      name : 'maindocument',
      component:maindocument
  },
  {
      path :'/mainResearchfunds',
      name : 'mainResearchfunds',
      component:mainResearchfunds
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
      path: '/admin',
      name : 'admin',
      component : admin
  }
  ,
  {
      path: '/admin/doc',
      name : 'admindoc',
      component : admindoc
  } ,
  {
      path: '/admin/res',
      name : 'adminres',
      component : adminres
  },
  {
      path: '/admin/qus',
      name : 'adminqus',
      component : adminqus
  }
  ,
  {
      path: '/admin/editdetail',
      name : 'editdetail',
      component : editdetail
  },
  {
    path: '/admin/questiondetail',
    name : 'questiondetail',
    component : questiondetail
}
,
  {
    path: '/admin/addquestion',
    name : 'addquestion',
    component : addquestion
}
,
  {
    path: '/admin/documentdetail',
    name : 'documentdetail',
    component : documentdetail
},
{
  path: '/admin/documentadd',
  name : 'documentaddd',
  component : documentadd
},
{
  path: '/admin/researchfundsdetail',
  name : 'researchfundsdetail',
  component : researchfundsdetail
},
{
  path: '/admin/researchfundsadd',
  name : 'researchfundsadd',
  component : researchfundsadd
}


  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
