//路由页面
import Main from '@/views/Main.vue';
import Interface from '@/views/interface'
//错误页面
import Error404 from '@/views/errorpage/Error404.vue'
//左侧菜单页面
import Home from '@/views/index/index.vue'
import MngUser from '@/views/manage/mnguser.vue'
import MngTpl from '@/views/manage/mngtpl.vue'
import UserInfo from '@/views/user/userinfo.vue'
import Msg from '@/views/info/msg.vue'
//其他页面
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/login/login'
export const loginRouter = [{
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: Login
}];
export const All = {
    path: '*',
    redirect:'/error/404'
};
export const ErrorRouter = {
    path: '/error',
    name: 'error',
    meta: {
        title: '访问错误'
    },
    component:Interface,
    children: [
        { path: '404', title: '访问错误', name: 'error404', component: Error404 },
    ]
};
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    component: Main,
    children: [
        { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: () => import('@/views/index/index.vue') },
    ]
};
export const appRouter = [
    {
        path: '/manage',
        name: 'manage',
        redirect: '/manage/home',
        component: Main,
        children: [
            { path: 'home', icon: 'menu',meta:{title: '首页'}, title: '首页', name: 'home', component: Home },
            { path: '/', icon: 'menu', meta:{title: '后台管理'},redirect: '/manage/home', title: '后台管理', name: 'back',component:Interface,children: [
                { path: 'user', icon: 'menu',meta:{title: '用户管理'}, title: '用户管理', name: 'mnguser', component: MngUser},
                { path: 'tpl', icon: 'menu', meta:{title: '模板管理'},title: '模板管理', name: 'mngtpl', component: MngTpl },
            ]},
        ]
    },
    {
        path: '/user',
        name: 'user',
        redirect: '/user/',
        component: Main,
        children: [
            { path: '/', icon: 'menu',meta:{title: '个人资料'}, title: '个人资料', name: 'userinfo', component: UserInfo},
        ]
    },
    {
        path: '/info',
        name: 'info',
        redirect: '/info/',
        component: Main,
        children: [
            { path: '/', icon: 'menu',meta:{title: '消息'}, title: '消息', name: 'msg', component: Msg },
        ]
    }
];
// 所有上面定义的路由都要写在下面的routers里
export const routes = [
    All,
    ...loginRouter,
    ErrorRouter,
    otherRouter,
    ...appRouter
];
