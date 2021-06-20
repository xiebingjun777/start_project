<template>
  <div class="home">
    <Homeheader></Homeheader>
    <HomeSwiper></HomeSwiper>
    <HomeIcons></HomeIcons>
    <HomeLocation></HomeLocation>
    <HomeActivity></HomeActivity>
    <HomeMenu></HomeMenu>
    <HomeLike></HomeLike>
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
export default {
  components: {
    Homeheader,
    HomeSwiper,
    HomeIcons,
    HomeLocation,
    HomeActivity,
    HomeMenu,
    HomeLike,
  },
};
</script>
<style scoped>
.home {
  background: rgb(240, 240, 240);
}
</style>
