import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Technologies from '@/components/Technologies'
import Javascript from '@/components/Javascript'
import Python from '@/components/Python'
import Java from '@/components/Java'
import About from '@/components/About'

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
    },
    {
      path: '/technologies/javascript',
      name: 'Javascript',
      component: Javascript
    },
    {
      path: '/technologies/python',
      name: 'Python',
      component: Python
    },
    {
      path: '/technologies/java',
      name: 'Java',
      component: Java
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
