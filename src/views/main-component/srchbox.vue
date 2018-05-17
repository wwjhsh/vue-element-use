<template>
    <div class="srchbox" :style="{width:width+'px'}" @mouseover="width=200" @mouseout="width=37" >
        <i class="el-icon-search"></i>
        <el-input placeholder="请输入内容" v-show="isopen" v-model="searchtxt">
            <template slot="prepend">&nbsp;</template>
        </el-input>
    </div>
</template>

<script>
    export default {
        name: "srchbox",
        data(){
            return{
                searchtxt:'',
                width:37,
                isopen:false
            }
        },
        computed:{
         
        },
        mounted(){
            
        },
        methods:{
            
        },
        watch:{
            'width'(val){
                if(val<40){
                    this.isopen=false;
                }else{
                    this.isopen=true;
                }
            }
        }
    }
</script>

<style scoped>
    .srchbox{
        position: relative;
        transition: width 1s ease;
    }
    .srchbox >>> .el-input-group--prepend .el-input__inner ,.srchbox >>> .el-input-group__prepend{
        background: rgb(84, 92, 100);
        color: #f3f3f3;
    }
    .srchbox .el-icon-search{
        position: absolute;
        left: 10px;
        width: 0;
        z-index: 2;
        line-height: 60px;
    }
</style>
