<template>
  <div class="cityList">
    <div class="List-title">A</div>
    <ul class="List-msg">
      <li class="List-item">阿克苏地区</li>
      <li class="List-item">阿克苏地区</li>
      <li class="List-item">阿克苏地区</li>
      <li class="List-item">阿克苏地区</li>
      <li class="List-item">阿克苏地区</li>
      <li class="List-item">阿克苏地llllasdasdl区</li>
    </ul>
    <div class="List-title">B</div>
    <ul class="List-msg">
      <li class="List-item">包头</li>
      <li class="List-item">包头</li>
      <li class="List-item">包头</li>
      <li class="List-item">包头</li>
      <li class="List-item">包头</li>
      <li class="List-item">包头</li>
    </ul>
  </div>
  </div>
  
</template>
<script>
export default {
  name: "Homeheader",
  methods: {
    toHome() {
      this.$router.push("/");
    },
  },
};
</script>
<style scoped lang="stylus">
@import '~css/common.styl';

.List-title {
  font-size: 0.26rem;
  color: #212121;
  padding: 0.3rem;
}

.List-msg {
  background: #fff;
  font-size: 0.26rem;
  position: relative;
  overflow: hidden;
}

/* .List-msg:before {
  content: " ";
  position: absolute;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  left: 25%;
  width: 25%;
  height: 100%;
}
.List-msg:after {
  content: " ";
  position: absolute;
  border-left: 1px solid #ddd;
  right: 25%;
  height: 100%;
} */
.List-item {
  padding: 0 0.06rem;
  width: 25%;
  text-align: center;
  height: 0.9rem;
  line-height: 0.9rem;
  float: left;
  border-bottom: 0.02rem solid #ddd;
  border-right: 0.02rem solid #ddd;
  box-sizing: border-box;
  textOverflow();
}
</style>