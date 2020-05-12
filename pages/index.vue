<template>
  <div>
    <div class="indexFile__container--header">
      <Header class="pa-0" />
      <v-container>
        <InnerHeader />
      </v-container>
    </div>
    <Maintainability />
    <Modern />
    <Works />
    <Team />
  </div>
</template>

<script>
import { Header, InnerHeader } from '~/components/header'
import { Maintainability, Modern, Works } from '~/components/offers'
import { Team } from '~/components/team'

export default {
  components: {
    Header,
    InnerHeader,
    Maintainability,
    Modern,
    Works,
    Team
  }
}
</script>

<style scoped>
.indexFile__container--header {
  background-image: url('/landing/backdrop.svg');
  background-position: center center;
  background-size: cover;
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
