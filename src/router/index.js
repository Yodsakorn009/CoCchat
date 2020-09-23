import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/index.vue'
import research from '../components/Researchfunds.vue'
import document from '../components/document.vue'
import question from '../components/question.vue'
import mainquestion from '../components/mainquestion.vue'
import mainResearchfunds from '../components/mainResearchfunds.vue'
import maindocument from '../components/maindocument.vue'

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
