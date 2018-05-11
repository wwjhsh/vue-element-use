<template>
    <el-menu
        :default-active="defaultActive"
        class="el-menu-vertical-demo"
        :background-color="backgroundColor"
        :collapse="collapse"
        text-color="#fff"
        active-text-color="#ffd04b">
        <!--@open="handleOpen"-->
        <!--@close="handleClose"-->
        <template v-for="item in menuList">
            <el-submenu v-if=" 'children' in item && item.children.length>0" :index="item.name">
                <template slot="title">
                    <i :class="'el-icon-'+item.icon"></i>
                    <span>{{item.title}}</span>
                </template>
                <el-menu-item v-for="item2 in item.children" :key="item2.name" :index="item2.name" @click="handleSideSelect(item2)">
                    <i :class="'el-icon-'+item2.icon"></i>
                    <span slot="title">{{item2.title}}</span>
                </el-menu-item>
            </el-submenu>
            <el-menu-item v-else :index="item.name" @click="handleSideSelect(item)">
                <i :class="'el-icon-'+item.icon"></i>
                <span slot="title">{{item.title}}</span>
            </el-menu-item>
        </template>
    </el-menu>
</template>

<script>
    import {appRouter} from "@/router/router";
    import { createNamespacedHelpers } from 'vuex'
    const { mapState, mapMutations,mapActions } = createNamespacedHelpers('tab');
    export default {
        name: "SideMenu",
        data() {
            return {
                menuList:[],
                defaultActive:'index'
            };
        },
        props:['backgroundColor','defaultMenu','collapse'],
        methods: {
            ...mapMutations([
                'addTabList',
                'moveToTab'
            ]),
            ...mapActions(['handleMenuEvent']),
            handleSelect(key, keyPath) {
                // console.log(key, keyPath);
            },
            getMenuList(){
                for(let i=0;i<appRouter.length;i++){
                    if (appRouter[i].name===this.defaultMenu) {
                        this.menuList=appRouter[i].children;
                    }
                }
            },
            handleSideSelect(item){
                let name =item.name;
                this.$router.push({
                    name:name
                })
            }
        },
        mounted(){
            console.log(appRouter)
            this.getMenuList();
            console.log(this.menuList)
        },
        watch:{
            defaultMenu:'getMenuList'
        }

    };
</script>

<style>
    .el-menu {
        border-right: none;
    }
</style>
