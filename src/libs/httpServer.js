import 'whatwg-fetch'
import { Message,Loading } from 'element-ui';
let MD5 = require("crypto-js/md5");
const APPKEY = '13BCAB01FD9D97B84DACA6835CABC117';
const APPSECRECT = 'si6NIatUa9pezIqlGQTxSkg1r2fId7MeOYoUbJw5Zoe6wrY0xH2LRHPLAl3VpgZSbR9lj3L7haRqM';
function encryptSign(params,secret) {
    let str0='';
    for (let key of Object.keys(params).sort()) {
        str0+=params[key];
    }
    str0+=secret;
    let result = MD5(str0).toString().toUpperCase();
    return result;
}
function getUrlEncodeData(obj) {
    let paramArr=[];
    for (let key of Object.keys(obj)) {
        paramArr.push(key+'='+obj[key]);
    }
    return paramArr.join('&');
}
async function http ({url:url,obj:obj,type:type,success:success,fail:fail}) {
    try {
        let loading = Loading.service({
            fullscreen:false,
            body:true,
            background:   'transparent'
        });
        let option = {
            method: 'POST',
            // cache:  'reload'
        };
        let myHeaders = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
            // 'Content-Type': 'application/json'
        });
        let data = {
            'app_key':APPKEY
        };
        if (localStorage.uuid) {
            data.uuid = localStorage.uuid;
        }
        if (localStorage.token) {
            data.token = localStorage.token;
        }
        data=Object.assign(data,obj);
        data.sign = encryptSign(data,APPSECRECT);
        if (type==='form'){

        }else {//默认post传的内容
            option.body=getUrlEncodeData(data);
            option.headers= myHeaders;
        }
        let req = new Request(url||'/api', option);
        let response = await fetch(req);
        let res = response.json();
        res.then((data)=>{
            loading.close();
            if(data.ret==200){
                success(data.data);
            }else{
                Message.error({
                    message: data.msg,
                    center: true
                });
            }
        })
    } catch(e) {
        loading.close();
        fail(e);
    }

}
export default http;
