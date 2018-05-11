<template>
  <div>
      <el-row :gutter="10">
          <el-col :md="16">
              <el-row :gutter="10">
                  <el-col :md="12">
                      <el-card class="menu-card" style="min-height: 240px;">
                          <div slot="header" class="clearfix">
                              <span>主要功能</span>
                          </div>
                          <el-row :gutter="20">
                              <el-col :span="6" v-for="o in 8" :key="o" class="area">
                                  <div class="item">
                                      <i class="el-icon-menu"></i>
                                  </div>
                                  <div class="title">123</div>
                              </el-col>
                          </el-row>

                      </el-card>
                  </el-col>
                  <el-col :md="12">
                      <el-card class="box-card" style="min-height: 240px;">
                          <div slot="header" class="clearfix">
                              <span>待办事项</span>
                          </div>
                          <div v-for="o in 4" :key="o" class="text item">
                              {{'列表内容 ' + o }}
                          </div>
                      </el-card>
                  </el-col>
                  <el-col :md="24">
                      <el-card class="box-card">
                          <div slot="header" class="clearfix">
                              <span>图形</span>
                          </div>

                      </el-card>
                  </el-col>
                  <el-col :md="24">
                      <el-card class="box-card">
                          <div slot="header" class="clearfix">
                              <span>表格</span>
                          </div>
                          <el-table
                              :data="tableData"
                              style="width: 100%"
                              :default-sort = "{prop: 'date', order: 'descending'}"
                          >
                              <el-table-column
                                  prop="date"
                                  label="日期"
                                  sortable
                                  width="180">
                              </el-table-column>
                              <el-table-column
                                  prop="name"
                                  label="姓名"
                                  sortable
                                  width="180">
                              </el-table-column>
                              <el-table-column
                                  prop="address"
                                  label="地址"
                                  :formatter="formatter">
                              </el-table-column>
                          </el-table>
                      </el-card>
                  </el-col>
              </el-row>
          </el-col>
          <el-col :md="8">
              <el-card class="box-card">
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
                  <div v-for="o in 4" :key="o" class="text item">
                      {{'列表内容 ' + o }}
                  </div>
              </el-card>
              <el-card class="box-card">
                  <div slot="header" class="clearfix">
                      <span>信息啥的</span>
                      <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                  </div>
                  <div v-for="o in 4" :key="o" class="text item">
                      {{'列表内容 ' + o }}
                  </div>
              </el-card>
          </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
    name: 'index',
    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        }
    },
    methods: {
        formatter(row, column) {
            return row.address;
        }
    }
}
</script>

<style>
    .menu-card .area{
        cursor:pointer;
    }
    .menu-card .item{
        text-align: center;
        height: 40px;
        line-height: 40px;
        border-radius: 4px;
        background-color: #f8f8f8;
        color: #666;
    }
    .menu-card .title{
        line-height: 30px;
    }
    .el-card {
        margin-bottom: 10px;
    }
</style>
