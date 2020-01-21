<template>
  <el-container>
    <el-aside width="180px">
      <AsideC/>
    </el-aside>
    <el-main>
      <el-header height="60px">
        <HeaderC/>
      </el-header>
      <el-header class="breadcrumb-wrapper" v-if="$route.name!=='Home'">
        <BreadcrumbC/>
      </el-header>
      <div class="main-wrapper" :style="{height:$route.name!=='Home'?'calc(100% - 120px)':'calc(100% - 75px)',marginTop:$route.name!=='Home'?'0':'15px'}">
        <router-view/>
      </div>
    </el-main>
  </el-container>
</template>
<script>
  import Aside from './Aside'
  import Breadcrumb from './Breadcrumb'
  import Header from './Header'

  export default {
    name: 'Main',
    components: {
      AsideC: Aside,
      BreadcrumbC: Breadcrumb,
      HeaderC: Header,
    }
  }
</script>
<style scoped lang="scss">
  .el-container {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .el-main {
    padding: 0;
    background-color: #f9f9f9;
  }

  .el-header {
    display: flex;
    align-items: center;
    background-color: #fff;
  }

  .breadcrumb-wrapper {
    background-color: #f9f9f9;
  }

  .main-wrapper {
    width: 100%;
    padding: 0 15px 15px 15px;
    box-sizing: border-box;
  }
</style>
