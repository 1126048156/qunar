<template>
    <div class="nav">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(imgList,index) in filterImgis" :key="index">
          <div class="item" v-for="(icon,index) in imgList" :key="index">
            <img :src="icon.imgUrl" alt="">
            <span>{{icon.desc}}</span>
          </div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeNav",
        props:['iconList'],
        data() {
            return {
              swiperOption: {
                pagination: {
                  el: '.swiper-pagination',
                }
              },
            }
        },
      computed:{
          filterImgis(){
            let imgs = []
            this.iconList.forEach((item,index)=>{
              let page = Math.floor(index/8);
              if(!imgs[page]){
                //无值
                imgs[page] = []
              }
              imgs[page].push(item)
            })
            return imgs;
          }
      }
    }
</script>

<style lang="stylus" scoped>
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets
  bottom:.04rem
.nav >>> .swiper-pagination-bullet
  width: .12rem
  height:.12rem
  background-color:rgba(144,144,144,0.8)
.nav >>> .swiper-pagination-bullet-active
  background-color:rgba(0,175,190,.8)
.nav
  height:3.45rem
  padding-top:.2rem
  border-bottom:1px solid #eee
  .swiper-container
    height:100%
    width:100%
    .swiper-slide
      display:flex
      flex-wrap:wrap
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
