<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe604;</span>
    </div>
    <div class="header-search">
      <span class="iconfont">&#xe60d; 请输入地点</span>
    </div>
    <div class="header-right">
      <router-link to="/city">
        <span class="iconfont">&#xe600;{{ currentCity }}</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Homeheader",
  props: ["currentCity"],
};
</script>
<style scoped lang="stylus">
@import '~css/var.styl';
@import '~css/common.styl';

.header {
  width: 100%;
  height: 0.88rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $bgColor;
  font-size: 0.25rem;
}

.header-left {
  flex: 0.15;
  text-align: center;
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
  display: flex;
  justify-content: center;
  flex: 0.3;
}

.header-right span {
  // margin-left: 0.3rem;
  color: #fff;
  textOverflow();
}
</style>