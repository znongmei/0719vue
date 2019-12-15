// 接口文件
import Vue from 'vue'
import 'lib-flexible'
import App from './App.vue' ;// 引入自定义组件
import router from "./router";
import Header from "./components/Header/Header.vue";
// import store from './store'
//注册全局路由
Vue.component('Header',Header)


new Vue({
  render:h=>h(App),
  router,
  // store, // 所有组件都能通过$store看到store对象
}).$mount('#app')