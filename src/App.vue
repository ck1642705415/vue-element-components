<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "App"
  };
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: #409eff;
  }

  .driver-line {
    display: block;
    width: 1px;
    height: 12px;
    background-color: #dcdfe6;
    margin: 0 8px;
  }
</style>
