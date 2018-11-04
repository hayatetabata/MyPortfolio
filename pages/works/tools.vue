<template lang="pug">
  v-content
    v-container(grid-list-md fill-height)
      v-layout(row wrap)
        v-flex(xs4)
          v-card
            v-layout(justify-center)
              v-flex(xs6)
                v-img(
                  src="https://quartet-communications.com/wp-content/uploads/2018/08/1200px-Google_Ads_logo.svg_.png"
                  )
            v-card-title(class="headline") GoogleAds
            v-card-text
              | I have advertised with Google Ads for about one year.

        v-flex(xs4)
          v-card
            v-layout(justify-center)
              v-flex(xs6)
                v-img(
                  src="https://developers.google.com/analytics/images/terms/logo_lockup_analytics_icon_vertical_black_2x.png?hl=ja"
                  )
            v-card-title(class="headline") GoogleAnalytics
            v-card-text
              | I can analyze your website by a lot of access data.
              | I optimize your website UI/UX with hypothesis based on data.
              | And I can implement enhanced ecommerce too.
              | So if you wish to optimize more, or to measure a various of ecommerce data that 
              | conventional ecommerce tag cannot measure,
              | I help you to implement enhanced ecommerce tag.

        v-flex(xs4)
          v-card
            v-layout(justify-center)
              v-flex(xs6)
                v-img(
                  src="https://i0.wp.com/fivestar-corporation.co.jp/wp-content/uploads/2018/08/gtm2.png?fit=856%2C500&ssl=1"
                  )
            v-card-title(class="headline") GoogleTagManager
            v-card-text
              | I can arrange your messy tags with GoogleTagManager.

</template>
