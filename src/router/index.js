import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/Login_Validate.vue'
import home from '../views/home'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    name: 'home',
    component: home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
