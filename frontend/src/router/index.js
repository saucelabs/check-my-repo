import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Rules from '../views/Rules.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/rules',
    name: 'Rules',
    component: Rules,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
})

export default router
