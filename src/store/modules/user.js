
const user = {
    namespaced: true,
    state: {
        userinfo:{
            username:''
        },
        isLogin:false
    },
    mutations: {
        ['setUserInfo'](state,{username}){
            state.userinfo.username=username;
            localStorage.setItem('username',username);
        },
        ['setIsLogin'](state,{isLogin}){
            state.userinfo.isLogin=isLogin;
            localStorage.setItem('isLogin',isLogin);
        }
    },
    actions: {
        ['login'] (context,{username,password}) {
            let promise = new Promise((resolve, reject) =>{
                //ajax success function{
                context.commit('setUserInfo',{username:username});
                context.commit('setIsLogin',{isLogin:true});
                resolve();
                // }
                //ajax fail function{
                // reject()
                // }
            });
            return promise;
        },
        ['logout'] (context,$router) {
            context.commit('setUserInfo',{username:''});
            context.commit('setIsLogin',{isLogin:false});
            $router.replace({
                name:'login'
            })
        }
    }
};
export default user;
