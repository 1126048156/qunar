<template>
    <div class="weekend">
      <h3 class="title">周末去哪儿</h3>
      <ul>
        <router-link tag="li" :to="{name:'weeklink',params:{id:item.id}}" class="item border-bottom" v-for="(item,index) in weekendList" :key="index">
          <img :src="item.imgUrl" alt="" class="item-img">
          <div class="item-info">
            <h4>{{item.title}}</h4>
            <p>{{item.desc}}</p>
          </div>
        </router-link>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "HomeWeekend",
      props:['weekendList'],
        data() {
            return {}
        }
    }
</script>

<style lang="stylus" scoped>
.title
  height: .8rem;
  padding-left: .26rem;
  line-height: .8rem;
  color: #212121;
.item-img
  width:100%
.item-info
  padding:.26rem;
  h4
    color: #212121;
    font-size: .28rem;
    line-height: .48rem;
  p
    overflow:hidden
    color:#616161;
    line-height: .42rem;
    font-size:.24rem
    white-space:nowrap
    text-overflow:ellipsis
</style>
