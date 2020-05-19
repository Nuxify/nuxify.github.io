<template>
  <v-container
    id="Team"
    class="mt-10"
    :class="$vuetify.breakpoint.smAndUp ? 'pa-10' : 'pa-0'"
  >
    <div class="team__title d-block text-center black--text">
      Meet the
      <span class="team__title nuxify--text">Team</span>
    </div>
    <v-row class="mt-10 mx-10">
      <v-col cols="12" xs="12" sm="12" md="6" lg="6">
        <div class="d-flex justify-center">
          <div>
            <v-img src="/landing/carl.svg" class="team__img mx-auto"></v-img>
            <div class="d-block mt-5 text-center">
              <span class="team__name d-block">
                Engr. Karl Anthony B. Baluyot
              </span>
              <span class="nuxify--text d-block">
                Tech Lead & Software Architect
              </span>
              <span
                class="mt-5 d-block text-justify"
                :class="{ 'mx-5': $vuetify.breakpoint.mdAndUp }"
              >
                Karl leads the system design phase up to execution and
                maintenance. He carefully architects the software's domain
                models down to the best optimization it deserves. Karl loves
                that goofy mascot of Golang.
              </span>
            </div>
          </div>
        </div>
      </v-col>
      <v-col
        cols="12"
        xs="12"
        sm="12"
        md="6"
        lg="6"
        :class="$vuetify.breakpoint.smAndDown ? 'mt-10 pt-5' : ''"
      >
        <div class="d-flex justify-center">
          <div>
            <v-img src="/landing/nickzy.svg" class="team__img mx-auto"></v-img>
            <div class="d-block mt-5 text-center">
              <span class="team__name d-block">
                Monicar S. Gayo Jr.
              </span>
              <span class="nuxify--text d-block">
                Lead Frontend & UI/UX Developer
              </span>
              <span
                class="mt-5 d-block text-justify"
                :class="{ 'mx-5': $vuetify.breakpoint.mdAndUp }"
              >
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
