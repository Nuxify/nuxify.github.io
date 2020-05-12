<template>
  <v-app-bar color="white" flat hide-on-scroll app>
    <v-row class="pa-10 mx-10" no-gutters>
      <img src="/landing/nuxify.dev.png" class="nuxify--logo" />
      <v-spacer />
      <v-btn text class="text-capitalize font-weight-medium subtitle-1">
        <span>Home</span>
      </v-btn>
      <v-btn text class="text-capitalize font-weight-medium subtitle-1">
        <span>Services</span>
      </v-btn>
      <v-btn text class="text-capitalize font-weight-medium subtitle-1">
        <span>Our Works</span>
      </v-btn>
      <v-btn text class="text-capitalize font-weight-medium subtitle-1">
        <span>Contact Us</span>
      </v-btn>
      <v-spacer />
      <v-btn color="nuxify">
        <v-icon color="white">mdi-email</v-icon>
      </v-btn>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {}
</script>

<style scoped>
.nuxify--logo {
  width: 100px;
}
</style>
