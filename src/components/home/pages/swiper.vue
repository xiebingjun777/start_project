<template>
  <div class="recommendPage">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide
        ><img src="../../../assets/swiper/swiper01.jpg" alt=""
      /></swiper-slide>
      <swiper-slide
        ><img src="../../../assets/swiper/swiper02.jpg" alt=""
      /></swiper-slide>
      <swiper-slide
        ><img src="../../../assets/swiper/swiper03.jpg" alt=""
      /></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
// 引入插件
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  },
};
</script>
<style scoped lang="stylus">
.recommendPage {
  background: #CCC;
  width: 100%;
  height: 0;
  overflow: hidden;
}

.recommendPage img {
  width: 100%;
  height: 100%;
}
</style>