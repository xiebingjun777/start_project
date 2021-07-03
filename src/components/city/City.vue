<template>
  <div class="city">
    <cityHeader></cityHeader>
    <hotCity></hotCity>
    <sortCity></sortCity>
    <cityList></cityList>
  </div>
</template>
<script>
import cityHeader from "@/components/city/pages/header";
import hotCity from "@/components/city/pages/hotCity";
import sortCity from "@/components/city/pages/sort";
import cityList from "@/components/city/pages/cityList";
export default {
  components: { cityHeader, hotCity, sortCity, cityList },
};
</script>
<style scoped>
.city {
  background-color: rgb(240, 240, 240);
}
</style>
