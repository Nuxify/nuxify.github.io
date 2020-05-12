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
    <div id="Works" class="indexFile__worksteam">
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

<style scoped>
.indexFile__worksteam {
  height: 90vh;
}
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
.indexFile__container--header::after {
  content: '';
  position: absolute;
  margin-top: -120px;
  width: 100%;
  height: 120px;
  background: linear-gradient(0, white 34%, transparent);
}
</style>
