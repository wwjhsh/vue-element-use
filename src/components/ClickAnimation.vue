<template>
    <div :class="{area:true, pop:true,pop2:isPop}" :style="{top:top,left:left}">
        <span :style="{color:setColor()}">{{textList[setIdx()]}}</span>
    </div>
</template>

<script>
    let index = 10;
    export default {
        name: "ClickAnimation",
        data () {
            return {
                colorList:['#124124','#952201','#f52271','#15C200'],
                textList:["富强","民主","文明","和谐","自由","平等","公正","法治","爱国","敬业","诚信","友善"],
                isPop:false,
                left:'-20px',
                top:'-20px',
                timer:null
            }
        },
        methods:{
            act:function (e) {
                this.isPop=!this.isPop;
                this.left=e.clientX+'px';
                this.top=e.clientY+'px';
            },
            setIdx:function(){
                if (index===(this.textList.length-1)){
                    index=0;
                }else {
                    index+=1 ;
                }
                return  index;
            },
            setColor:function(){
                return this.colorList[Math.floor(Math.random()*this.colorList.length)];
            }
        }
    }
</script>

<style scoped>
    .area{
        position: fixed;
        opacity: 0;
        font-size: 12px;
        z-index: 9999999;
    }
    .area.pop{
        animation:  pop ease-in 0.8s;
        animation-fill-mode:forwards;
    }
    .area.pop2{
        animation:  pop2 ease-in 0.8s;
    }
    @keyframes pop
    {
        0% {
            transform:scale(0.5,0.5) translate(0,0);
            opacity: 0;
        }
        1%{
            opacity: 1;
        }
        100% {
            transform:scale(0.8,0.8) translate(10px,-40px);
            opacity: 0;
        }
    }
    @keyframes pop2
    {
        0% {
            transform:scale(0.5,0.5) translate(0,0);
            opacity: 0;
        }
        1%{
            opacity: 1;
        }
        100% {
            transform:scale(0.8,0.8) translate(10px,-40px);
            opacity: 0;
        }
    }
</style>
