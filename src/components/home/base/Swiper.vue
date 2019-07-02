<template>
    <div class="swiper">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>
          <img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/b421363bbbb9184deacb4247eeea7485.jpg_750x200_12b42643.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/818f6cc784ae6669b74bbbb255414a53.jpg_750x200_66ca5873.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/1f69b3ab28f9962158c798a8a3f5b4b3.jpg_750x200_fb4bf7c4.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/a5d26ebec399b3aef013f45771ae96f0.jpg_750x200_de947eef.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/522b43cda83d29460da14ec8975b4060.jpg_750x200_2ff9e60a.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/bc62e131afb380e98e4beac33e751c6c.jpg_750x200_2e248116.jpg" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
  export default {
    name: 'carrousel',
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
        computed: {
          swiper() {
            return this.$refs.mySwiper.swiper
          }
        },
        mounted() {
          // current swiper instance
          // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
          console.log('this is current swiper instance object', this.swiper)
          this.swiper.slideTo(3, 1000, true)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  //穿透，从当前组件，穿透到vueawesomeswipe组件
  .swiper >>> .swiper-pagination-bullet-active
    background-color:#fff
  .swiper
    height:2.18rem
    img
      height:2.18rem

</style>
