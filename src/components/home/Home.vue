<template>
    <div class="home">
      <home-header></home-header>
    </div>
</template>

//base装着基础组件，Home为页面级组件
<script>
  import HomeHeader from './base/Header'
    export default {
        name: "Home",
        data() {
            return {}
        },
      components:{
          HomeHeader
      }
    }
</script>

<style scoped>

</style>
