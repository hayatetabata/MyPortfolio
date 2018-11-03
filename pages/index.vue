<template lang="pug">
  v-content
    v-container(grid-list-xl)
      v-layout
        v-flex(xs6)
          div(class="display-2") Profile
      v-divider
      v-layout
        v-flex(xs4)
          v-card(to="/profile/history" hover)
            v-img(
              class="white--text"
              src="http://westwoodcivicclub.com/wp-content/uploads/2015/11/history.jpg"
              :aspect-ratio="16/9"
            )
            v-card-title(class="headline font-weight-medium") History
            v-card-text(class="subheading font-weight-regular") About my history before now.

      v-layout
        v-flex(xs6)
          div(class="display-2") Works
      v-divider
      v-layout
        v-flex(xs4)
          v-card(to="/languages" hover)
            v-img(
              class="white--text"
              src="https://cdn-images-1.medium.com/max/1600/1*CzwDS_yByKtMNdScO3RaPA.jpeg"
              :aspect-ratio="16/9"
            )
            v-card-title(class="headline") Languages
            v-card-text About programming languages I usually use.

        v-flex(xs4)
          v-card(to="/tools" hover)
            v-img(
              class="white--text"
              src="http://cybergrota.com.pl/wp-content/uploads/2018/05/Tools-from-nathan-laytka.jpg"
              :aspect-ratio="16/9"
            )
            v-card-title(class="headline") Tools
            v-card-text About tools familier to me.

      v-layout
        v-flex(xs6)
          div(class="display-2") Portfolio
      v-divider
      v-layout
        v-flex(xs4)
          v-card
            v-img(
              class="white--text"
              src="http://atlastoolandmachine.com/wp-content/uploads/2018/03/hd-machine-wallpaper_101649396_287.jpg"
              :aspect-ratio="16/9"
            )
            v-card-title(class="headline") Products
            v-card-text Coming Soon...

        v-flex(xs4)
          v-card
            v-img(
              class="white--text"
              src="https://cdn-images-1.medium.com/max/1200/1*9B7S9mipwLURUX9wdZN7Pw.jpeg"
              :aspect-ratio="16/9"
            )
            v-card-title(class="headline") Blogs
            v-card-text Coming Soon...

      v-layout
        v-flex(xs6)
          div(class="display-2") Others
      v-divider
      v-layout
        v-flex(xs4)
          v-card
            v-img(
              class="white--text"
              src="https://1.bp.blogspot.com/-D5XFUHrcow8/V5jMdu7qGPI/AAAAAAAADCE/Wzwp7tdhwoI4lYpVn3AVKAhKf89RDqEIwCLcB/s1600/writing_letter.jpg"
              :aspect-ratio="16/9"
            )
            v-card-title(class="headline") Contact
            v-card-text Coming Soon...
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>
