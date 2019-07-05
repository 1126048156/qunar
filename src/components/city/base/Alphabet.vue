<template>
    <div class="alphabet">
      <ul>
        <li v-for="(city,key) in cities" @click="changeLetter(key)" :key="city.id">
         {{key}}
        </li>
      </ul>
    </div>
</template>

<script>
  import { mapState ,mapMutations} from 'vuex'
    export default {
        name: "CityAlphabet",
      props:['cities'],
        data() {
            return {

            }
        },
      methods:{
           ...mapMutations(['changeLetter'])
      }
    }
</script>

<style lang="stylus" scoped>
.alphabet
  position: fixed
  display:flex
  flex-direction:column
  justify-content:center
  right:0
  top:1.78rem
  bottom:0
  width:.4rem
li
  line-height:.5rem
  text-align:center
  color: red
  font-weight:600
</style>
