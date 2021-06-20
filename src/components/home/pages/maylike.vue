<template>
  <div class="like">
    <div class="like-title">
      <img
        src="https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png"
        alt=""
      />
      猜你喜欢
    </div>
    <ul class="like-list">
      <li class="like-item border-bottom" v-for="item in likeList">
        <div class="like-item-img">
          <img :src="item.imgUrl" alt="" />
        </div>
        <div class="like-item-about">
          <div class="like-item-title">{{ item.title }}</div>
          <div class="like-item-count">{{ item.msg }}</div>
          <div class="like-item-price">
            <span class="mark"
              >¥<em>{{ item.pre }}</em></span
            >起
            <span class="like-item-location">{{ item.map }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      likeList: [
        {
          id: 1,
          imgUrl:
            "https://imgs.qunarzz.com/sight/p0/2006/6d/6d32ad054c71da4a3.img.jpg_200x200_ca4041fd.jpg",
          title: "桂林千古情",
          msg: "3216条评论",
          pre: "280",
          map: "桂林",
        },
        {
          id: 2,
          imgUrl:
            "https://imgs.qunarzz.com/sight/p0/201408/11/d3d0abadb961eb32cbfd7b1615efdb12.jpg_200x200_cfb94c7f.jpg",
          title: "山水间演出",
          msg: "263条评论",
          pre: "83",
          map: "秀峰区",
        },
        {
          id: 3,
          imgUrl:
            "https://imgs.qunarzz.com/sight/p0/201301/11/c3999da09f538f9f93835fbb.jpg_200x200_c03d784a.jpg",
          title: "印象刘三姐",
          msg: "17933条评论",
          pre: "218",
          map: "阳朔县",
        },
      ],
    };
  },
};
</script> 
<style scoped>
.like {
  margin-top: 0.2rem;
  background: #fff;
  font-size: 0.28rem;
  padding: 0.2rem;
}
.like .like-title {
  font-size: 0.32rem;
  padding: 0.21rem 0;
}
.like .like-title img {
  width: 0.3rem;
  height: 0.3rem;
}
.like-list {
}
.like-list .like-item {
  padding: 0.2rem 0;
  position: relative;
  overflow: hidden;
}
.like-item-img {
  float: left;
}

.like-list .like-item img {
  width: 2rem;
}

.like-item-about {
  overflow: hidden;
  padding-left: 0.22rem;
}

.like-item-about .like-item-title {
  margin-top: 0.22rem;
  height: 0.4rem;
  color: #212121;
  font-size: 0.34rem;
  line-height: 0.4rem;
}
.mpg-iconfont {
  font-family: "mpiconfont";
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.mpf-starlevel-gain,
.mpf-starlevel-total {
  overflow: hidden;
  position: absolute;
  top: 0.04rem;
  left: 0;
  height: 0.28rem;
}
.mpf-starlevel-total {
  z-index: 1;
  color: #e0e0e0;
}
.like-item-about .like-item-count {
  margin-top: 0.3rem;
  font-size: 0.24rem;
  color: #616161;
}

.like-item-about .like-item-price {
  margin-top: 0.3rem;
  color: #616161;
  position: relative;
}
.like-item-about .like-item-price .mark {
  color: #ff8300;
}
.like-item-about .like-item-price em {
  font-size: 0.4rem;
}
.like-item-about .like-item-price .like-item-location {
  position: absolute;
  right: 0;
  top: 0.1rem;
}
</style>;
