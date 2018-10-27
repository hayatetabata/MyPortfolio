<template lang="pug">
  section(class="container")
    div
      h1(class="title") My Portfolio Site
      app-logo
      h2(class="subtitle") Tap To Start
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style lang="stylus">
.container
  min-height 100vh
  display flex
  justify-content center
  align-items center
  text-align center


.title
  font-family rpg-font-bold-12
  display block
  font-weight 300
  font-size 100px
  color white
  letter-spacing 1px

.subtitle
  font-family rpg-font-bold-12
  font-weight 300
  font-size 42px
  color white
  word-spacing 5px
  padding-bottom 15px

.links
  padding-top 15px

</style>

