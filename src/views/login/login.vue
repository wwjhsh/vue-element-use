<template>
    <div class="skin">
        <el-card class="login-box">
            <div slot="header" class="clearfix">
                <span>登陆</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <el-form ref="loginForm" :model="loginData" label-width="0px">
                <el-form-item>
                    <el-input v-model="loginData.name">
                        <template slot="prepend">
                            <span class="label">用户名</span>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-input type="password" v-model="loginData.password">
                        <template slot="prepend">
                            <span class="label">密码</span>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="loginClick()">登陆</el-button>
                    <!--<el-button>取消</el-button>-->
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    import { mapActions} from 'vuex'
    export default {
        name: "login",
        data(){
            return{
                loginData:{
                    name:'',
                    password:''
                }
            }
        },
        methods:{
            ...mapActions('user',['login','getUsrInfo']),
            loginClick:function () {
                this.login({username:this.loginData.name,password:this.loginData.password}).then(()=>{
                    this.getUsrInfo();
                    this.$router.push({
                        name:'home'
                    })
                },()=>{

                })
            }
        }
    }
</script>

<style scoped>
    .skin{
        width: 100%;
        height: 100%;
        background-image: url("https://ss2.bdstatic.com/kfoZeXSm1A5BphGlnYG/skin/113.jpg?2");
        background-position: right 0;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .login-box{
        position: absolute;
        /*height: 560px;*/
        width: 450px;
        padding: 10px;
        left: 0;
        right: 0;
        transform: translateY(-50%);
        margin: auto ;
        top: 50%;
    }
    .login-box .el-form-item .label{
        display: inline-block;
        width: 60px;
        text-align: justify;
        white-space: normal;
        line-height: 0;
    }
    .login-box .el-form-item .label::after{
        content: '';
        display: inline-block;
        width: 100%;
        height: 0;
        overflow: hidden;
    }
</style>
