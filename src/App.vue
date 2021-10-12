<template>
  <div id="app" class="app">
    <!-- <Header /> -->
    <div class="app-lnb">
      <router-link to="/button">Button</router-link>
      <router-link to="/input">Input</router-link>
      <router-link to="/sub">sub</router-link>
    </div>
    <div class="app-container">
      <router-view></router-view>
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
// import Header from './components/Header.vue'
// import Footer from './components/Footer.vue'

// https://simple-code-editor.vicuxd.com/

export default {
  name: 'App',
  components: {
    // Header, Footer
  }
}
</script>

<style>
</style>