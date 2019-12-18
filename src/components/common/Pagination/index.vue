<template>
  <el-pagination
    @current-change="handleCurrentChange"
    :current-page="current"
    :page-size="pageSize"
    layout="total, prev, pager, next, jumper"
    :total="total"
    style="text-align: right;margin-top: 15px">
  </el-pagination>
</template>
<script>
  export default {
    name: 'PaginationC',
    props: {
      current: {type: Number, default: 1},       // 当前页数
      total: {type: Number, default: 0},         // 总数
      pageSize: {type: Number, default: 10},     // 每页展示的数量
    },
    methods: {
      handleCurrentChange(e) {
        this.$emit('handleCurrentChange', e)
      }
    }
  }
</script>
