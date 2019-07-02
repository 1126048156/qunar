<template>
    <div class="nav">
      <div class="item">
        <img src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">
        <span>景点门票</span>
      </div>
      <div class="item">
        <img src="http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png" alt="">
        <span>一日游</span>
      </div>
      <div class="item">
        <img src="http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png" alt="">
        <span>武汉必游</span>
      </div>
      <div class="item">
        <img src="http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png" alt="">
        <span>亲子游</span>
      </div>
      <div class="item">
        <img src="http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png" alt="">
        <span>木兰天池</span>
      </div>
      <div class="item">
        <img src="http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png" alt="">
        <span>动植物园</span>
      </div>
      <div class="item">
        <img src="http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png" alt="">
        <span>水上游乐</span>
      </div>
      <div class="item">
        <img src="http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png" alt="">
        <span>武汉欢乐谷</span>
      </div>
      <p>哈哈哈</p>
    </div>
</template>

<script>
    export default {
        name: "Nav",
        data() {
            return {}
        }
    }
</script>

<style lang="stylus" scoped>
.nav
  display:flex
  flex-wrap:wrap
  height:3.45rem
  padding-top:.25rem
  border-bottom:1px solid #eee
  .item
    display: flex
    flex-direction:column
    align-items:center
    width: 25%
    height: 46%
    text-align:center
    img
      width:1.1rem
    span
      font-size:.28rem
</style>
