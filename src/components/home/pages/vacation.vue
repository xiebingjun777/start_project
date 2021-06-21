<template>
  <div class="vacation">
    <div class="vacation-title">周末去哪儿</div>
    <ul v-for="item in vacationList">
      <li class="vacation-item">
        <div class="vacation-img">
          <img :src="item.imgUrl" alt="" />
        </div>
        <div class="vacation-msg">
          <p>{{ item.headline1 }}</p>
          <p>{{ item.headline2 }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["vacationList"],
  data() {
    return {};
  },
};
</script>
<style scoped lang='stylus'>
@import '~css/common.styl';

.vacation-title {
  font-size: 0.32rem;
  padding: 0.24rem;
}

.vacation-item {
  margin-bottom: 0.1rem;
  background: #fff;
  font-size: 0.28rem;
}

.vacation-img {
  width: 100%;
  height: 0;
  padding-bottom: 37.4375%;
}

.vacation-img img {
  width: 100%;
}

.vacation-msg {
  padding: 0.2rem 0 0.2rem 0.2rem;
}

.vacation-msg p {
  margin-top: 0.2rem;
}

.vacation-msg p + p {
  color: #616161;
  font-size: 0.24rem;
  textOverflow();
}
</style>
