import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('../views/my.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('../views/index.vue')
  },
  {
    path: '/jumin',
    name: 'Jumin',
    component: () => import('../views/jumin.vue')
  },
  {
    path: '/xuanze',
    name: 'Xuanze',
    component: () => import('../views/xuanze.vue')
  },
  {
    path: '/qianyue',
    name: 'Qianyue',
    component: () => import('../views/qianyue.vue')
  },
  {
    path: '/jieguo',
    name: 'Jieguo',
    component: () => import('../views/jieguo.vue')
  },
  {
    path: '/qian',
    name: 'Qian',
    component: () => import('../views/qian.vue')
  },
  {
    path: '/fuwu',
    name: 'Fuwu',
    component: () => import('../views/fuwu.vue')
  },
  {
    path: '/fu',
    name: 'Fu',
    component: () => import('../views/fu.vue')
  },
  {
    path: '/bo',
    name: 'Bo',
    component: () => import('../views/bo.vue')
  },
  {
    path: '/sheng',
    name: 'Sheng',
    component: () => import('../views/sheng.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
