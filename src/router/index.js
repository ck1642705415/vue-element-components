import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/shared'
import HelloWorld from '@/pages/HelloWorld'
import Login from '@/pages/views/main/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'login'
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path: '/app',
      name: 'Main',
      component: Main,
      children:[
        {
          path: '/',redirect: 'helloWord'
        },
        {
          path:'helloWord',
          name:'HelloWorld',
          component:HelloWorld
        }
      ]
    }
  ]
})
