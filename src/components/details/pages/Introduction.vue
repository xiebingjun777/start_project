<template>
  <div class="introduction">
    <div class="introduction-main">
      <div class="introduction-left">
        <div class="mainShow">
          <div class="score"><em>5.0</em>分 超赞</div>
          <div class="comment">
            <p>3384条评论</p>
            <p>31条攻略</p>
          </div>
        </div>
        <a class="iconfont">></a>
      </div>
      <div class="introduction-right">
        <p>景点简介</p>
        <p>开发时间，贴士</p>
      </div>
    </div>
    <div class="introduction-address">
      <div class="iconfont"><i>&#xe600;</i>桂林市阳朔兴坪古镇</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailIntroduction",
  methods: {
    toHome() {
      this.$router.push("/");
    },
  },
};
</script>
<style scoped lang="stylus">
.introduction {
  padding: 0.1rem 0.25rem;
  padding-bottom: 0;
  margin-bottom: 0.1rem;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  position: relative;
  top: -0.2rem;
  background: #fff;
}

.introduction-main {
  font-size: 0.4rem;
  overflow: hidden;
  padding: 0.15rem 0rem;
  display: flex;
}

.introduction-left {
  display: flex;
  flex: 1;
}

.introduction-right {
  padding-left: 0.3rem;
  flex: 1;
  position: relative;
}

.introduction-right::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 1px;
  border-left: 1px solid #e0e0e0;
  transform: scaleX(0.5);
}

.introduction-right p:first-child {
  font-size: 0.33rem;
}

.introduction-right p:nth-of-type(2) {
  color: #9e9e9e;
  font-size: 0.22rem;
  margin-top: 0.13rem;
}

.introduction-left .iconfont {
  flex: 1;
  color: #9e9e9e;
  line-height: 38.5px;
  padding-left: 0.7rem;
}

.score {
  color: #ff8300;
  font-size: 0.33rem;
}

.score em {
  font-size: 0.4rem;
}

.comment {
  margin-top: 0.13rem;
  color: #9e9e9e;
  font-size: 0.22rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.comment p:nth-of-type(2) {
  margin-left: 0.1rem;
}

.introduction-address {
  position: relative;
  padding: 0.25rem 0;
}

.iconfont {
  font-size: 0.28rem;
}

.iconfont i {
  color: #e0e0e0;
  margin-right: 0.2rem;
}

.introduction-address::before {
  content: '';
  position: absolute;
  top: 0;
  width: 100%;
  height: 1px;
  border-top: 1px solid #e0e0e0;
  transform: scaleY(0.5);
}
</style>