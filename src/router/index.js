import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Technologies from '@/components/Technologies'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/technologies',
      name: 'Technologies',
      component: Technologies
    }
  ]
})
