<template>
  <el-form-item :label="label" :prop="dataIndex">
    <el-date-picker
      v-model="form[dataIndex]"
      :type="type"
      range-separator="-"
      :start-placeholder="startPlaceholder"
      :end-placeholder="endPlaceholder"
      :clearable="clearable"
      :disabled="disabled"
      @change="handleChange"
    />
  </el-form-item>
</template>
<script>
  export default {
    name: 'RangePicker',
    props: {
      form: {type: Object},                                    // 表单域（必传）
      dataIndex: {type: String},                                   // 绑定值（必传）
      label: {type: String, default: ''},                      // 表单项标签名
      size: {type: String, default: 'medium'},                       // 大小，可取值medium / small / mini
      type: {type:String, default: 'daterange'},               // 类型，可取值daterange / monthrange / datetimerange
      startPlaceholder: {type:String, default: '开始日期'},     // 开始日期占位符
      endPlaceholder: {type:String, default: '结束日期'},       // 结束日期占位符
      clearable: {type: Boolean, default: true},                // 是否可清空
      disabled: {type: Boolean, default: false}                 // 是否禁用
    },
    methods:{
      handleChange(e){
        this.$emit('handleChange',e)
      }
    }
  }
</script>
