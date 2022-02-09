<template>
  <div class="menu-icons">
    <div class="menu-header">
      <img
        src="https://imgs.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png"
        alt=""
      />
      <span>本周热门榜单</span>
      <span>更多景点></span>
    </div>
    <ul class="hot-list">
      <li class="hot-item" v-for="item in hotList">
        <div class="hot-item-image">
          <img :src="item.imgUrl" alt="" />
        </div>
        <div class="hot-item-name">{{ item.title }}</div>
        <div class="hot-item-price">
          <span>
            ¥<em>{{ item.price }}</em></span
          >
          起
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["hotList"],
  data() {
    return {};
  },
};
</script>
<style scoped lang="stylus">
@import '~css/common.styl';

.menu-icons {
  margin-top: 0.3rem;
  background-color: #fff;
  font-size: 0.28rem;
}

.menu-icons .menu-header {
  padding: 0.2rem;
  height: 0;
  position: relative;
  height: 0.5rem;
}

.menu-icons .menu-header img {
  width: 15px;
  height: 15px;
  line-height: 0.5rem;
  /* float: left;
  margin-left: 0.5rem; */
}

.menu-icons .menu-header span {
  font-size: 0.32rem;
  /* float: left; */
  /* padding-top: 2px; */
  /* line-height: 0.5rem; */
}

.menu-icons .menu-header span:last-child {
  position: absolute;
  font-size: 0.28rem;
  right: 0.2rem;
  top: 0.38rem;
}

.hot-list {
  padding: 0 0.3rem;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}

.hot-list .hot-item {
  padding: 0 0 0.2rem 0;
  margin-right: 0.15rem;
  width: 2rem;
  /* float: left; */
  display: inline-block;
}

.hot-list .hot-item:last-child {
  margin-right: 0;
}

.hot-list .hot-item .hot-item-name {
  margin-top: 0.12rem;
  text-align: center;
  textOverflow();
}

.hot-item-image img {
  width: 2rem;
}

.hot-item .hot-item-price {
  text-align: center;
  color: #616161;
  font-size: 0.12rem;
}

.hot-item .hot-item-price span {
  color: #ff8300;
}
</style>