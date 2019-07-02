<template>
    <div class="header">
      <i class="iconfont icon-fanhui header-back"></i>
      <div class="header-input">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="输入城市/景点/游玩主题">
      </div>
      <div class="header-right">
        <span>武汉</span><i class="iconfont icon-jiantou"></i>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {}
        }
    }
</script>
<!--一个rem为50px，在reset中设置了-->
<!--
css预处理器 less sass stylus,少写写代码
需要安装stylus stylus-loader
-->
<style lang="stylus" scoped>
.header
  display flex
  height:.88rem
  background-color #00bcd4
  line-height:.88rem
  color:#fff
  align-items:center
  .header-back
    width:.88rem
    text-align:center
  .header-input
    flex:1
    background-color:#fff
    line-height:.6rem
    height:.6rem
    text-indent:.1rem
    border-radius:.06rem
    .icon-sousuo
      color: #ccc
      vertical-align:middle
    input
      width:80%
      vertical-align:middle
      font-size:.28rem
    ::-webkit-input-placeholder
      color: #e4e7ea
  .header-right
    padding:0 .2rem
    .icon-jiantou
      font-size:.24rem
      vertical-align:6%
</style>
