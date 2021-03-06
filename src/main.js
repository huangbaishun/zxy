import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/base.less'
import baseBreadcrumb from '@/components/baseBreadcrumb'
import { BaseUrl } from '@/http/config'
console.log(BaseUrl)
Vue.prototype.$BaseUrl = BaseUrl
Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.component('baseBreadcrumb', baseBreadcrumb)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
