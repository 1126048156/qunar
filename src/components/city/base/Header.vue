<template>
    <div class="header">
      <router-link tag="i" to="/" class="iconfont icon-fanhui header-back"></router-link>
      <h2>城市选择</h2>
    </div>
</template>

<script>
    export default {
        name: "CityHeader",
        data() {
            return {}
        }
    }
</script>

<style lang="stylus" scoped>
.header
  position:relative
  background-color: #00bcd4
  line-height:.86rem
  color: #ffffff
  text-align:center
  font-size: .32rem;
  .header-back
    position:absolute
    left:0
    top:0
    width:.8rem
    height:.8rem
    font-size: .32rem;
    font-weight:900
</style>
