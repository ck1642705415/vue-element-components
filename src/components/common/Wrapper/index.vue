<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name:'Wrapper'
  }
</script>
<style scoped lang="scss">
  @import "@/style/common.scss";
  .wrapper{
    min-width: 1100px;
    height: 100%;
    padding: 15px;
    box-sizing: border-box;
    background-color: #fff;
    overflow: hidden;
    overflow-y: auto;
  }
</style>
