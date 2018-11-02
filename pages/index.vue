<template lang="pug">
  section(class="container")
    div
      h1(class="title") My Portfolio Site
      app-logo
      h2(class="subtitle") Tap To Start
      v-btn(color="primary") Normal
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

</style>

