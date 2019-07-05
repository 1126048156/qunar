<template>
    <div class="home">
      <home-header></home-header>
      <div ref="wrapper" class="content">
        <div>
          <home-swiper :swiperList="swiperList"></home-swiper>
          <home-nav :iconList="iconList"></home-nav>
          <home-favourite :recommendList="recommendList"></home-favourite>
          <home-weekend :weekendList="weekendList"></home-weekend>
        </div>
      </div>
    </div>
</template>

//base装着基础组件，Home为页面级组件
<script>
  import {getHome} from '@/api'
  import HomeHeader from './base/Header'
  import HomeSwiper from './base/Swiper'
  import HomeNav from './base/Nav'
  import HomeFavourite from './base/Favourite'
  import HomeWeekend from './base/Weekend'
  import BScroll from 'better-scroll'
    export default {
        name: "Home",
        data() {
            return {
              iconList:[],
              recommendList:[],
              swiperList:[],
              weekendList:[]
            }
        },
      mounted(){
          this.scroll = new BScroll(this.$refs.wrapper,{
            click:true
          })
      },
      components:{
        HomeHeader,
        HomeSwiper,
        HomeNav,
        HomeFavourite,
        HomeWeekend
      },
      created() {
        this.getData();
      },
      methods:{
          async getData(){
            let {iconList,recommendList,swiperList,weekendList} = await getHome()
            this.iconList = iconList;
            this.recommendList = recommendList;
            this.swiperList = swiperList;
            this.weekendList =weekendList;
          }
      }
    }
</script>

<style lang="stylus" scoped>
.content
  position:fixed
  overflow:hidden
  top:.88rem
  bottom:0
  right:0
  left:0
</style>
