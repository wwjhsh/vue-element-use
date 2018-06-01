import http from  '@/libs/httpServer'
let MD5 = require("crypto-js/md5");
import { Message } from 'element-ui';
import { Cookie} from '@/libs/util'
const user = {
    namespaced: true,
    state: {
        register_ip:"",
        register_time:"",
        role:"",
        rolename:"",
        username:"",
        isLogin:false,

    },
    mutations: {
        ['setUserInfo'](state,info){
            state.register_ip=info.register_ip;
            state.register_time=info.register_time;
            state.role=info.role;
            state.rolename=info.rolename;
            state.username=info.username;
            localStorage.setItem('user',JSON.stringify(info));
        },
        ['getUserLocal'](state){
            if(localStorage['user']){
                let info = JSON.parse(localStorage['user']);
                state.register_ip=info.register_ip;
                state.register_time=info.register_time;
                state.role=info.role;
                state.rolename=info.rolename;
                state.username=info.username;
            }
        }
    },
    actions: {
        ['login'] (context,{username,password}) {
            let promise = new Promise((resolve, reject) =>{
                http({
                    url:'',
                    obj:{
                        's':'App.User.Login',
                        'username':username,
                        'password':MD5(password).toString(),
                    },
                    // type:'',
                    success:function(res){
                        if(res.err_code!=0){
                            Message.error({
                                message: res.err_msg,
                                center: true
                            });
                        }else{
                            localStorage.setItem('token',res.token);
                            localStorage.setItem('uuid',res.uuid);
                            resolve();
                        }
                    },
                    fail:function (e) {
                        reject()
                    }
                });
            });
            return promise;
        },
        ['getUsrInfo'] (context) {
            let promise = new Promise((resolve, reject) =>{
                http({
                    url:'',
                    obj:{
                        's':'App.User.Profile'
                    },
                    success:function(res){
                        console.log(res)
                        if(res.err_code!=0){
                            Message.error({
                                message: res.err_msg,
                                center: true
                            });
                        }else{
                            context.commit('setUserInfo',res.info);
                            resolve();
                        }
                    },
                    fail:function (e) {
                        console.log(e)
                        reject()
                    }
                });
                return promise;
            })
        },
        ['logout'] (context,$router) {
            localStorage.setItem('token','');
            localStorage.setItem('uuid','');
            $router.replace({
                name:'login'
            })
        }
    }
};
export default user;
