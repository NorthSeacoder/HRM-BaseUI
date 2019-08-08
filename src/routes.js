import Index from './views/index.vue';
import Personal from './views/personal'
import EmployeeInfo from './views/personal/employee-info'


export default [
    {
        name: 'NotFound',
        path: '*',
        redirect: Index
    },

    {
        name: 'Index',
        path: '/',
        component: Index
    },
    
    {
      path: '/personal',
      name: 'personal',
      meta: {
          navTitle: '人事管理',
          pageTitle: '人事管理'
      },
      component: Personal,
      children:[
        {
          name: 'employeeInfo',
          path: '/personal/employee-info',
          component: EmployeeInfo,
          meta: {
              navTitle: '员工信息'
          }
      },
      ]
  },
    // {
    //     path: '/about',
    //     name: 'about',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
];
