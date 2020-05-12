<template>
  <v-container class="mt-10">
    <div class="team__title d-block text-center black--text">
      Meet the
      <span class="team__title nuxify--text">Team</span>
    </div>
    <v-row no-gutters class="mt-5 mx-10">
      <v-col cols="6" xs="12" sm="6" md="6" lg="6">
        <div class="d-flex justify-center">
          <div>
            <v-img src="/landing/carl.svg" class="team__img mx-auto"></v-img>
            <div class="d-block mt-5 text-center">
              <span class="team__name d-block">
                Karl Anthony Baluyot
              </span>
              <span class="d-block">
                CO-Founder
              </span>
              <span class="nuxify--text mt-5 d-block">
                Back-End Developer
              </span>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="6" xs="12" sm="6" md="6" lg="6">
        <div class="d-flex justify-center">
          <div>
            <v-img src="/landing/nickzy.svg" class="team__img mx-auto"></v-img>
            <div class="d-block mt-5 text-center">
              <span class="team__name d-block">
                Monicar S. Gayo Jr.
              </span>
              <span class="d-block">
                CO-Founder
              </span>
              <span class="nuxify--text mt-5 d-block">
                Front-End Developer
              </span>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style scoped>
#app .team__title {
  font-family: 'Arvo', serif !important;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
}
#app .team__name {
  font-family: 'Inter', sans-serif !important;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
}
.team__img {
  width: 209px;
}
</style>
