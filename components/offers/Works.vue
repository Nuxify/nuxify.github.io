<template>
  <v-container id="Works" class="mt-10">
    <div class="maintainability__title d-block text-center black--text">
      Our
      <span class="maintainability__title nuxify--text">Works </span>
    </div>
    <v-row no-gutters class="mt-5 mx-10">
      <v-col cols="6" xs="12" sm="6" md="6" lg="6">
        <v-container class="pa-7">
          <div class="maintainability__admin">Admin Panel</div>
          <div class="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div class="mt-5">Owner: Andrie</div>
        </v-container>
      </v-col>
      <v-col cols="6" xs="12" sm="6" md="6" lg="6">
        <v-container class="pa-7">
          <div class="maintainability__admin">Admin Panel</div>
          <div class="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div class="mt-5">Owner: Andrie</div>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style scoped>
#app .maintainability__title {
  font-family: 'Arvo', serif !important;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
}
#app .maintainability__admin {
  font-family: 'Inter', sans-serif !important;
  font-style: normal;
  font-weight: bold;
  font-size: 16;
  line-height: 19px;
  letter-spacing: 0.32px;
}
</style>
