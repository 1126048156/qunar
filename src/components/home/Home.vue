<template>
    <div class="home">
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-nav></home-nav>
    </div>
</template>

//base装着基础组件，Home为页面级组件
<script>
  import HomeHeader from './base/Header'
  import HomeSwiper from './base/Swiper'
  import HomeNav from './base/Nav'
    export default {
        name: "Home",
        data() {
            return {}
        },
      components:{
        HomeHeader,
        HomeSwiper,
        HomeNav
      }
    }
</script>

<style scoped>

</style>
