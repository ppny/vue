// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-default/index.css'
import {Radio, Form, Input, Button, FormItem} from 'element-ui'
Vue.use(Radio)
Vue.use(Form)
Vue.use(Input)
Vue.use(Button)
Vue.use(FormItem)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
