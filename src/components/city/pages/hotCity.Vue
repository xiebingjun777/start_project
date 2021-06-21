<template>
  <div class="hot">
    <div class="hot-title">热门城市</div>

    <ul class="hot-list">
      <li class="hot-item">北京</li>
      <li class="hot-item">上海</li>
      <li class="hot-item">广州</li>
      <li class="hot-item">深圳</li>
      <li class="hot-item">苏州</li>
      <li class="hot-item">杭州</li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.hot-title {
  font-size: 0.26rem;
  color: #212121;
  padding: 0.3rem;
}
.hot-list {
  background: #fff;
  font-size: 0.28rem;
  position: relative;
  overflow: hidden;
}
.hot-list::before {
  content: " ";
  position: absolute;
  height: 100%;
  width: 33.333%;
  left: 33.333%;
  border-left: 0.02rem solid #ddd;
  border-right: 0.02rem solid #ddd;
}
.hot-item {
  width: 33.333%;
  text-align: center;
  height: 0.9rem;
  line-height: 0.9rem;
  float: left;
  border-bottom: 0.02rem solid #ddd;
}
</style>