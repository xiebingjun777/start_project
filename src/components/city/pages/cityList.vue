<template>
  <div class="city">
    <div class="header">
      <div class="header-left" @click="toHome">
        <span class="iconfont">&#xe604;</span>
      </div>
      <div class="header-title">城市选择</div>
      <!-- <div class="header-right">
      <router-link to="/city">0 </router-link>
    </div> -->
    </div>
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
    <div class="sort">
      <div class="sort-title">字母排序</div>

      <ul class="sort-list">
        <li v-for="item in cityLists" :key="item.id" class="sort-item">
          {{ item.title }}
        </li>
      </ul>
    </div>
    <div class="cityList">
      <div v-for="item in cityLists" :key="item.id">
        <div class="List-title">{{ item.title }}</div>
        <ul class="List-msg">
          <li v-for="areaItem in item.lists" class="List-item">
            {{ areaItem }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Homeheader",
  props: ["hotCity", "cityLists"],
  methods: {
    toHome() {
      this.$router.push("/");
    },
  },
};
</script>
<style scoped lang="stylus">
@import '~css/var.styl';
@import '~css/common.styl';

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

.hot-item::before {
  content: ' ';
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

.sort-title {
  font-size: 0.26rem;
  color: #212121;
  padding: 0.3rem;
}

.sort-list {
  background: #fff;
  font-size: 0.28rem;
  position: relative;
  overflow: hidden;
  // padding: 0.2rem;
}

.sort-item::before {
  content: ' ';
  position: absolute;
  height: 100%;
  width: 33.333%;
  left: 33.333%;
  border-left: 0.02rem solid #ddd;
  border-right: 0.02rem solid #ddd;
}

.sort-item {
  width: 33.333%;
  text-align: center;
  height: 0.9rem;
  line-height: 0.9rem;
  float: left;
  border-bottom: 0.02rem solid #ddd;
}

// .hot-item {
// width: 16.666%;
// text-align: center;
// height: 0.9rem;
// line-height: 0.9rem;
// float: left;
// }
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

// .List-msg:before {
// content: ' ';
// width: 0;
// position: absolute;
// border-left: 1px solid #ddd;
// border-right: 1px solid #ddd;
// left: 25%;
// height: 100%;
// }

// .List-msg:after {
// content: ' ';
// width: 0;
// position: absolute;
// border-left: 1px solid #ddd;
// right: 25%;
// height: 100%;
// }
.List-item {
  padding: 0 0.06rem;
  width: 33.3%;
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