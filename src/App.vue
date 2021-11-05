<template>
  <div id="app" class="app">
    <!-- <Header /> -->
    <Sidebar />
    <div class="app-container">
      <router-view class="app-content"></router-view>
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
// import Header from './components/Header.vue'
import Sidebar from './components/layout/Sidebar.vue'

// https://simple-code-editor.vicuxd.com/

export default {
  name: 'App',
  components: {
    Sidebar
    // Header, Footer
  }
}
</script>

<style>
</style>