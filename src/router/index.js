import Vue from 'vue'
import VueRouter from 'vue-router'
import {routes} from './router'

Vue.use(VueRouter)
// 路由配置
const RouterConfig = {
  mode: 'history',
  routes: routes
};
export const router =  new VueRouter(RouterConfig)
