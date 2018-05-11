<template>
    <div>
        <el-table
            :data="tableData"
            style="width: 100%"
            border>
            <el-table-column type="expand">
                <template slot-scope="scope">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="time">
                            <span>{{ scope.row.date}}</span>
                        </el-form-item>
                        <el-form-item label="time">
                            <span>{{ scope.row.date}}</span>
                        </el-form-item>
                        <el-form-item label="time">
                            <span>{{ scope.row.date}}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column
                prop="date"
                label="日期"
                sortable
                width="180">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
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
                show-overflow-tooltip
                :formatter="formatter">
            </el-table-column>
            <el-table-column fixed="right" label="操作">
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
        </el-pagination>
        <el-dialog
            :title="editModelType==='edit'?'编辑':'新增'"
            :visible.sync="editModelShow"
            width="600px"
            :before-close="handleClose">
            <el-form ref="form" :model="editData" label-width="80px">
                <el-form-item label="日期" prop="date">
                    <el-date-picker
                        v-model="editData.date"
                        type="date"
                        value-format="yyyy-MM-dd"
                        placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="editData.name"></el-input>
                </el-form-item>
                <el-form-item label="地址" prop="address">
                    <el-input v-model="editData.address"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editModelShow=false;">取 消</el-button>
                <el-button type="primary" @click="confirmModel">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "table0",
        data(){
            return{
                editModelShow:false,
                editModelType:'edit',
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎1',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎2',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎3',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎4',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                editData:{
                    id:0,
                    name:'',
                    date:'',
                    address:''
                },
                multipleSelection:[]
            }
        },
        methods:{
            formatter(row, column) {
                return row.address;
            },
            handleClose(done){
                this.$refs['form'].resetFields();
                done();
            },
            handleEdit(index,row){
                console.log(index)
                this.editData.name=row.name;
                this.editData.date=row.date;
                this.editData.address=row.address;
                this.editData.id=index;
                this.editModelShow=true;
                this.editModelType='edit'
            },
            handleDelete(index,row){
                console.log(index)
                this.tableData.splice(index,1);
            },
            confirmModel(){
                if (this.editModelType==='edit'){
                    let obj = this.tableData.splice(this.editData.id,1);
                    obj[0].name =  this.editData.name;
                    obj[0].date =  this.editData.date;
                    obj[0].address =  this.editData.address;
                    this.tableData.splice(this.editData.id,0,obj[0])
                    this.$refs['form'].resetFields();
                }
                if (this.editModelType==='add'){
                    let obj = {};
                    obj.name =  this.editData.name;
                    obj.date =  this.editData.date;
                    obj.address =  this.editData.address;
                    this.tableData.push(obj)
                }
                this.editModelShow=false;
            }
        }
    }
</script>

<style scoped>
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 40%;
    }
</style>
