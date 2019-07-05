<template>
    <div class="favourite">
      <h3 class="title">
        <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="" width="15" height="15">
        猜你喜欢
      </h3>
      <ul>
        <router-link class="item" v-for="(recommend,index)  in recommendList" :key="index" tag="li" :to="{name:'detaillink',params:{id:recommend.id}}">
          <img class="item-img" :src="recommend.imgUrl" alt="">
          <div class="item-info">
            <h4>{{recommend.title}}</h4>
            <div class="item-fav-info clearfix">
              <div class="clearfix">
                <p class="item-fav-text">
                  <i v-for="item in 5" class="iconfont icon-star"></i>
                  <span class="item-fav-star" :style="recommend.score|star">
                  <i v-for="item in 5" class="iconfont icon-star"></i>
                </span>
                </p>
                <div class="item-text-right">
                  <span>{{recommend.comment}}条评论</span>
                </div>
              </div>
              <div class="price clearfix">
                <p class="item-price">
                  <span>￥<em>{{recommend.price}}</em></span>
                  起
                </p>
                <p class="item-address">东西湖区</p>
              </div>
              <div class="description">
                {{recommend.desc}}
              </div>
            </div>
          </div>
        </router-link>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "HomeFavourite",
        props:['recommendList'],
        data() {
            return {

            }
        },
      filters:{
          star(score){
            return {
              width:score/5*100+"%"
            }
          }
      }
    }
</script>

<style lang="stylus" scoped>
  .favourite
    padding-left:.26rem
    h3
      padding:.24rem 0
      font-size:.32rem
      line-height:.4rem
      img
        vertical-align:baseline
    .item
      display:flex
      border-bottom: 1px solid #eee;
      margin-top:.2rem
      .item-img
        float:left
        width:2rem
        height:2rem
      .item-info
        flex:1
        float:left
        padding-left:.21rem
        h4
          margin-top: .26rem;
          height: .44rem;
          color: #212121;
          font-size: .32rem;
          line-height: .44rem;
        .item-fav-info
          margin-top:.12rem
        .item-fav-text
          position:relative
          display:inline-block
          float:left
          color:#ccc
          margin-right:.5rem
          .item-fav-star
            overflow:hidden
            position:absolute
            left:0
            top:0
            color:#ffb436
          .icon-star
            font-size:.22rem
        .item-text-right
          float:left
          font-size: .24rem;
          color: #616161;
        .price
          width:100%
          margin-top:.35rem
          .item-price
            float:left
            font-size:.24rem
            span
              color:#ff8300
              em
                font-size:.4rem
          .item-address
            float:right
            color: #616161;
            font-size: .24rem;
            line-height: .5rem;
            margin-right:.26rem
        .description
          margin-top:.5rem
          margin-bottom:.2rem
          color: #f55;
          font-size: .24rem;
          line-height: .34rem;
.clearfix
  display:block
  content:''
  clear:both
</style>
