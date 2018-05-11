<template>
    <div id="chart2" style="width: 100%;height:300px;"></div>
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

            let chart = this.chart = Chart.init(document.getElementById('chart2'));
            let option = {
                tooltip : {
                    formatter: "{a} <br/>{b} : {c}%"
                },
                toolbox: {
                    feature: {
                        restore: {},
                        saveAsImage: {}
                    }
                },
                series: [
                    {
                        name: '业务指标',
                        type: 'gauge',
                        detail: {formatter:'{value}%'},
                        data: [{value: 50, name: '完成率'}]
                    }
                ]
            };
            chart.setOption(option, true);
            setInterval(function () {
                option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
                chart.setOption(option, true);
            },2000);
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
