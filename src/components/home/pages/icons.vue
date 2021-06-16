<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(items, key) in page" :key="key">
        <div class="items" v-for="item in items" :key="item.id">
          <img :src="item.imgUrl" />
          <p>{{ item.title }}</p>
        </div>
      </swiper-slide>
      <!-- <div class="swiper-scrollbar"></div> -->
    </swiper>
    <div class="sc-iwsKbI gZEhzb">
      <div class="sc-gZMcBi kwnYjG">
        <div class="sc-gqjmRU llyiGn"></div>
      </div>
    </div>
  </div>
</template>
<script>
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
        // scrollbar: ".swiper-scrollbar",
      },
      iconList: [
        {
          id: 1,
          imgUrl:
            "https://gw.alicdn.com/tfs/TB19uWKXkCy2eVjSZPfXXbdgpXa-183-144.png?getAvatar=1",
          title: "景点门票",
        },
        {
          id: 2,
          imgUrl:
            "https://gw.alicdn.com/tfs/TB19uWKXkCy2eVjSZPfXXbdgpXa-183-144.png?getAvatar=1",
          title: "必去榜单",
        },
        {
          id: 3,
          imgUrl:
            "https://gw.alicdn.com/tfs/TB19uWKXkCy2eVjSZPfXXbdgpXa-183-144.png?getAvatar=1",
          title: "新鲜地点",
        },
        {
          id: 4,
          imgUrl:
            "https://gw.alicdn.com/tfs/TB19uWKXkCy2eVjSZPfXXbdgpXa-183-144.png?getAvatar=1",
          title: "每日必看",
        },
        {
          id: 5,
          imgUrl:
            "https://gw.alicdn.com/tfs/TB19uWKXkCy2eVjSZPfXXbdgpXa-183-144.png?getAvatar=1",
          title: "团购出游",
        },
        {
          id: 6,
          imgUrl:
            "https://gw.alicdn.com/tfs/TB19uWKXkCy2eVjSZPfXXbdgpXa-183-144.png?getAvatar=1",
          title: "bala",
        },
        {
          id: 7,
          imgUrl:
            "https://gw.alicdn.com/tfs/TB19uWKXkCy2eVjSZPfXXbdgpXa-183-144.png?getAvatar=1",
          title: "bala",
        },
        {
          id: 8,
          imgUrl:
            "https://gw.alicdn.com/tfs/TB19uWKXkCy2eVjSZPfXXbdgpXa-183-144.png?getAvatar=1",
          title: "bala",
        },
        {
          id: 9,
          imgUrl:
            "https://gw.alicdn.com/tfs/TB19uWKXkCy2eVjSZPfXXbdgpXa-183-144.png?getAvatar=1",
          title: "bala",
        },
        {
          id: 10,
          imgUrl:
            "https://gw.alicdn.com/tfs/TB19uWKXkCy2eVjSZPfXXbdgpXa-183-144.png?getAvatar=1",
          title: "bala",
        },
      ],
    };
  },
  computed: {
    page() {
      let pages = [];
      this.iconList.forEach((item, index) => {
        let idx = Math.floor(index / 8);
        if (!pages[idx]) pages[idx] = [];
        pages[idx].push(item);
      });
      return pages;
    },
  },
};
</script>
<style scoped>
.icons {
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr; */
  background: #fff;
}
.icons .items {
  width: 25%;
  float: left;
  margin-top: 13px;
}
.icons .items img {
  display: block;
  width: 1.2rem;
  height: 0.96rem;
  margin: 0 auto;
}
.icons .items p {
  font-size: 0.25rem;
  font-family: "Microsoft YaHei";
  text-align: center;
  margin-top: 4px;
}
.gZEhzb {
  display: flex;
  width: 100%;
  height: 20px;
  background-color: rgb(255, 255, 255);
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 5px;
}
.kwnYjG {
  width: 50px;
  height: 3px;
  background-color: rgb(212, 216, 222);
  border-radius: 4px;
}
.llyiGn {
  width: 20px;
  height: 3px;
  background-color: #00ced1;
  border-radius: 4px;
  will-change: transform;
}
</style>
