<template lang="pug">
  v-content
    v-container(grid-list-xl)
      v-layout
        v-flex
          v-card
            v-img(
              class="white--text"
              height="200px"
              src="http://php.net//images/logos/new-php-logo.svg"
            )
              v-container
                v-layout(fill-height)
                  v-flex(xs12 align-end flexbox)
                    span(class="headline") AAA Top 10 Australian beaches

            v-card-title
              div
                span(class="gray--text") PHP
            v-card-actions
              v-btn(flat color="orange") Share

        v-flex
          v-card
            v-img(
              class="white--text"
              height="200px"
              src="https://exiz.org/system/uploads/2015/02/js.png"
            )
              v-container
                v-layout(fill-height)
                  v-flex(xs12 align-end flexbox)
                    span(class="headline") AAA Top 10 Australian beaches

            v-card-title
              div
                span(class="gray--text") Javascript
            v-card-actions
              v-btn(flat color="orange") Share
</template>
