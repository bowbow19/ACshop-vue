import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import ('../views/Page.vue'),
    redirect: '/alphashop/page/address',
  },
  {
    path: '/alphashop/page',
    name: 'page',
    component: () => import ('../views/Page.vue'),

    children: [

      {
        path: 'address',
        name: 'address',
        component: () => import ('../components/Form1.vue')
      },
      {
        path: 'delivery',
        name: 'delivery',
        component: () => import ('../components/Form2.vue')
      },
      {
        path: 'payment',
        name: 'payment',
        component: () => import ('../components/Form3.vue')
      },
    ]

  },
  
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
]

const router = new VueRouter({
  routes
})

export default router
