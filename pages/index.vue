<template>
  <div class="indexFile__parent--container">
    <div class="indexFile__container--header">
      <Header class="pa-0" />
      <v-container fill-height fill-width>
        <div class="d-flex align-center mx-auto">
          <InnerHeader />
        </div>
      </v-container>
    </div>
    <Maintainability />
    <Modern />
    <div id="Works">
      <Team />
    </div>
    <Footer />
  </div>
</template>

<script>
import { Header, InnerHeader } from '~/components/header'
import { Maintainability, Modern } from '~/components/offers'
import { Team } from '~/components/team'
import { Footer } from '~/components'

export default {
  components: {
    Header,
    InnerHeader,
    Maintainability,
    Modern,
    Team,
    Footer
  }
}
</script>

<style>
@media only screen and (max-width: 428px) {
  .indexFile__container--header {
    height: unset !important;
  }
}
@media only screen and (max-width: 375px) {
  .indexFile__container--header {
    margin-top: 90px;
    height: unset !important;
  }
}
</style>

<style scoped>
.indexFile__container--header {
  height: 100vh;
}
.indexFile__parent--container {
  background-image: url('/landing/backdrop.svg');
  background-position: center center;
  background-repeat: repeat-y;
  background-size: inherit;
  background-color: #fff;
}
</style>
