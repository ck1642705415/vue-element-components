<template>
  <el-form-item :label="label" :prop="dataIndex">
    <el-select
      v-model="form[dataIndex]"
      :placeholder="placeholder"
      :size="size"
      :disabled="disabled"
      :clearable="clearable"
      :multiple="multiple"
      :multiple-limit="multipleLimit"
      @change="handleChange"
      style="width: 100%"
    >
      <el-option v-for="item in options" :key="item.value" :label="item.name" :value="item.value"></el-option>
    </el-select>
  </el-form-item>
</template>
<script>
  import {store} from './store/store'

  export default {
    name: "selectC",
    props: {
      form: {type: Object},                            // 表单域（必传）
      dataIndex: {type: String},                           // 绑定值（必传）
      label: {type: String, default: ""},              // 表单项标签名
      disabled: {type: Boolean, default: false},       // 是否禁用
      size: {type: String, default: 'medium'},               // 大小，可取值medium / small / mini
      placeholder: {type: String, default: "请选择"},   // 占位文本
      clearable: {type: Boolean, default: false},      // 是否可以清空选项
      multiple: {type: Boolean, default: false},       // 是否多选
      multipleLimit: {type: Number, default: 0},       // 多选时限制最多选择的数量
      loadType: {type: String}
    },
    data() {
      return {
        store: new store()
      }
    },
    computed: {
      options() {
        return this.store.SelectStore.getters.options
      }
    },
    mounted() {
      this.store.SelectStore.dispatch("GET_SELECT_OPTIONS", {loadType: this.loadType});
    },
    methods: {
      handleChange(e) {
        this.$emit("handleChange", e);
      }
    }
  };
</script>
