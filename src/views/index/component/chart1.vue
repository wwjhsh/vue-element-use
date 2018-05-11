<template>
    <div id="chart1" style="width: 100%;height:240px;"></div>
</template>

<script>
    import { mapState } from 'vuex'
    import Chart from '@/libs/Chart'
    export default {
        name: "chart1",
        data(){
            return{
                chart:null
            }
        },
        computed:{
            ...mapState([
                'clientWidth'
            ])
        },
        mounted(){
            // console.log(Chart)
            this.chart = Chart.init(document.getElementById('chart1'));
            this.chart.setOption({
                title: {
                    text: 'ECharts 入门示例2'
                },
                tooltip: {},
                series: [{
                    name: '销量',
                    type: 'pie',
                    data: [{value:5,name:'衬衫'},{value:20,name:'羊毛衫'},{value:36,name:'雪纺衫'},{value:10,name:'裤子'},{value:10,name:'高跟鞋'},{value:20,name:'袜子'}]
                }]
            });
        },
        watch:{
            'clientWidth'(){
                this.chart.resize();
            }
        }
    }
</script>

<style scoped>

</style>
