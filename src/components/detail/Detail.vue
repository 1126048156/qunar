<template>
  <div class="detail">
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
  </div>
</template>

<script>
  import DetailBanner from './base/Banner'
  import {getDetail} from '@/api'
  import DetailHeader from './base/Header'
  export default {
    name: "Deatil",
    data() {
      return {
        sightName:'',
        bannerImg:'',
        gallaryImgs:''
      }
    },
    components:{
      DetailBanner,
      DetailHeader
    },
    created(){
      this.getData();
    },
    methods:{
      async getData(){
        let {sightName,bannerImg,gallaryImgs} = await getDetail(this.$route.params.id);
        this.sightName = sightName;
        this.bannerImg =bannerImg;
        this.gallaryImgs = gallaryImgs;
      }
    }
  }
</script>

<style lang="stylus" scoped>
.detail
  height:200rem
</style>
