<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe604;</span>
    </div>
    <div class="header-search">
      <span class="iconfont">&#xe60d; 请输入地点</span>
    </div>
    <div class="header-right"><span class="iconfont">&#xe600;北京</span></div>
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
  font-size: 0.25rem;
}
.header-left {
  flex: 0.2;
}

.header-left span {
  margin: 0 0.25rem;
}
.header-search {
  flex: 1;
  height: 0.55rem;
  background-color: #fff;
  color: #e4e7ea;
  border-radius: 5px;
  font-weight: bold;
}
.header-search span {
  margin: 0 0.15rem;
  line-height: 27.5px;
}
.header-right {
  flex: 0.3;
}
.header-right span {
  margin-left: 0.3rem;
}
</style>