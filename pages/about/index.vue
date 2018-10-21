<template lang="pug">
  div(id="container")
    div(id="header")
      a(href="/") トップへ
      h1 プロフィール
    div(class="profile")
      img(src="https://i2.gamebiz.jp/images/original/1053546925ab768029bbb90011.jpg")
      div(class="detail")
        div(class="nav")
          div(class="nav-button")
            a(href="#") とくちょう
          div(class="nav-button")
            a(href="#") げんご
          div(class="nav-button")
            a(href="#") つーる
        div(class="section feature")
          div(class="row") しごと：がくせい・えんじにあ
          div(class="row") せいべつ：おとこ
          div(class="row") ばしょ：とうきょう

</template>

<style lang="stylus">
.profile
  display flex

img
  width 50%
  height 50%

.detail
  margin 0 auto

.nav
  display flex

.nav-button
  margin 0 5px
</style>
