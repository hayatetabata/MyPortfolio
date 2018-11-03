<template lang="pug">
  v-app
    v-navigation-drawer(fixed app clipped)
      v-divider
      v-list(dense class="pt-0")
        v-list-tile
          v-list-tile-title Profile
        v-divider
        v-list-tile(to="/")
          v-list-tile-action
            v-icon home
          v-list-tile-content
            v-list-tile-title Home

        v-list-tile
          v-list-tile-title Works
        v-divider
        v-list-tile(to="languages")
          v-list-tile-action
            v-icon settings
          v-list-tile-content
            v-list-tile-title Languages
        v-list-tile(to="tools")
          v-list-tile-action
            v-icon build
          v-list-tile-content
            v-list-tile-title Tools

        v-list-tile
          v-list-tile-title Others
        v-divider
        v-list-tile(to="contact")
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
    nuxt
</template>
