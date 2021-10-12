<template>
  <div>
    <header id="header" class="header">{{ this.$store.state.title }}</header>
    <div>{{ getTitle }}</div>
  </div>
</template>

<script>

import { mapGetters } from "vuex";

export default {
  name: 'Header',
  computed: {
    ...mapGetters(["getTitle"])
  }
}
</script>

<style scoped>
</style>