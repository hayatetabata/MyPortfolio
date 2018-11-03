<template lang="pug">
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
