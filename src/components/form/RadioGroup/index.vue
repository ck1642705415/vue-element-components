<template>
  <el-form-item :label="label" :prop="dataIndex">
    <el-radio-group v-model="form[dataIndex]" :size="size" @change="handleChange">
      <el-radio v-for="item in dataSource" :key="item.value" :label="item.value" :border="border">{{item.name}}</el-radio>
    </el-radio-group>
  </el-form-item>
</template>
<script>
  export default {
    name: 'radioGroupC',
    props: {
      form: {type: Object},                           // 表单域（必传）
      dataIndex: {type: String},                          // 绑定值（必传）
      label: {type: String, default: ''},             // 表单项标签名
      border: {type: Boolean, default: false},        // 是否显示边框
      size: {type: String, default: ''},        // 大小，可取值medium / small / mini
      dataSource: {type: Array, default: []}          // 数据
    },
    methods: {
      handleChange(e) {
        this.$emit('handleChange', e)
      }
    }
  }
</script>
