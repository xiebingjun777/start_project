<template>
  <div class="location">
    <div>
      <span class="iconfont">&#xe600;</span>
      广州长隆
    </div>
    <div>
      <span class="iconfont">&#xe600;</span>
      玩水季
    </div>
  </div>
</template>
<script>
</script>
<style scoped>
.location {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #fff;
}
.location div {
  width: 100%;
  /* height: ;
   */
  line-height: 1rem;
  font-size: 0.3rem;
  text-align: center;
  border-top: 1px solid #ccc;
}
.location div:first-of-type {
  border-right: 1px solid #ccc;
}
</style>
