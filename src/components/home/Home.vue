<template>
  <div class="home">
    <Homeheader :currentCity="currentCity"></Homeheader>
    <HomeSwiper></HomeSwiper>
    <HomeIcons :iconList="iconList"></HomeIcons>
    <HomeLocation></HomeLocation>
    <!-- <HomeActivity></HomeActivity> -->
    <HomeMenu :hotList="hotList"></HomeMenu>
    <HomeLike :likeList="likeList"></HomeLike>
    <HomeVacation :vacationList="vacationList"></HomeVacation>
  </div>
</template>
<script>
import Homeheader from "./pages/header";
import HomeSwiper from "./pages/swiper";
import HomeIcons from "./pages/icons";
import HomeLocation from "./pages/location";
import HomeActivity from "./pages/activity";
import HomeMenu from "./pages/menu";
import HomeLike from "./pages/maylike";
import HomeVacation from "./pages/vacation";
import { mapState } from "vuex";
export default {
  components: {
    Homeheader,
    HomeSwiper,
    HomeIcons,
    HomeLocation,
    HomeActivity,
    HomeMenu,
    HomeLike,
    HomeVacation,
  },
  data() {
    return {
      iconList: [],
      hotList: [],
      likeList: [],
      vacationList: [],
      currentPageCity: "",
    };
  },
  computed: {
    ...mapState(["currentCity"]),
  },
  methods: {
    getHttp() {
      this.$http.get("/api/dataHome.json").then((res) => {
        console.log(res.data);
        const data = res.data.data[0];
        const menuIcon = res.data.menu_icon[0];
        this.iconList = menuIcon.iconList;
        this.hotList = data.hotList;
        this.likeList = data.likeList;
        this.vacationList = data.vacationList;
      });
    },
  },
  mounted() {
    this.currentPageCity = this.currentCity;
    this.getHttp();
  },
  activated() {
    console.log(this.currentCity, this.currentPageCity);
    if (this.currentPageCity != this.currentCity) {
      this.currentPageCity = this.currentCity;
      this.getHttp();
    }
  },
};
</script>
<style scoped>
.home {
  background: rgb(240, 240, 240);
}
</style>
