import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { CarouselPlugin } from 'bootstrap-vue'
Vue.use(CarouselPlugin)
import { NavbarPlugin } from 'bootstrap-vue'
Vue.use(NavbarPlugin)
import { LayoutPlugin } from 'bootstrap-vue'
Vue.use(LayoutPlugin)
import router from './router/router'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#Home')
