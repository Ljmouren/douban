import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/home'
import Audio from '../pages/Audio/audio'
import Broadcast from '../pages/Broadcast/broadcast'
import Group from '../pages/Group/group'
import Mine from '../pages/Mine/mine'
import Login from '../pages/Login/login'
import Register from '../pages/Login/register'
import Film from '../components/Film'
import Read from '../components/Read'
import Tv from '../components/Tv'
import City from '../components/City'
import Music from '../components/Music'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/register',
      name: 'register',
      component: Register
    },
  	{
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/audio',
      name: 'audio',
      component: Audio,
      children:[
      {path:'film',component:Film},
      {path:'read',component:Read},
      {path:'tv',component:Tv},
      {path:'city',component:City},
      {path:'music',component:Music}
      ]
    },
    {
      path: '/broadcast',
      name: 'broadcast',
      component: Broadcast
    },
    {
      path: '/group',
      name: 'group',
      component: Group
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
  ]
})
