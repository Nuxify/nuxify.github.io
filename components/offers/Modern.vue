<template>
  <div id="Modern">
    <v-container class="mt-10" fill-height>
      <v-row no-gutters>
        <v-col
          :order="$vuetify.breakpoint.smOnly ? 2 : 1"
          cols="12"
          xs="12"
          sm="12"
          md="6"
          lg="6"
        >
          <div
            class="d-flex align-center maintainability__flex"
            :class="$vuetify.breakpoint.smOnly ? 'pl-10 ml-5' : 'pl-5'"
          >
            <div>
              <div class="maintainability__title nuxify--text">
                Modern designs
                <span class="maintainability__title black--text"
                  >for <br v-if="$vuetify.breakpoint.smAndUp" />
                  modern solutions</span
                >
              </div>
              <span class="pr-10 pt-10 d-block"
                >Craft your software with simple, precise, and beautiful user
                interfaces partnered with well-crafted user experience to bring
                it to the next level.
              </span>
              <span class="pr-10 pt-5 d-block"
                >Some of our "GO TO" design frameworks and tools include:
              </span>
              <v-row no-gutters class="pt-5">
                <ul class="mr-10">
                  <li>Material Design</li>
                  <li>CSS3</li>
                  <li>Bootstrap</li>
                  <li>Vuetify</li>
                  <li>Tailwind</li>
                  <li>Ant</li>
                </ul>
                <ul :class="{ 'ml-10': $vuetify.breakpoint.smAndUp }">
                  <li>Quasar</li>
                  <li>Gridsome</li>
                  <li>Illustrator</li>
                  <li>Photoshop</li>
                  <span>and a lot more...</span>
                </ul>
              </v-row>
            </div>
          </div>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="6" lg="6">
          <v-img src="/landing/front-tools.svg"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#app .modern__size {
  height: 100vh;
}
#app .maintainability__title {
  font-family: 'Arvo', serif !important;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
}
ul {
  list-style-image: url('/landing/ul.svg');
}
.maintainability__flex {
  height: 100%;
}
</style>
