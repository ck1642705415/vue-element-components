<template>
  <WrapperC>
    <el-row :gutter="20">
      <el-col :span="8"><div class="grid-content"></div></el-col>
      <el-col :span="8"><div class="grid-content"></div></el-col>
      <el-col :span="8"><div class="grid-content"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8"><div class="grid-content"></div></el-col>
      <el-col :span="8"><div class="grid-content"></div></el-col>
      <el-col :span="8"><div class="grid-content"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8"><div class="grid-content"></div></el-col>
      <el-col :span="8"><div class="grid-content"></div></el-col>
      <el-col :span="8"><div class="grid-content"></div></el-col>
    </el-row>
  </WrapperC>
</template>
<script>
  export default{
    name:'home'
  }
</script>
<style lang="scss" scoped>
  .el-row {
    &:last-child{
      .el-col{
        margin-bottom: 0;
      }
    }
  }
  .el-col {
    height: 26vw;
    min-height: 400px;
    border-radius: 4px;
    margin-bottom: 20px;
  }
  .grid-content {
    height: 100%;
    border-radius: 4px;
    background-color: #efefef;
  }
</style>
