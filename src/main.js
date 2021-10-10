import Vue from 'vue'
import App from './App.vue'
import store from './store'


import { BootstrapVue } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)



Vue.directive('click-outside', {
  bind(el, binding) {
      el.addEventListener('click', e => e.stopPropagation());
      document.body.addEventListener('click', binding.value);
  },
  unbind(el, binding) {
      document.body.removeEventListener('click', binding.value);
  }
});

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
