import Main from '@/views/Main.vue';
import HelloWorld from '@/components/HelloWorld'
import Interface from '@/views/interface'
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: () => HelloWorld
};
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    component: Main,
    children: [
        { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: () => import('@/views/index/index.vue') },
    ]
};
export const Hello = {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
};
export const appRouter = [
    {
        path: '/manage',
        name: 'manage',
        redirect: '/manage/home',
        component: Main,
        children: [
            { path: 'home', icon: 'menu',meta:{title: '首页'}, title: '首页', name: 'home', component: () => import('@/views/index/index.vue') },
            { path: '/', icon: 'menu', meta:{title: '后台管理'},redirect: '/manage/user', title: '后台管理', name: 'back',component:Interface,children: [
                { path: 'user', icon: 'menu',meta:{title: '用户管理'}, title: '用户管理', name: 'mnguser', component: () => import('@/views/manage/mnguser.vue') },
                { path: 'tpl', icon: 'menu', meta:{title: '模板管理'},title: '模板管理', name: 'mngtpl', component: () => import('@/views/manage/mngtpl.vue') },
            ]},
        ]
    },
    {
        path: '/user',
        name: 'user',
        redirect: '/user/',
        component: Main,
        children: [
            { path: '/', icon: 'menu',meta:{title: '个人资料'}, title: '个人资料', name: 'userinfo', component: () => import('@/views/user/userinfo.vue') },
        ]
    },
    {
        path: '/info',
        name: 'info',
        redirect: '/info/',
        component: Main,
        children: [
            { path: '/', icon: 'menu',meta:{title: '消息'}, title: '消息', name: 'msg', component: () => import('@/views/info/msg.vue') },
        ]
    }
];
// 所有上面定义的路由都要写在下面的routers里
export const routes = [
    Hello,
    loginRouter,
    otherRouter,
    ...appRouter
];
