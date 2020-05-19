<template>
  <v-navigation-drawer v-model="isMenuShow" floating left temporary app>
    <v-row class="align-center pa-5" no-gutters>
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
        v-show="$vuetify.breakpoint.smAndDown"
        icon
        @click="isMenuShow = false"
      >
        <v-icon large>mdi-menu-open</v-icon>
      </v-btn>
    </v-row>
    <div>
      <v-list class="px" dense>
        <v-list-item v-for="(item, index) in menus" :key="index" :to="item.url">
          <v-list-item-content>
            <v-list-item-title class="subtitle-1 nuxify__menu--title">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    value: Boolean
  },
  data() {
    return {
      menus: [
        {
          title: 'Home',
          url: '/'
        },
        {
          title: 'Why Nuxify',
          url: '#Maintainability'
        },
        {
          title: 'Team',
          url: '#Works'
        },
        {
          title: 'Contact Us',
          url: '#Message-Us'
        }
      ]
    }
  },
  computed: {
    isMenuShow: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style scoped>
.item__subcontainer {
  width: 100%;
}
.nuxify__menu--title {
  line-height: 1.1;
}
</style>
