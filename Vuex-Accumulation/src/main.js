// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from './store';
//引入element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//Vue-Router导航守卫全局配置：
router.beforeEach((to, from, next) => { 
    // 导航钩子，全局钩子
    var user = localStorage.getItem('user');
    console.log(user)
    if(!user){
            if(to.name != 'Login'){
              console.log(111)
              localStorage.setItem('user','');
                  next('/login');
            }else{
              console.log(311)
              next();
            }
    }else{  
      console.log(211)
      next();
    }
});
// router.beforeResolve((to, from, next) => {
//     console.log('beforeResolve 钩子');
//     next();
// });
// router.afterEach((to, from) => {
//     console.log('afterEach 全局后置钩子');
// });

//使用elementUI
Vue.use(ElementUI);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  // template: "<App/>",
  render: h=>h(App)
});
