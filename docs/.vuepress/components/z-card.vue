<template>
  <div class="z-card" :style="width ? {width: width + 'px'}: {}">
    <div class="z-card-img" :style="imgHeight ? {height: imgHeight + 'px'} : {}">
      <img :src="imgStr" alt="img">
    </div>
    <div v-if="summary" class="z-card-summary">
      {{summary}}
    </div>
    <div v-else class="z-card-summary">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>
<script>
export default {
  name: 'z-card',
  props: {
    width: { // 卡片宽度
      type: Number,
      default: 0
    },
    imgStr: { // 卡片图片资源地址
      type: String,
      default: null
    },
    imgHeight: { // 卡片图片高度
      type: Number,
      default: null
    },
    summary: { // 卡片概要
      type: String,
      default: null
    }
  }
}
</script>
<style lang="scss">
@import './card.scss';

.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}
.footer-spring {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
  display: flex;
  justify-content: space-between;
}
.lever {
  color: #9199A1;
  margin-bottom: 8px;
}
.price {
  color: #F01414
}
</style>