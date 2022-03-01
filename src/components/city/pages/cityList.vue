<template>
  <div class="city">
    <!-- <div class="header">
      <div class="header-left" @click="toHome">
        <span class="iconfont">&#xe604;</span>
      </div>
      <div class="header-title">城市选择</div> -->
    <!-- <div class="header-right">
      <router-link to="/city">0 </router-link>
    </div> -->
    <!-- </div> -->
    <div class="container" ref="container">
      <div class="content">
        <div class="hot">
          <div class="hot-title">热门城市</div>

          <ul class="hot-list">
            <li class="hot-item" @click="changeLocalCity('北京')">北京</li>
            <li class="hot-item" @click="changeLocalCity('上海')">上海</li>
            <li class="hot-item" @click="changeLocalCity('广州')">广州</li>
            <li class="hot-item" @click="changeLocalCity('深圳')">深圳</li>
            <li class="hot-item" @click="changeLocalCity('苏州')">苏州</li>
            <li class="hot-item" @click="changeLocalCity('杭州')">杭州</li>
          </ul>
        </div>
        <div class="sort">
          <div class="sort-title">字母排序</div>

          <ul class="sort-list">
            <li
              v-for="item in cityLists"
              :key="item.id"
              class="sort-item"
              @click="scrollTo(item.title)"
            >
              {{ item.title }}
            </li>
          </ul>
        </div>
        <div class="cityList">
          <div v-for="item in cityLists" :key="item.id" :ref="item.title">
            <div class="List-title">{{ item.title }}</div>
            <ul class="List-msg">
              <li
                v-for="areaItem in item.lists"
                class="List-item"
                @click="changeLocalCity(areaItem)"
              >
                {{ areaItem }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import BScroll from "better-scroll";

export default {
  name: "Homeheader",
  props: ["hotCity", "cityLists"],
  data() {
    return {
      scroll: "",
    };
  },
  mounted() {
    // setTimeout(() => {
    //   // let container = this.$refs["container"];
    //   this.scroll = new BScroll(this.$refs["container"], { click: true });
    //   console.log(this.scroll);
    // }, 20);
    this.$nextTick(() => {
      // DOM渲染是异步的，操作DOM要在$nextTick的回调里，此时DOM已经渲染完毕
      this.scroll = new BScroll(this.$refs["container"], { click: true });
      console.log(this.scroll);
    });
  },

  methods: {
    toHome() {
      this.$router.push("/");
    },
    ...mapMutations(["changeCurrentCity"]),
    changeLocalCity(localCity) {
      this.changeCurrentCity(localCity);
      this.$router.push("/");
    },
    scrollTo(target) {
      console.log(this.$refs);
      console.log(this.$refs[target][0]);
      this.scroll.scrollToElement(this.$refs[target][0]);
    },
  },
};
</script>
<style scoped lang="stylus">
@import '~css/var.styl';
@import '~css/common.styl';

// .city {
// width: 100%;
// }
.container {
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0.88rem;
  background: #f5f5f5;
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
  width: 100%;
}

.hot-list:before {
  content: '';
  position: absolute;
  left: 33.333%;
  width: 0;
  height: 100%;
  border-left: 0.02rem solid #ddd;
}

.hot-list:after {
  content: '';
  position: absolute;
  right: 33.333%;
  width: 0;
  height: 100%;
  border-left: 0.02rem solid #ddd;
}

// .hot-item::before {
// content: ' ';
// position: absolute;
// height: 100%;
// width: 0;
// left: 33.333%;
// border-left: 0.02rem solid #ddd;
// }

// .hot-item::after {
// content: ' ';
// position: absolute;
// height: 100%;
// width: 0;
// right: 33.333%;
// border-left: 0.02rem solid #ddd;
// }
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
  content: '';
  position: absolute;
  height: 100%;
  width: 0;
  left: 33.333%;
  border-right: 0.02rem solid #ddd;
}

.sort-item::after {
  content: '';
  position: absolute;
  height: 100%;
  width: 0;
  right: 33.333%;
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