import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VeriviedAccount from '../views/VeriviedAccount'
import ResetPassword from '../views/ResetPassword'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/verified-account',
    name: 'VeriviedAccount',
    component: VeriviedAccount
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPassword
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
