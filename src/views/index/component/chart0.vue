<template>
    <div id="chart0" style="width: 100%;height:400px;"></div>
</template>

<script>
    import { mapState } from 'vuex'
    import Chart from '@/libs/Chart'
    export default {
        name: "chart0",
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
            this.chart = Chart.init(document.getElementById('chart0'));
            this.chart.setOption({
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                xAxis: {
                    // data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            });
        },
        watch:{
            'clientWidth'(val){
                this.chart.resize();
            }
        }
    }
</script>

<style scoped>

</style>
