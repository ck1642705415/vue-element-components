<template>
  <el-form-item :label="label" :prop="dataIndex">
    <el-date-picker
      v-model="form[dataIndex]"
      :type="type"
      :placeholder="placeholder"
      :clearable="clearable"
      :disabled="disabled"
      :size="size"
      @change="handleChange"
      style="width: 100%"
    />
  </el-form-item>
</template>
<script>
  export default{
    name:'DatePicker',
    props:{
      form: {type: Object},                           // 表单域（必传）
      dataIndex: {type: String},                          // 绑定值（必传）
      label: {type: String, default: ''},             // 表单项标签名
      type: {type: String, default: 'date'},          // 日期类型 可取值date / month / year / week / datetime
      placeholder: {type: String, default: '请输入'},  // 占位文本
      clearable: {type: Boolean, default: true},      // 是否可清空
      disabled: {type: Boolean, default: false},      // 是否禁用
      size: {type: String, default: 'medium'}               // 大小，可取值medium / small / mini
    },
    methods:{
      handleChange(e){
        this.$emit('handleChange',e)
      }
    }
  }
</script>
