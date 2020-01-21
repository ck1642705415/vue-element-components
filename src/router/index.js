import Vue from 'vue'
import Router from 'vue-router'
import Error from '@/components/common/ErrorPage'
import Main from '@/pages/shared'
import Login from '@/pages/views/main/login'
import Home from '@/pages/views/main/home'
import RoleList from '@/pages/views/system/role/components/list'
import AccountList from '@/pages/views/system/account/components/list'
import Routes from '@/pages/views'

Vue.use(Router)

const router = new Router({
  routes: [
    {path: '/', redirect: 'login'},
    {path: '/login', name: 'Login', component: Login},
    {
      path: '/app', name: 'Main', component: Main, children: [
        {path: '/', redirect: 'home'},
        {path: 'home', name: 'Home', meta: {authCode: 1000000}, component: Home},
        {path: 'system/role/list', name: 'RoleList', component: RoleList},
        {path: 'system/account/list', name: 'AccountList', component: AccountList},
      ]
    },
    {
      path: '**',
      component: Error
    }
  ]
})
const newRouter = []
const buildRoutes = (routes, path = '') => {
  console.log(routes)
  console.log(path)
  routes.map(item => {
    const router = {...item}
    router.path = `${path}${router.path}`
    if(item.child){
      buildRoutes(item.child, item.path)
      newRouter.push(router)
    }
  })
}
router.beforeEach((to, from, next) => {
  buildRoutes(Routes)
  console.log(newRouter)
  next()
})
export default router
