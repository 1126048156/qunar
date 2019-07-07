<template>
    <div class="header">
      <week-header></week-header>
      <week-list :weekInfo="weekInfo"></week-list>
    </div>
</template>

<script>
  import {getWeek} from '@/api'
  import WeekHeader from './base/Header'
  import WeekList from './base/List'
    export default {
        name: "Week",
        data() {
            return {
              weekInfo:''
            }
        },
      methods:{
        async getData(){
          let {weekInfo} = await getWeek(this.$route.params.id);
          this.weekInfo = weekInfo;
        }
      },
      activated() {
        //当组件被缓存时触发
        this.getData();
      },
      components:{
        WeekHeader,
        WeekList
      }
    }
</script>

<style scoped>

</style>
