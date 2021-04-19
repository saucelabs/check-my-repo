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

<style>
#app {
  font-family: -apple-system, 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background: var(--app-background);
  margin: 0%;
  padding: 0%;
  border: 0vh;
  color: white;
}

p {
  text-align: center;
  font-size: 1em;
  color: white;
  font-weight: 300;
}

a {
  color: white;
  font-size: 1.1em;
  font-weight: 300;
  text-decoration: none;
}

a:visited{
  color: var(--primary-color);
}

a:hover{
  color: var(--primary-color);
  font-weight: 500;
}

:root {
  --app-background: #464B54;
  --square-background-color: #2E3137;
  --passed-color: #158906;
  --passed-color-accent: #8CFF4D;
  --failed-color: #e12726;
  --primary-color: #6ED6FF;
  --grey-accent: lightgrey;
  --shadow: rgb(34, 33, 33);
}


</style>
