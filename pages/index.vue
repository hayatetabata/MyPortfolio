<template lang="pug">
  v-app
    v-navigation-drawer(fixed app clipped)
      v-divider
      v-list(dense class="pt-0")
        v-list-tile
          v-list-tile-title Profile
        v-divider
        v-list-tile(@click="")
          v-list-tile-action
            v-icon home
          v-list-tile-content
            v-list-tile-title home
        v-list-tile(@click="")
          v-list-tile-action
            v-icon build
          v-list-tile-content
            v-list-tile-title tools
    v-toolbar(class="primary" fixed app clipped-left)
      v-list-tile
        v-list-title MyPortfolioSite
    v-content
      v-container(fill-height)
        v-layout(justify-center align-center)
          div
            h1(class="title") My Portfolio Site
            app-logo
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

