<template>
  <el-popover
    placement="top"
    v-model="visible">
    <p style="margin-bottom: 10px"><i :class="iconName" :style="{color: iconColor,marginRight:'5px'}"></i>{{title}}</p>
    <div style="text-align: right; margin: 0">
      <el-button size="mini" type="text" @click="handleCancel">{{cancelButtonText}}</el-button>
      <el-button type="primary" size="mini" @click="handleConfirm">{{confirmButtonText}}</el-button>
    </div>
    <span slot="reference">
      <slot></slot>
    </span>
  </el-popover>
</template>
<script>
  export default {
    name: 'PopconfirmC',
    props: {
      confirmButtonText: {type: String, default: '确认'},
      cancelButtonText: {type: String, default: '取消'},
      iconName: {type: String, default: 'el-icon-question'},
      iconColor: {type: String, default: '#E6A23C'},
      title: {type: String, default: '这是一段内容确定删除吗？'},
    },
    data() {
      return {
        visible: false
      }
    },
    methods: {
      handleCancel() {
        this.$emit('handleCancel','')
        this.visible = false
      },
      handleConfirm() {
        this.$emit('handleConfirm','')
        this.visible = false
      }
    }
  }
</script>
