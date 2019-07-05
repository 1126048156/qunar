<template>
    <div class="swiper">
      <swiper :options="swiperOption"  v-if="isShow">
        <!-- slides -->
        <swiper-slide v-for="(img,index) in swiperList" :key="index">
          <img :src="img.imgUrl" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
  export default {
    name: 'carrousel',
    props:['swiperList'],
    data() {
      return {
        swiperOption: {
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
          loop:true,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
          }
        },
      }
    },
    computed:{
      isShow(){
        return this.swiperList.length>0;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  //穿透，从当前组件，穿透到vueawesomeswipe组件
  .swiper >>> .swiper-pagination-bullet-active
    background-color:#fff
  .swiper
    display:flex
    img
      width:100%

</style>
