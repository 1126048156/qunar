<template>
    <div class="banner">
      <img class="banner-img" alt="" :src="bannerImg" @click="close(false)">
      <div class="banner-info">
        <span class="banner-info">{{sightName}}</span>
        <p class="banner-number">
          <i class="iconfont icon-tupian"></i>
          <span>{{gallaryImgs.length}}</span>
        </p>
      </div>
      <fade-animation>
        <common-gallary :gallaryImgs="gallaryImgs" v-if="isShow"@close="close"></common-gallary>
      </fade-animation>
    </div>
</template>

<script>
  import CommonGallary from '@/common/Gallary'
  import FadeAnimation from '@/common/FadeAnimation'
    export default {
        name: "DeatilBanner",
        data() {
            return {
              isShow:false
            }
        },
      props:['bannerImg','sightName','gallaryImgs'],
      components:{
        FadeAnimation,
          CommonGallary,
      },
      methods:{
          close(value){
            if(value)
              this.isShow = false;
            else
              this.isShow = true;
          }
      }
    }
</script>

<style lang="stylus" scoped>
  .banner
    position:relative
    height:0
    padding-bottom:55%
    .banner-img
      width:100%
    .banner-info
      position:absolute
      left:0
      right:0
      bottom:0
      color:#fff
      background-image:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1))
      line-height:.6rem
      .banner-title
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        position:absolute
        right:0
        bottom:.1rem
        height: .36rem
        line-height: .36rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem

</style>
