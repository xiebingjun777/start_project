<template>
  <div>
    <detailHeader></detailHeader>
    <detailBanner></detailBanner>
    <div class="mainDetail">
      <detailIntroduction></detailIntroduction>
      <detailRecommend></detailRecommend>
    </div>
  </div>
</template>

<script>
import detailHeader from "./pages/Header";
import detailBanner from "./pages/Banner";
import detailIntroduction from "./pages/Introduction.vue";
import detailRecommend from "./pages/Recommend.vue";
export default {
  components: {
    detailHeader,
    detailBanner,
    detailIntroduction,
    detailRecommend,
  },
};
</script>

<style scope>
.mainDetail {
  background-color: rgb(240, 240, 240);
}
</style>