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
  font-family: -apple-system, 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background: #464B54;
  margin: 0%;
  padding: 0%;
  border: 0vh;
}

</style>
