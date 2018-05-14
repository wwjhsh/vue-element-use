<template>
    <el-container style="height:100%;">
        <el-aside :width="isSideOpen?'64px':'180px'" :style="{backgroundColor:navSideBgColor,overflowX:'hidden'}" >
            <img :style="{marginLeft:isSideOpen?'unset':'60px',maxHeight: '80px'}" src="@/assets/logo.png"/>
            <SideMenu :backgroundColor="navBgColor" :defaultMenu="defaultMenu" :collapse="isSideOpen"></SideMenu>
        </el-aside>
        <el-container>
            <el-header :style="{backgroundColor:navBgColor,position:'relative'}">
                <div class="sideControl" @click="isSideOpen=!isSideOpen">
                    <i :class="'el-icon-d-arrow-'+ (isSideOpen?'right':'left')"></i>
                </div>
                <el-menu
                default-active="manage"
                class="el-menu-header"
                mode="horizontal"
                @select="handleSelect"
                :background-color="navBgColor"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-menu-item index="manage">处理中心</el-menu-item>
                <el-menu-item index="user">个人中心</el-menu-item>
                <el-menu-item index="info">消息中心</el-menu-item>
                <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
                </el-menu>
            </el-header>
            <el-header :style="{height:'40px',padding:0}">
                <TagPage ></TagPage>
            </el-header>
            <el-main>
                <router-view include="cacherouter"/>
            </el-main>
            <el-footer style="background-color: #ccc;text-align: center;" :style="{height:'40px',lineHeight:'40px'}">lalala</el-footer>
        </el-container>
    </el-container>
</template>

<script>
    import { mapState ,mapActions ,mapMutations} from 'vuex'
    import SideMenu from '@/views/main-component/SideMenu.vue'
    import TagPage from '@/views/main-component/TagPage.vue'
export default {
    components:{
        SideMenu,
        TagPage
    },
    name: "Main",
    data() {
        return {
            navSideBgColor:"#626b73",
            navBgColor:"#545c64",
            defaultMenu:"manage",
            isSideOpen:true
        };
    },
    computed:{
        ...mapState('tab',{//计算router需要缓存的路由
            'cacherouter': state => state.openTabList.map((item)=>{
                return item.name
            }).join(','),
        })
    },
    mounted(){

    },
    methods: {


        handleSelect(key) {//顶部菜单切换
          this.defaultMenu = key;
        }
    },
    watch:{
    }
};
</script>

<style>
    .el-menu {
        border-right: none;
    }
    .el-menu-header{
        min-width: 400px;
        margin-left: 40px;
    }
    .sideControl{
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto 0;
        height: 30px;
        width: 30px;
        border: 2px solid #aaa;
        border-radius: 4px;
        box-sizing: border-box;
        color: #aaa;
        line-height: 30px;
        text-align: center;
        cursor: pointer;
    }
</style>
