import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/index.vue'
import research from '../views/Researchfunds.vue'
import document from '../views/document.vue'
import question from '../views/question.vue'
import mainquestion from '../views/mainquestion.vue'
import mainResearchfunds from '../views/mainResearchfunds.vue'
import maindocument from '../views/maindocument.vue'

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
  }
  
  
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
