<template>
  <div class="menu-icons">
    <div class="menu-header">
      <img
        src="https://gw.alicdn.com/tfs/TB1LvIxVAvoK1RjSZFDXXXY3pXa-183-144.png?getAvatar=1"
        alt=""
      />
      <span>本周热门榜单</span>
      <span>更多景点></span>
    </div>
    <ul class="hot-list">
      <li class="hot-item">
        <div class="hot-item-image">
          <img
            src="https://imgs.qunarzz.com/sight/p0/201403/07/a47369acdec386e923b3713c2c8b9b21.jpg_250x250_37165821.jpg"
            alt=""
          />
        </div>
        <div class="hot-item-name">银子岩</div>
        <div class="hot-item-price">
          <span> ¥<em>53.5</em></span>
          起
        </div>
      </li>
      <li class="hot-item">
        <div class="hot-item-image">
          <img
            src="https://imgs.qunarzz.com/sight/p0/201307/26/f079b5ba23c098c5c8d65eac.jpg_250x250_82f05e59.jpg"
            alt=""
          />
        </div>
        <div class="hot-item-name">杨堤</div>
        <div class="hot-item-price">
          <span> ¥<em>79.5</em></span>
          起
        </div>
      </li>
      <li class="hot-item">
        <div class="hot-item-image">
          <img
            src="https://imgs.qunarzz.com/sight/p0/1512/fe/fe08d17ffe7d036b90.water.jpg_250x250_77032a37.jpg"
            alt=""
          />
        </div>
        <div class="hot-item-name">龙脊梯田</div>
        <div class="hot-item-price">
          <span> ¥<em>80</em></span>
          起
        </div>
      </li>
      <li class="hot-item">
        <div class="hot-item-image">
          <img
            src="https://imgs.qunarzz.com/sight/p0/1709/f8/f8faa3df62df0668a3.water.jpg_250x250_d2f2cd32.jpg"
            alt=""
          />
        </div>
        <div class="hot-item-name">象山景区</div>
        <div class="hot-item-price">
          <span> ¥<em>54.5</em></span>
          起
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
</script>
<style scoped>
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
  width: 0.55rem;
  height: 0.4rem;
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
}
.hot-list .hot-item {
  padding: 0 0 0.2rem 0;
  margin-right: 0.15rem;
  width: 2rem;
  float: left;
}
.hot-list .hot-item .hot-item-name {
  margin-top: 0.12rem;
  text-align: center;
}
.hot-item-image img {
  width: 2rem;
}
.hot-item .hot-item-price {
  text-align: center;
}
.hot-item .hot-item-price span {
  color: #ff8300;
}
</style>