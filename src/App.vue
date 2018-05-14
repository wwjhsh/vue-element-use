<template>
  <div id="app" class="app-main">
    <!-- <img src="./assets/logo.png"/> -->
    <router-view/>
    <ClickAnimation ref="cursor"></ClickAnimation>
  </div>
</template>

<script>
    import ClickAnimation from  '@/components/ClickAnimation'
export default {
    name: 'App',
    components:{
        ClickAnimation
    },
    created(){
    },
    mounted(){
        let that =this;
        document.addEventListener("click",(e)=>{
            that.$refs["cursor"].act(e);
        })
    }
}
</script>

<style>
*{
  padding: 0;
  margin:  0;
}
#app {
  width: 100%;
  height: 100%;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
   /*font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html,body{
    width: 100%;
    height: 100%;
    background: #f0f0f0;
    overflow: hidden;
}
</style>
