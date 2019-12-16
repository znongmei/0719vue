// 接口文件
import Vue from 'vue'
import 'lib-flexible'
import App from './App.vue' ;// 引入自定义组件
import router from "./router";
import Header from "./components/Header/Header.vue";
import store from './vuex/store'
import i18n from './i18n'
//注册全局路由，因为是多组件共同使用的
Vue.component('Header',Header)

new Vue({
  render:h=>h(App),
  router,
  i18n,

  // 所有组件都能通过$store看到store对象
  store
}).$mount('#app')