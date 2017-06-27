import Vue from 'vue'
import Router from 'vue-router'
import con1 from '../components/11.vue'
import con2 from '../components/22.vue'
Vue.use(con1)
Vue.use(con2)
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'con1',
      component: con1
    },
    {
      path: '/con1',
      name: 'con1',
      component: con1
    },
    {
      path: '/con2',
      name: 'con2',
      component: con2
    }
  ]
})
