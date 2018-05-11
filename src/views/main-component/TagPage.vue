<template>
    <div class="tag-body" id="tag">
        <div class="tag-left" @click="move('left')">
            <i class="el-icon-arrow-left"></i>
        </div>
        <div class="tag-show" ref="showbox">
            <div class="taglist" ref="tagList" style="left: 0;">
                <el-tag
                    :key="tag.name"
                    v-for="(tag,index) in openTabList"
                    :closable="index>0"
                    :class="{active: tag.name===currentTab.name }"
                    type="warning"
                    :disable-transitions="false"
                    @click.native="setCurrentTab(tag)"
                    @close="removeOneTab({index:index})">
                    {{tag.title}}
                </el-tag>
            </div>
        </div>
        <div class="tag-right" @click="move('right')">
            <i class="el-icon-arrow-right"></i>
        </div>
        <el-popover
            placement="bottom"
            width="150">
            <el-button-group>
                <el-button size="small" style="width: 100%;" @click="removeAllTab">关闭全部</el-button>
                <el-button size="small" style="width: 100%;" @click="removeOtherTab">关闭其他</el-button>
            </el-button-group>
            <div class="tag-more" slot="reference">
                <i class="el-icon-setting"></i>
            </div>
        </el-popover>
    </div>
</template>

<script>
    import { createNamespacedHelpers } from 'vuex'
    const { mapState, mapMutations } = createNamespacedHelpers('tab');
    export default {
        name: "TagPage",
        data(){
            return{
                isActive:true
            }
        },
        computed:{
            ...mapState(['openTabList',
                'currentTab'])
        },
        mounted(){
            var that=this;
            setTimeout(function () {
                console.log(that)
            },2000)
        },
        methods:{
            ...mapMutations([
                'removeAllTab',
                'removeOtherTab',
                'removeOneTab',
                'setCurrentTab'
            ]),
            move(dir) {
                let moveLength =this.$refs.showbox.offsetWidth-20,
                    tagListLength = this.$refs.tagList.scrollWidth,
                    tagListLeft   = this.$refs.tagList.offsetLeft;
                if (dir==='left'){
                    if(tagListLeft+moveLength>=0){
                        this.$refs.tagList.style.left=0+'px';
                    }else {
                        this.$refs.tagList.style.left=tagListLeft+moveLength+'px';
                    }
                }
                if (dir==='right'){
                    if(tagListLength+tagListLeft-moveLength<=20+moveLength){
                        this.$refs.tagList.style.left=moveLength - tagListLength+'px';
                    }else {
                        this.$refs.tagList.style.left=tagListLeft-moveLength+'px';
                    }
                }
            }
        },
        watch:{
            'currentTab.name'(val,oldval){
                this.$router.push({
                    name:val
                })
            },
            'openTabList.length'(){
                setTimeout(() => {
                    let showboxLength =this.$refs.showbox.offsetWidth,
                        tagListLength = this.$refs.tagList.scrollWidth,
                        tagListLeft   = this.$refs.tagList.offsetLeft;
                    if(tagListLeft+tagListLength<showboxLength){
                        this.$refs.tagList.style.left=showboxLength-20 - tagListLength+'px';
                    }
                }, 350)
            }
        }
    }
</script>

<style>
    .tag-body{
        width: 100%;
        height: 40px;
        line-height: 40px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .tag-body .tag-left,.tag-body .tag-right{
        box-sizing: border-box;
        width: 36px;
        height: 40px;
        border: 1px solid #ccc;
        background-color: #f4f4f4;
        text-align: center;
        cursor: pointer;
        flex: 0 0 36px;
    }
    .tag-body .tag-show{
        position: relative;
        flex-grow:1;
        /*flex-basis:1;*/
        box-sizing: border-box;
        height: 40px;
        padding: 0 10px;
        border: 1px solid #ccc;
        background-color: #eee;
        overflow: hidden;
    }
    .tag-show .taglist{
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        transition: left 1s;
    }
    .tag-show .taglist .el-tag{
        margin: 0 2px;
    }
    .tag-body .tag-more{
        box-sizing: border-box;
        width: 36px;
        height: 40px;
        border: 1px solid #ccc;
        background-color: #f4f4f4;
        text-align: center;
        cursor: pointer;
        flex: 0 0 36px;
    }
    .taglist .el-tag--warning.active{
        background-color: #e6a23c;
        color: #fff;
    }
    .taglist .el-tag--warning.active .el-tag__close {
        color: #fff;
    }
</style>
