<template>
    <div class="search">
      <input type="text" class="header-input" placeholder="请输入城市名和拼音" v-model="keyword">
      <div class="search-content" v-show="keyword" ref="wrapper">
        <ul>
          <li class="search-item border-bottom" v-for="city in filterCities" :key="city.id" @click="changeCity(city.name)">{{city.name}}</li>
          <li v-show="isShow" class="search-item border-bottom">未匹配到数据</li>
        </ul>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
        name: "Search",
      props:['cities'],
        data() {
            return {
              keyword:'',
              isShow:false
            }
        },
      mounted(){
          this.scroll = new BScroll(this.$refs.wrapper,{
            click:true
          })
      },
      methods:{
        changeCity(value){
          this.$store.commit('changeCity',value)
          this.$router.push('/')
        }
      },
      computed:{
          filterCities(){
            const result = [];
            for(let key in this.cities){
              this.cities[key].forEach((city,index)=>{
                if(city.name.includes(this.keyword)||city.spell.includes(this.keyword)){
                  result.push(city)
                }
              })
            }
            if(!result.length)
              this.isShow = true;
            else
              this.isShow = false;
            return result;
          }
      }
    }
</script>

<style lang="stylus" scoped>
  .search
    position:relative
    height:.72rem
    padding:0.1rem
    background-color: #00bcd4
    .header-input
      width: 100%
      height:100%
      border-radius:.1rem
      text-align:center
    .search-content
      position:fixed
      overflow:hidden
      top:1.78rem
      left:0
      right:0
      bottom:0
      background-color:#ccc
      z-index:10
      ul
        background-color:#fff
        li
          border-bottom:1px solid #ccc
          line-height:.6rem
          text-indent:.2rem
</style>
