import Home from './views/Home.vue'
import Index from './views/index.vue'

export default [
    {
        path: '/',
        name: 'index',
        component: Index
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        navTitle: '投诉列表',
        pageTitle: '投诉列表'
    },
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]