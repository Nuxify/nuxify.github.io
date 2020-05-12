<template>
  <v-container id="Team" class="mt-10">
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
                Engr. Karl Anthony Baluyot
              </span>
              <span class="d-block">
                Tech Lead & Software Architect
              </span>
              <span class="mt-5 mx-10 d-block text-justify">
                Karl leads the system design phase up to execution and
                maintenance. He carefully architects the software's domain
                models down to the best optimization it deserves. Karl loves
                that goofy mascot of Golang.
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
                Lead Frontend & UI/UX Developer
              </span>
              <span class="mt-5 mx-10 d-block text-justify">
                Nick compares UI/UX as an extension of his creativeness. He is
                the man behind those impressive and modern UI/UX feels and eager
                to learn more each day. He aims to be a JS/TS guru someday.
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
