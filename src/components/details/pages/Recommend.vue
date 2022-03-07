<template>
  <div class="recommend">
    <h4 class="re-title">去哪儿推荐</h4>
    <div class="recommend-main">
      <div class="recommend-item">
        <div class="recommend-info-left">
          <h6>
            桂林千古情观众席演出成人票（含桂林千古情景区）【16:00 普通席】
          </h6>
          <div class="schedule">
            <img
              src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_…/admin/20202/8ead173908cde8deac61e75a91eba668.png"
              alt=""
            />
            18:30前可订今日,预订后1小时可用
          </div>
        </div>
        <div class="recommend-info-right">
          <div class="price"><em>¥</em> 280</div>
          <div class="schedule-btn">立即预定</div>
        </div>
      </div>
      <div class="recommend-item">
        <div class="recommend-info-left">
          <h6>
            【16:00场次】桂林千古情贵宾席成人票（广西区民）【16:00 贵宾席】
          </h6>
          <div class="schedule">
            <img
              src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_…/admin/20202/8ead173908cde8deac61e75a91eba668.png"
              alt=""
            />
            23:59前可订明日
          </div>
        </div>
        <div class="recommend-info-right">
          <div class="price"><em>¥</em> 150</div>
          <div class="schedule-btn">立即预定</div>
        </div>
      </div>
      <div class="recommend-item">
        <div class="recommend-info-left">
          <h6>
            【16:00场次】桂林千古情贵宾席亲子—1大1优待（含景区）【16:00 贵宾席】
          </h6>
          <div class="schedule">
            <img
              src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_…/admin/20202/8ead173908cde8deac61e75a91eba668.png"
              alt=""
            />
            可订明日,预订后50分钟可用
          </div>
        </div>
        <div class="recommend-info-right">
          <div class="price"><em>¥</em> 510</div>
          <div class="schedule-btn">立即预定</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scope>
.recommend {
  background-color: rgb(255, 255, 255);
  padding: 0 0.2rem;
  padding-top: 0.32rem;
}
.re-title {
  font-size: 0.5rem;
  font-weight: bold;
}

.recommend-main {
  background-color: #f8f8f8;
  border-radius: 0.16rem;
  margin: 0.32rem 0;
  padding: 0 0.32rem;
}

.recommend-main .recommend-item {
  padding: 0.32rem 0;
  display: flex;
}
.recommend-info-left {
  flex: 3;
}
.recommend-info-left h6 {
  font-size: 0.28rem;
  line-height: 0.4rem;
  text-overflow: ellipsis;
  color: #333;
}

.schedule {
  font-size: 0.24rem;
  color: #00afc7;
  padding-top: 0.1rem;
}

.recommend-info-right {
  flex: 1;
}
.recommend-info-right .price {
  font-size: 0.4rem;
  color: #ff8300;
  text-align: center;
}

.price em {
  font-size: 0.24rem;
}
.schedule-btn {
  font-size: 0.24rem;
  color: white;
  height: 0.52rem;
  width: 1.54rem;
  background-image: linear-gradient(145deg, #ffab1e 0, #ff8c12 100%);
  text-align: center;
  line-height: 0.52rem;
  border-radius: 0.3rem;
  margin: 0 auto;
  margin-top: 0.12rem;
}
</style>