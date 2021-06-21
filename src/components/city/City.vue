<template>
  <div class="city">
    <cityHeader></cityHeader>
    <hotCity></hotCity>
  </div>
</template>
<script>
import cityHeader from "@/components/city/pages/header";
import hotCity from "@/components/city/pages/hotCity";
export default {
  components: { cityHeader, hotCity },
};
</script>
<style scoped>
.city {
  background-color: rgb(240, 240, 240);
}
</style>
