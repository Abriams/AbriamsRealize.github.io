<template>
    <el-table
        :data="tableData"
        border
        fit
        highlight-current-row
        style="width: 100%">
        <el-table-column
            prop="date"
            label="序号"
            width="180"
            type="index"
            align="center">
        </el-table-column>
        <el-table-column
            prop="date"
            label="日期"
            width="180"
            align="center"
            sortable="true"
            sort-by="index">
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名"
            width="180"
            align="center">
        </el-table-column>
        <el-table-column
            prop="address"
            label="地址"
            align="center">
        </el-table-column>
    </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
    };
  },
  created() {
    this.tableData.push(
        {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
        },
        {
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1517 弄"
        },
        {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄"
        },
        {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄"
        }
    );
  }
};
</script>