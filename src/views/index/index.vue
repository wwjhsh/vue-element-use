<template>
  <div>
      <el-row :gutter="10">
          <el-col :md="16">
              <el-row :gutter="10">
                  <el-col :md="12">
                      <el-card class="menu-card">
                          <div slot="header" class="clearfix">
                              <span>主要功能</span>
                          </div>
                          <el-row :gutter="20">
                              <el-col :span="6" v-for="o in 8" :key="o" class="area">
                                  <div class="item">
                                      <i class="el-icon-menu"></i>
                                  </div>
                                  <div class="title">操作{{o}}</div>
                              </el-col>
                          </el-row>

                      </el-card>
                  </el-col>
                  <el-col :md="12">
                      <el-card class="thing-card">
                          <div slot="header" class="clearfix">
                              <span>待办事项</span>
                          </div>
                          <el-row :gutter="20">
                              <el-col :span="12" v-for="o in 4" :key="o" class="area">
                                  <div class="item">
                                      <div class="title">操作{{o}}</div>
                                      <div class="num">13</div>
                                  </div>
                              </el-col>
                          </el-row>
                      </el-card>
                  </el-col>
                  <el-col :md="24">
                      <el-card class="box-card">
                          <div slot="header" class="clearfix">
                              <span>图形</span>
                          </div>
                          <chart0></chart0>
                      </el-card>
                  </el-col>
                  <el-col :md="24">
                      <el-card class="box-card">
                          <div slot="header" class="clearfix">
                              <span>表格</span>
                              <el-button style="float: right; padding: 3px 0;font-size: 20px;" type="text" icon="el-icon-plus" @click="$refs.table0.editModelShow=true;$refs.table0.editModelType='add'"></el-button>
                          </div>
                          <table0 ref="table0"></table0>
                      </el-card>
                  </el-col>
              </el-row>
          </el-col>
          <el-col :md="8">
              <el-card class="info-card">
                  <div slot="header" class="clearfix">
                      <span>信息啥的</span>
                      <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                  </div>
                  <div v-for="o in 4" :key="o" class="text item">
                      {{'列表内容 ' + o }}
                  </div>
              </el-card>
              <el-card class="box-card">
                  <div slot="header" class="clearfix">
                      <span>信息啥的</span>
                      <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                  </div>
                  <chart1></chart1>
              </el-card>
              <el-card class="box-card">
                  <div slot="header" class="clearfix">
                      <span>信息啥的</span>
                      <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                  </div>
                  <chart2></chart2>
              </el-card>
          </el-col>
      </el-row>
  </div>
</template>

<script>
    import chart0 from './component/chart0'
    import chart1 from './component/chart1'
    import chart2 from './component/chart2'
    import table0 from './component/table0'
export default {

    name: 'index',
    components: {
        chart0,
        chart1,
        chart2,
        table0
    },
    data() {
        return {

        }
    },
    methods: {
    }
}
</script>

<style>
    .menu-card .area{
        cursor:pointer;
    }
    .menu-card .item{
        text-align: center;
        height: 70px;
        line-height: 70px;
        border-radius: 4px;
        background-color: #f8f8f8;
        color: #666;
    }
    .menu-card .title{
        line-height: 30px;
        text-align: center;
    }
    .thing-card  ,.menu-card ,.info-card{
        height: 300px;
    }
    .thing-card .item{
        cursor: pointer;
        height: 90px;
        background-color: #f8f8f8;
        color: #666;
        margin-bottom: 20px;
    }
    .thing-card .item .title{
        color: #999;
        padding: 10px 0 0 10px;
        font-size:12px;
    }
    .thing-card .item .num{
        color: #e6a23c;
        line-height: 30px;
        padding-left: 10px;
        padding-top: 10px;
        font-size:32px;
    }
    .el-card {
        margin-bottom: 10px;
    }
</style>
