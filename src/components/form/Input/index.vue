<template>
  <el-form-item :label="label" :prop="prop">
    <el-input
      :type="type"
      v-model="form[dataIndex]"
      :placeholder="placeholder"
      :clearable="clearable"
      :disabled="disabled"
      :size="size"
      :prefix-icon="prefixIcon"
      :suffix-icon="suffixIcon"
      :maxlength="maxlength"
      :minlength="minlength"
      :show-password="showPassword"
      :show-word-limit="showWordLimit"
      @change="changeInputValue"
    />
  </el-form-item>
</template>
<script>
  export default {
    name: 'InputC',
    props: {
      form: {type: Object},                           // 表单域（必传）
      dataIndex: {type: String},                          // 绑定值（必传）
      label: {type: String, default: ''},             // 表单项标签名
      prop: {type: String, default: ''},              // 表单域 model 字段，在使用 validate、resetFields 方法的情况下

      type: {type: String, default: 'text'},          // 输入框类型
      placeholder: {type: String, default: '请输入'},  // 输入框占位文本
      clearable: {type: Boolean, default: false},     // 是否可清空
      disabled: {type: Boolean, default: false},      // 是否禁用
      size: {type: String, default: ''},              // 输入框大小，可取值medium / small / mini
      prefixIcon: {type: String, default: ''},        // 输入框头部图标
      suffixIcon: {type: String, default: ''},        // 输入框尾部图标
      maxlength: {type: Number},                      // 最大输入长度
      minlength: {type: Number},                      // 最小输入长度
      showPassword: {type: Boolean, default: false},  // 是否显示切换密码图标
      showWordLimit: {type: Boolean, default: false}  // 是否显示输入字数统计，只在 type = "text" 或 type = "textarea" 时有效
    },
    methods: {
      changeInputValue(e) {
        this.$emit('changeInputValue', e)
      }
    }
  }
</script>
