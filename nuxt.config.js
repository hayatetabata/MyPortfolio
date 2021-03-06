module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'my-portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Home page for my portfolio' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Roboto:100:300,400,500,700,900|Material+Icons'
      }
    ],
  },
  modules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/font-awesome',
    ['@nuxtjs/google-analytics', {
      id: 'UA-128624064-1'
    }]
  ],
  css: [
    '@/assets/css/vuetify-theme.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

