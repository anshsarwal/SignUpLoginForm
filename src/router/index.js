import Vue from 'vue'
import Router from 'vue-router'
import signlogin from '../Components/signlogin'
import forgotpassword from '../Components/forgotpassword'
import changepassword from '../Components/changepassword'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: signlogin
    },
    {
      path: '/forgot',
      components: forgotpassword
    },
    {
      path: '/change',
      components: changepassword
    }
  ]
})
