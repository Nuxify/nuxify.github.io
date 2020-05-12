<template>
  <v-container id="Maintainability">
    <v-row no-gutters>
      <v-col cols="6" xs="12" sm="12" md="6" lg="6">
        <v-img src="/landing/back-tools2.svg"></v-img>
      </v-col>
      <v-col cols="6" xs="12" sm="12" md="6" lg="6">
        <div class="pl-5 d-flex align-center maintainability__flex">
          <div>
            <div class="maintainability__title nuxify--text">
              Maintainability<br />
              <span class="maintainability__title black--text"
                >at its heart</span
              >
            </div>
            <span class="pr-10 pt-10 d-block"
              >Equip your software with well-engineered architectures, design
              patterns, and adherence to standards and conventions for easy
              scaling.
            </span>
            <span class="pr-10 pt-5 d-block"
              >Some of our "GO TO" tech stacks include:
            </span>
            <v-row no-gutters class="pt-5">
              <ul class="mr-10">
                <li>Go</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>NuxtJS</li>
                <li>VueJS</li>
                <li>NativeScript</li>
              </ul>
              <ul class="ml-10">
                <li>Apache Kafka</li>
                <li>NoSQLs</li>
                <li>RDBMS</li>
                <li>GitLab CI</li>
                <span>and a lot more...</span>
              </ul>
            </v-row>
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
