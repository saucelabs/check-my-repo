<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    Navbar,
    Footer
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
