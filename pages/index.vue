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
            v-list-tile-title Home

        v-list-tile
          v-list-tile-title Works
        v-divider
        v-list-tile(@click="")
          v-list-tile-action
            v-icon settings
          v-list-tile-content
            v-list-tile-title Languages
        v-list-tile(@click="")
          v-list-tile-action
            v-icon build
          v-list-tile-content
            v-list-tile-title Tools

        v-list-tile
          v-list-tile-title Others
        v-divider
        v-list-tile(@click="")
          v-list-tile-action
            v-icon email
          v-list-tile-content
            v-list-tile-title Contact
    v-system-bar(fixed app color="secondary")
    v-toolbar(class="primary" fixed app clipped-left)
      v-toolbar-side-icon(dark)
      v-list-tile
        v-list-tile-title MyPortfolioSite
    v-content
      v-btn(fixed fab bottom right color="accent")
        v-icon add
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

