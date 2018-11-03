<template lang="pug">
  v-app
    v-navigation-drawer(fixed app clipped v-model="drawer")
      v-list
        v-list-tile(to="/")
          v-list-tile-action
            v-icon home
          v-list-tile-content
            v-list-tile-title Home
      v-list
        v-list-tile
          v-list-tile-title Profile
        v-divider
        v-list-tile(to="/about")
          v-list-tile-action
            v-icon face
          v-list-tile-content
            v-list-tile-title About
        v-list-tile(to="/profile/history")
          v-list-tile-action
            v-icon history
          v-list-tile-content
            v-list-tile-title History

        v-list-tile
          v-list-tile-title Works
        v-divider
        v-list-tile(to="/works/languages")
          v-list-tile-action
            v-icon settings
          v-list-tile-content
            v-list-tile-title Languages
        v-list-tile(to="/works/tools")
          v-list-tile-action
            v-icon build
          v-list-tile-content
            v-list-tile-title Tools

        v-list-tile
          v-list-tile-title Portfolio
        v-divider
        v-list-tile(to="/portfolio/products")
          v-list-tile-action
            v-icon phonelink
          v-list-tile-content
            v-list-tile-title Products
        v-list-tile(to="/portfolio/blogs")
          v-list-tile-action
            v-icon edit
          v-list-tile-content
            v-list-tile-title Blogs

        v-list-tile
          v-list-tile-title Others
        v-divider
        v-list-tile(to="/contact")
          v-list-tile-action
            v-icon email
          v-list-tile-content
            v-list-tile-title Contact
    v-system-bar(fixed app color="secondary")
    v-toolbar(class="primary" fixed app clipped-left)
      v-toolbar-side-icon(dark @click.stop="drawer = !drawer")
      v-list-tile
        v-list-tile-title(class="font-weight-bold") MySite
    v-btn(fixed fab bottom right color="accent")
      v-icon add
    nuxt
</template>

<script>
export default {
  data () {
    return {
      drawer: null
    }
  }
}
</script>
