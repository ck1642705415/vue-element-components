<template>
  <el-form-item :label="label" :prop="prop">
    <el-switch
      v-model="form[model]"
      active-color="#409EFF"
      inactive-color="#ccc"
      :active-value="activeValue"
      :inactive-value="inactiveValue"
      @change="handleChange"
    />
  </el-form-item>
</template>
<script>
  export default{
    name: 'SwitchC',
    props:{
      form: {type: Object},                                                // 表单域（必传）
      model: {type: String},                                               // 绑定值（必传）
      label: {type: String, default: ''},                                  // 表单项标签名
      prop: {type: String, default: ''},                                   // 表单域 model 字段，在使用 validate、resetFields 方法的情况下
      disabled: {type: Boolean, default: false},                           // 是否禁用
      activeValue: {type: Boolean | String | Number, default: true},       // switch 打开时的值
      inactiveValue: {type: Boolean | String | Number, default: false}     // switch 关闭时的值
    },
    methods:{
      handleChange(e){
        console.log(e)
      }
    }
  }
</script>
