<template>
  <div>
    <div
      class="mx-auto d-block text-center font-weight-bold innerHeader__tagline--text"
    >
      Writing Software<br />Like It's Ours<span
        class="nuxify--text font-weight-regular"
        >|</span
      >
    </div>
    <div class="mt-5 mx-auto d-block text-center innerHeader__paragraph--text">
      <span>
        We treat your software as our own with love.
        <div class="mt-10"></div>
        We are a team of startups-loving individuals eager to help you craft
        your product from ideas to realizations.
        <div class="mt-10"></div>
        <span class="innerHeader__why--text"
          >Why <span class="nuxify--text">Nuxify.dev</span>?</span
        >
      </span>
      <div class="d-block pt-10 mt-10 innerHeader__scroll">
        <div class="d-inline mx-auto nuxify--text">
          <span class="innerHeader__scroll--text">Scroll to proceed</span>
          <br />
          <v-icon color="nuxify">mdi-chevron-down</v-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#app .innerHeader__tagline--text {
  font-family: 'Arvo', serif !important;
  font-style: normal;
  font-size: 67px;
  line-height: 71px;
  margin-top: 200px;
}
#app .innerHeader__paragraph--text {
  width: 70%;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 34px;
  text-align: center;
  letter-spacing: -0.451613px;
}
#app .innerHeader__why--text {
  font-size: 18px;
}
#app .innerHeader__scroll--text {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
}
#app .innerHeader__scroll {
  z-index: 2;
  position: relative;
}
</style>
