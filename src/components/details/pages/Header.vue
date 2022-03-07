<template>
  <div class="header">
    <div class="header-left" @click="toHome">
      <span class="iconfont">&#xe604;</span>
    </div>
    <div class="header-title">景点详情</div>
  </div>
</template>
<script>
export default {
  name: "DetailHeader",
  methods: {
    toHome() {
      this.$router.push("/");
    },
  },
};
</script>
<style scoped lang="stylus">
@import '~css/var.styl';

.header {
  width: 100%;
  height: 0.88rem;
  background-color: $bgColor;
  font-size: 0.25rem;
  position: relative;
}

.header-left {
  width: 0.4rem;
  padding: 0.2rem;
  text-align: center;
}

.header-left span {
  margin: 0 0.25rem;
}

.header-title {
  text-align: center;
  position: absolute;
  top: 0.3rem;
  left: 45%;
  font-size: 0.3rem;
  color: #fff;
}

.header-search span {
  margin: 0 0.15rem;
  line-height: 27.5px;
}

.header-right {
  flex: 0.3;
  color: #fff;
}

.header-right span {
  margin-left: 0.3rem;
}
</style>