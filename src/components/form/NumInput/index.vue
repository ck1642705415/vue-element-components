<template>
  <el-form-item :label="label" :prop="prop">
    <el-input-number
      v-model="form[model]"
      controls-position="right"
      @change="handleChange"
      :min="min"
      :max="max"
      :step="step"
      :step-strictly="stepStrictly"
      :precision="precision"
    />
  </el-form-item>
</template>
<script>
  export default {
    name: 'NumInput',
    props: {
      form: {type: Object},                           // 表单域（必传）
      model: {type: String},                          // 绑定值（必传）
      label: {type: String, default: ''},             // 表单项标签名
      prop: {type: String, default: ''},              // 表单域 model 字段，在使用 validate、resetFields 方法的情况下
      disabled: {type: Boolean, default: false},      // 是否禁用
      size: {type: String, default: 'medium'},        // 输入框大小，可取值medium / small / mini
      min: {type: Number, default: -Infinity},        // 最小值
      max: {type: Number, default: Infinity},         // 最大值
      step: {type: Number, default: 1},               // 计数器步长
      stepStrictly: {type: Boolean, default: false},  // 是否只能输入 step 的倍数
      precision: {type: Number},                      // 数值精度
    },
    methods: {
      handleChange(e) {
        this.$emit('handleChange', e)
      }
    }
  }
</script>
