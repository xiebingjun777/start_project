<template>
  <div class="activity">
    <div>
      <img
        src="https://p1-q.mafengwo.net/s14/M00/8D/DC/wKgE2l0XBH-Af4k7AAEk3kOekiY180.jpg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100"
        alt=""
      />
    </div>
    <div>
      <img
        src="https://b1-q.mafengwo.net/s16/M00/71/A6/CoUBUl6FZneAbq6lAAP0vtFl9xw82.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100"
        alt=""
      />
    </div>
  </div>
</template>
<script>
</script>
<style scoped>
.activity {
  margin-top: 0.3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #fff;
  /* height: 0; */
}
.activity div {
  height: 2rem;
  /* overflow: hidden; */
}
/* .activity div {
  width: 100%;
  line-height: 1rem;
  font-size: 0.3rem;
  text-align: center;
  border-top: 1px solid #ccc;
} */
.activity div:first-of-type {
  border-right: 1px solid #ccc;
}
.activity div img {
  width: 100%;
  height: 2rem;
}
</style>
