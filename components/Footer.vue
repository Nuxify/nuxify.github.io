<template>
  <div class="footer__container">
    <v-container id="Message-Us" class="mt-10 py-10">
      <v-row no-gutters>
        <v-col cols="4" md="4" lg="4" class="white--text">
          <img src="/landing/nuxify.dev.png" class="nuxify--logo" />
          <span class="d-block touch__title">Get in touch</span>
          <span class="d-block"
            ><v-icon color="white">mdi-email</v-icon> nuxify.dev@gmail.com</span
          >
          <span class="d-block mt-2"
            ><v-icon color="white">mdi-github</v-icon> github.com/Nuxify</span
          >
        </v-col>
        <v-col cols="8" md="8" lg="8" class="white--text">
          <span class="d-block touch__title">Message Us</span>
          <v-row no-gutters>
            <v-col cols="12" sm="6" md="6" class="pr-2">
              <v-text-field
                v-model="name"
                label="Full Name"
                :dark="true"
                dense
                outlined
                color="nuxify"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="from"
                label="Email"
                :dark="true"
                dense
                outlined
                color="nuxify"
              ></v-text-field>
            </v-col>
            <v-textarea
              v-model="message"
              outlined
              name="input-7-4"
              label="Say something..."
              :dark="true"
              color="nuxify"
            ></v-textarea>
            <v-btn
              block
              color="nuxify"
              :href="
                `mailto:${to}?from=${from}&subject=${name}&body=${message}`
              "
              :dark="true"
              >Go</v-btn
            >
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      to: 'nuxify.dev@gmail.com',
      from: '',
      name: '',
      message: ''
    }
  },
  methods: {
    // alertUser() {
    //   alert(
    //     'This function is still WIP.\nPlease e-mail nuxify.dev@gmail.com directly through your email client.'
    //   )
    // }
  }
}
</script>

<style scoped>
.nuxify--logo {
  width: 240px;
}
.footer__container {
  background: #232323;
}
#app .touch__title {
  font-family: 'Arvo', serif !important;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
}
</style>
