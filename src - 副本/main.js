// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入vant 
import Vant from 'vant';
import 'vant/lib/index.css';
import "@/assets/style/reset.css";
// 导入axios
import axios from './utils/request'
Vue.prototype.$axios=axios;
Vue.use(Vant);
// vuex配置
import store from './store/index'
Vue.config.productionTip = false
// 定义全局路由守卫
router.beforeEach((to,from,next)=>{
  // console.log(to)
  if(to.hasOwnProperty("meta")){
    document.title =to.meta.title;
  }else{
    document.title="严选商城"
  }
  next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
