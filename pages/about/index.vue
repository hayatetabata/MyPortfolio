<template lang="pug">
  div(id="container")
    div(id="header")
      div(class="header-left")
        div(class="nav-button")
          a(href="/") とっぷ へ
      div(class="header-right")
        h1 ぷろふぃーる
    div(class="profile")
      div(class="thumbnail")
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
.nav-button
  padding 15px
  font-family rpg-font-regular-12
  border solid 2px
  border-radius 10px
  display inline-block
  a
    color white
    text-decoration none

#header
  position relative
  margin 10px
  .header-left
    display inline-block

  .header-right
    position absolute
    right 10px
    top -10px
    display inline-block
    h1
      font-family rpg-font-bold-12

.profile
  display flex
  .thumbnail
    width 50%
    height 50%
    margin 0 10px
    border solid 2px
    border-radius 10px
    text-align center
    img
      width 70%
  .detail
    font-size 30px
    width 50%
    margin 0 10px
    border solid 2px
    border-radius 10px
    .nav
      padding 10px
      display flex
      .nav-button
        margin 0 10px

.section
  padding 10px
  font-family rpg-font-regular-12
  line-height 45px
</style>
