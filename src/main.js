// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import seller from './components/seller/seller.vue'
import ratings from './components/ratings/ratings.vue'
import goods from './components/goods/goods.vue'
Vue.use(VueRouter)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
})

const routes=[
  {path:'./seller',component:seller},
  {path:'./goods',component:goods},
  {path:'./ratings',component:ratings},
]

const router=new VueRouter({
  routes
})
router.push('/seller')

