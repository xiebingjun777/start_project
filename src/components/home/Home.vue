<template>
  <div class="home">
    <Homeheader></Homeheader>
    <HomeSwiper></HomeSwiper>
    <HomeIcons></HomeIcons>
    <HomeLocation></HomeLocation>
    <HomeMenu></HomeMenu>
  </div>
</template>
<script>
import Homeheader from "./pages/header";
import HomeSwiper from "./pages/swiper";
import HomeIcons from "./pages/icons";
import HomeLocation from "./pages/location";
import HomeMenu from "./pages/menu";
export default {
  components: { Homeheader, HomeSwiper, HomeIcons, HomeLocation, HomeMenu },
};
</script>
<style scoped>
.home {
  background: #ccc;
}
</style>
