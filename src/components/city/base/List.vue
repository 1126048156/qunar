<template>
    <div class="list" ref="wrapper">
     <div>
       <div class="list-current">
         <h3 class="list-title border-topbottom">当前城市</h3>
         <div class="city">
           <span>{{$store.state.city}}</span>
         </div>
       </div>
       <div class="list-hot">
         <h3 class="list-title border-topbottom">热门城市</h3>
         <div class="city">
           <span v-for="(item,index) in hotCities" :key="index" @click="changeCity(item.name)">{{item.name}}</span>
         </div>
         <div class="list-item" v-for="(city,key) in cities">
           <h3 class="list-title border-topbottom" :ref="key">{{key}}</h3>
           <ul>
             <li class="city-item border-bottom" v-for="(item,key) in city" @click="changeCity(item.name)" :key="item.id">{{item.name}}</li>
           </ul>
         </div>
       </div>
     </div>
    </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  import BScroll from 'better-scroll'
    export default {
      name: "List",
      props:['hotCities','cities'],
      data() {
            return {}
      },
      methods:{
        changeCity(value){
          this.$store.commit('changeCity',value)
          this.$router.push('/')
        }
      },
      mounted() {
        this.scroll = new BScroll(this.$refs.wrapper,{
          click:true
        })
      },
      watch:{
        letter(value){
          //调到指定dom节点
          this.scroll.scrollToElement(this.$refs[value][0])
        }
      },
      computed:{
          ...mapState(['letter'])
      }
    }
</script>

<style lang="stylus" scoped>
.list
  position:fixed
  overflow:hidden
  top:1.78rem
  left:0
  right:0
  bottom:0
.list-title
  line-height:0.54rem
  background-color: #eee
  padding-left:0.2rem
  color: #666666
.city
  padding-left:.15rem
  span
    display:inline-block
    width: 28%
    padding:.15rem .2rem
    margin:.1rem
    border:0.02rem solid #ccc
    text-align:center
    box-sizing:border-box
    border-radius:0.5rem
.city-item
  line-height:.8rem
  padding-left:.2rem
</style>
