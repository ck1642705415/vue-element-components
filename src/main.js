// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import './theme/index.scss'
import store from './store'
import Wrapper from './components/common/Wrapper'
import TableC from './components/common/Table'
import AdvancedSearchC from './components/common/AdvancedSearch'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component('TableC',TableC)
Vue.component('AdvancedSearchC',AdvancedSearchC)
Vue.component('WrapperC',Wrapper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
