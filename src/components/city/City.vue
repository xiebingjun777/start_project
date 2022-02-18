<template>
  <div class="city">
    <cityHeader></cityHeader>
    <!-- <hotCity></hotCity> -->
    <!-- <sortCity></sortCity> -->
    <cityList :cityLists="cityLists" :hotCity="hotCity"></cityList>
  </div>
</template>
<script>
import cityHeader from "@/components/city/pages/header";
// import hotCity from "@/components/city/pages/hotCity";
// import sortCity from "@/components/city/pages/sort";
import cityList from "@/components/city/pages/cityList";
// import hotCityVue from "./pages/hotCity.Vue";

export default {
  components: { cityList ,cityHeader},
  data() {
    return {
      cityLists: [],
      hotCity: [],
    };
  },
  mounted() {
    this.$http.get("/api/AllCity.json").then((res) => {
      // console.log(res.data);
      // console.log(res.data.cityList);
      this.cityLists = res.data.cityList;
      this.hotCity = res.data.hotCity;
    });
  },
};
</script>
<style scoped>
.city {
  background-color: rgb(240, 240, 240);
}
</style>
