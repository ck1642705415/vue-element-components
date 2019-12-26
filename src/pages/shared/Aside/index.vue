<template>
  <el-menu
    :default-active="menuList[0].path"
    class="el-menu-vertical-demo"
    background-color="rgb(67,74,80)"
    text-color="#fff">
    <template v-for="item in menuList">
      <template v-if="!item.subMenu">
        <el-menu-item :index="item.path">
          <i class="el-icon-menu"></i>
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
      </template>
      <template v-else>
        <el-submenu :index="item.path">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{item.title}}</span>
          </template>
          <template v-for="subItem in item.subMenu">
            <el-menu-item :index="subItem.path">{{subItem.title}}</el-menu-item>
          </template>
        </el-submenu>
      </template>
    </template>
  </el-menu>
</template>
<script>
  import {Menu} from '@/constants/menu'

  export default {
    name: 'Aside',
    data() {
      return {
        menuList: Menu
      }
    },
    mounted() {

    }
  }
</script>
<style scoped lang="scss">
  @import "@/style/varible.scss";

  .el-menu {
    height: 100%;
    overflow: hidden;
    border: none;
  }

  /deep/ .el-submenu__title {
    &:hover {
      background: none !important;
      color: $--color-primary !important;
      i {
        color: $--color-primary;
      }
    }
  }

  /deep/ .el-menu-item {
    box-sizing: border-box;
    min-width: 0;
    &:hover {
      background: none !important;
      color: $--color-primary !important;
      i {
        color: $--color-primary;
      }
    }
  }

  /deep/ .el-menu-item.is-active {
    background-color: #545c64 !important;
  }
</style>
