<template>
  <div>
    <v-app-bar
      :height="$vuetify.breakpoint.smAndDown ? '100px' : '56px'"
      color="white"
      flat
      hide-on-scroll
      app
    >
      <v-row
        class="align-center pa-0 ma-5"
        :class="{
          'pa-10 mx-0': $vuetify.breakpoint.smAndDown,
          'px-0 mx-0': $vuetify.breakpoint.xsOnly
        }"
        no-gutters
      >
        <v-btn
          v-show="$vuetify.breakpoint.smAndDown"
          class="mr-3"
          icon
          @click="toggleDrawer"
        >
          <v-icon :large="$vuetify.breakpoint.smAndDown">mdi-menu</v-icon>
        </v-btn>
        <a href="/">
          <img
            src="/landing/nuxify.dev.png"
            :class="
              $vuetify.breakpoint.smAndDown
                ? 'nuxify__logo--big'
                : 'nuxify__logo--small'
            "
          />
        </a>
        <v-spacer />
        <v-btn
          v-show="$vuetify.breakpoint.mdAndUp"
          to="/"
          text
          class="text-capitalize font-weight-medium subtitle-1"
        >
          <span>Home</span>
        </v-btn>
        <v-btn
          v-show="$vuetify.breakpoint.mdAndUp"
          to="#Maintainability"
          text
          class="text-capitalize font-weight-medium subtitle-1"
        >
          <span>Why Nuxify</span>
        </v-btn>
        <v-btn
          v-show="$vuetify.breakpoint.mdAndUp"
          to="#Works"
          text
          class="text-capitalize font-weight-medium subtitle-1"
        >
          <span>Team</span>
        </v-btn>
        <v-btn
          v-show="$vuetify.breakpoint.mdAndUp"
          to="#Message-Us"
          text
          class="text-capitalize font-weight-medium subtitle-1"
        >
          <span>Contact Us</span>
        </v-btn>
        <v-spacer />
        <v-btn
          href="mailto:nuxify.dev@gmail.com"
          :large="$vuetify.breakpoint.smAndDown"
          color="nuxify"
        >
          <v-icon color="white">mdi-email</v-icon>
        </v-btn>
      </v-row>
    </v-app-bar>
    <MenuDrawer v-model="isShow" />
  </div>
</template>

<script>
import MenuDrawer from '~/components/header/MenuDrawer'

export default {
  components: {
    MenuDrawer
  },
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    toggleDrawer() {
      this.isShow = true
    }
  }
}
</script>

<style>
.nuxify__logo--big {
  width: 130px;
}
.nuxify__logo--small {
  width: 100px;
}
</style>
