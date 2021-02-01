<template>
  <div id="app">
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from './components/Dashboard.vue'

export default {
  name: 'app',
  components: {
    Dashboard,
  },
}
</script>

<style lang="scss">
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background: #464B54;
}

</style>
