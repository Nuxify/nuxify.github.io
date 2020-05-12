<template>
  <div class="indexFile__container--header">
    <Header class="pa-0" />
    <v-container>
      <InnerHeader />
    </v-container>
    <div class="header__background--filter"></div>
  </div>
</template>

<script>
import { Header, InnerHeader } from '~/components/header'
export default {
  components: {
    Header,
    InnerHeader
  }
}
</script>

<style scoped>
.indexFile__container--header {
  background-image: url('/header/backdrop.svg');
  background-position: center center;
  background-size: cover;
  background-color: #fff;
}
.header__background--filter {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 120px;
  background: linear-gradient(0, white 34%, transparent);
}
</style>
