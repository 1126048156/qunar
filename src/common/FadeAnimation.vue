<template>
    <div class="fade">
      <transition>
        <slot></slot>
      </transition>
    </div>
</template>

<script>
    export default {
        name: "FadeAnimation",
        data() {
            return {}
        }
    }
</script>

<style lang="stylus" scoped>
.v-enter,.v-leave-to
  opacity:0
.v-enter-active,.v-leave-active
  transition:opacity 1s
</style>
