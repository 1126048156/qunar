<template>
    <div class="gallary" @click="handlerGallaryClick">
      <div class="wrapper">
        <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide v-for="(img,index) in gallaryImgs" :key="index">
            <img :src="img" alt="" class="swiper-img">
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
    </div>
</template>

<script>
    export default {
        name: "CommonGallary",
      data() {
        return {
          swiperOption: {
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true,//修改swiper的父元素时，自动初始化swiper
            pagination: {
              el: '.swiper-pagination',
              type:'fraction'//显示下面的第几张图片
            }
          },
        }
      },
      props:['gallaryImgs'],
      methods:{
          handlerGallaryClick(){
            this.$emit('close',true)
          }
      }
    }
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-container
  overflow:inherit
.gallary
  position:fixed
  z-index:10
  right:0
  top:0
  bottom:0
  left:0
  background-color: #000
  .wrapper
    position:absolute
    top:0
    bottom:0
    margin :auto
    height:0
    width: 100%
    padding-bottom: 62.5%
    background-color: #fff
  .swiper-img
    width: 100%
  .swiper-pagination
    bottom: -1rem
    color:#fff
</style>
