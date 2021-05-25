<template>
  <div class="header">
    <div class="header-left"><span class="iconfont">&#xe604;</span></div>
    <div class="header-search"><span class="iconfont">&#xe60d;</span></div>
    <div class="header-right"><span class="iconfont">&#xe600;</span></div>
  </div>
</template>
<script>
export default {
  name: "Homeheader",
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 0.88rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: darkturquoise;
}
.header-left {
  flex: 0.4;
}
.header-search {
  flex: 1;
  height: 0.55rem;
  background-color: #fff;
}
.header-right {
  flex: 0.4;
}
</style>