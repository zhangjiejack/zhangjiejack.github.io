import Vue from 'vue'
import App from './App.vue'
import 'zj-web-ui/dist/css/index.css'
import ZUI from 'zj-web-ui'
Vue.use(ZUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
