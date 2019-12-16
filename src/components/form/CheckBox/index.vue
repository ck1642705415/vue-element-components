<template>
  <el-form-item :label="label" :prop="prop">
    <el-checkbox-group v-model="form[model]" :size="size" @change="handleChange">
      <el-checkbox v-for="item in dataSource" :key="item.value" :label="item.value" :border="border">{{item.name}}</el-checkbox>
    </el-checkbox-group>
  </el-form-item>
</template>
<script>
  export default {
    name: 'checkBoxC',
    props: {
      form: {type: Object},                           // 表单域（必传）
      model: {type: String},                          // 绑定值（必传）
      label: {type: String, default: ''},             // 表单项标签名
      prop: {type: String, default: ''},              // 表单域 model 字段，在使用 validate、resetFields 方法的情况下
      border: {type: Boolean, default: false},        // 是否显示边框
      size: {type: String, default: 'medium'},        // 大小，可取值medium / small / mini
      dataSource: {type: Array, default: []}          // 数据
    },
    methods: {
      handleChange(e) {
        this.$emit('handleChange', e)
      }
    }
  }
</script>
