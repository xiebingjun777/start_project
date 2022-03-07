<template>
  <div class="banner">
    <div class="banner-img" @click="changeBigImg()">
        <img src="http://img1.qunarzz.com/sight/p0/2006/6d/6d32ad054c71da4a3.img.jpg_600x330_fe731753.jpg" alt="">
        <div class="banner-img-count">
            <img class="img-count-ico" src="..\..\..\assets\IM.png"></img>
            <em class="img-count">12</em>
        </div>
        <div class="banner-title">桂林千古情</div>
    </div>
    
    <div class="banner-img-show" v-show="isShowImg" @click="changeBigImg()">
      <swiper :options="swiperOptionShow" ref="mySwiper2">
        <swiper-slide
          ><img
            src="http://img1.qunarzz.com/sight/p0/2006/6d/6d32ad054c71da4a3.img.jpg_600x330_fe731753.jpg"
            alt=""
        /></swiper-slide>
        <swiper-slide
          ><img
            src="http://img1.qunarzz.com/sight/p0/2006/5c/5c65a115dfdd2045a3.img.jpg_350x240_8436f8a0.jpg"
            alt=""
        /></swiper-slide>
        <swiper-slide
          ><img
            src="http://img1.qunarzz.com/sight/p0/2006/15/150f85200db53275a3.img.jpg_350x240_dd1bef26.jpg"
            alt=""
        /></swiper-slide>
      </swiper>
        <div class="swiper-pagination-show" slot="pagination"></div>

    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "DetailBanner",
  components: { swiper, swiperSlide },
  data() {
    return {
      swiperOption: {
        loop: false,
      },
      swiperOptionShow: {
        pagination: {
          el: ".swiper-pagination-show",
          type: "fraction",
        },
      },
      isShowImg: false,
      picList: [
        "http://img1.qunarzz.com/sight/p0/2006/6d/6d32ad054c71da4a3.img.jpg_600x330_fe731753.jpg",
        "http://img1.qunarzz.com/sight/p0/2006/5c/5c65a115dfdd2045a3.img.jpg_350x240_8436f8a0.jpg",
        "http://img1.qunarzz.com/sight/p0/2006/15/150f85200db53275a3.img.jpg_350x240_dd1bef26.jpg",
      ],
    };
  },
  methods: {
    toHome() {
      this.$router.push("/");
    },
    changeBigImg() {
      return (this.isShowImg = !this.isShowImg);
    },
  },
};
</script>
<style scoped lang="stylus">
@import '~css/var.styl';

.banner {
  position: relative;
}

.banner-img {
  width: 100%;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
}

.banner-img img {
  width: 100%;
}

.banner-img-count {
  position: absolute;
  font-size: 0.26rem;
  bottom: 0.96rem;
  color: white;
  left: 0.3rem;
  width: 1.2rem;
  height: 0.45rem;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner-img-count .img-count-ico {
  width: 0.3rem;
}

.img-count {
  line-height: 13px;
  padding-left: 5px;
}

.banner-title {
  position: absolute;
  font-size: 0.36rem;
  color: white;
  bottom: 0.4rem;
  left: 0.3rem;
}

.banner-img-show {
  z-index: 200;
  position: fixed;
  bottom: 0;
  top: 0;
  background-color: #000;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner-img-show img {
  width: 100%;
}

.swiper-pagination-show {
  position: absolute;
  text-align: center;
  -webkit-transition: 300ms opacity;
  -o-transition: 300ms opacity;
  transition: 300ms opacity;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  z-index: 10;
}

.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
  font-size: 0.3rem;
  bottom: 0.6rem;
  color: #fff;
}
</style>