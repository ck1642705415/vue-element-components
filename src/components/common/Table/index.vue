<template>
  <el-table
    ref="multipleTable"
    :data="tableData"
    :stripe="false"
    :border="false"
    :size="size"
    :header-cell-style="headStyle"
    style="width: 100%"
    @selection-change="handleSelectionChange"
  >
    <!-- 多选框 -->
    <el-table-column v-if="multiple" type="selection" width="55" />
    <!-- 展开行 -->
    <template v-if="expand">
      <el-table-column type="expand">
        <template slot-scope="props">
          <slot name="expandInfo" :row="props.row"></slot>
        </template>
      </el-table-column>
    </template>
    <el-table-column
      v-for="(column,index) in columns"
      :fixed="column.fixed"
      :key="index"
      :prop="column.prop"
      :label="column.label"
      :width="column.width"
    >
      <template slot-scope="scope">
        <template v-if="column.formatter">
          <span style="display:flex;align-items:center" v-html="column.formatter(scope.row, column)"></span>
        </template>
        <template v-if="column.render">
          <render-dom :column="column" :row="scope.row" :render="column.render" :index="index"/>
        </template>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  name: "Table",
  components: {
    renderDom: {
      functional: true,
      props: {
        row: Object,
        render: Function,
        index: Number,
        column: {
          type: Object,
          default: null
        }
      },
      render: (h, ctx) => {
        const params = {
          row: ctx.props.row,
          index: ctx.props.index
        };
        return ctx.props.render(h, params);
      }
    }
  },
  props: {
    columns: { type: Array, default: [] }, // 表头
    tableData: { type: Array, default: [] }, // 数据
    size: { type: String, default: "" }, // 表格大小，可选值medium / small / mini
    stripe: { type: Boolean, default: false }, // 显示斑马线
    border: { type: Boolean, default: false }, // 显示边框
    multiple: { type: Boolean, default: false }, // 是否显示多选框
    expand: { type: Boolean, default: false } // 是否显示展开行
  },
  methods: {
    // 更改表头样式
    headStyle({ rowIndex }) {
      if (rowIndex === 0) {
        return "background-color: #eee;color:rgba(0,0,0,.65)";
      }
    },
    // 多选事件
    handleSelectionChange(val) {
      console.log(val);
      this.$emit('handleSelectionChange',val)
    }
  }
};
</script>
<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
