import http from  '@/libs/httpServer'
let MD5 = require("crypto-js/md5");
import { Message } from 'element-ui';
import { Cookie} from '@/libs/util'
const user = {
    namespaced: true,
    state: {
        userinfo:{
            username:''
        },
        isLogin:false
    },
    mutations: {
        ['setUserInfo'](state,user){
            state.userinfo=user;
            localStorage.setItem('user',JSON.stringify(user));
        },
        ['getUserInfo'](state){
            let user = localStorage.getItem('user');
            state.userinfo=JSON.parse(user);
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
