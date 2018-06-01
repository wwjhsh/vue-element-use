import Vue from 'vue'
import VueRouter from 'vue-router'
import {routes,needLoginRouter} from './router'
import {util} from '@/libs/util'

Vue.use(VueRouter)
// 路由配置
const RouterConfig = {
  mode: 'history',
  routes: routes
};
export const router =  new VueRouter(RouterConfig)
router.beforeEach((to, from, next) => {
  if(to.meta.unlogin&&to.meta.unlogin==true){
    next();                                                                       //跳过允许不登录的页面
  }else{
    if(localStorage.getItem('uuid')&&localStorage.getItem('uuid')!==''){          //缓存中存在登陆状态
      if (to.meta==undefined||to.meta.access==undefined||util.isInArray(to.meta.access,localStorage.getItem('access'))){//路由没设置权限,用户符合权限规则
        next(); 
      }else{
        next({
          name:'error401'
        })
      }
    }else{
      next({
        name:'login'
      }); 
    }
  }
})
