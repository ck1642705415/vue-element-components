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
  .wrapper{
    min-width: 1100px;
    height: 100%;
    padding: 15px;
    box-sizing: border-box;
    background-color: #fff;
  }
</style>
