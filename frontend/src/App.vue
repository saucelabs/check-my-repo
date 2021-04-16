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

.badge {
  background: var(--color-prime-light-grey);
  border: none;
  border-radius: var(--border-radius);
  color: var(--color-prime-olive);
  font-size: var(--font-size-xs);
  filter: drop-shadow(2px 2px 12px rgba(0, 0, 0, 0));
  text-align: center;
  overflow: hidden;
  transition: background-color var(--transition-time), filter var(--transition-time);
  text-decoration: none;
}

@media screen and (min-width: 768px) {
  .badge {
    font-size: var(--font-size-large);
  }
}

.badge:hover {
  background: var(--color-prime-light-grey-hover);
  /* filter: drop-shadow(2px 2px 12px rgba(0, 0, 0, 0.25)); */
}

.badge--shadow {
  filter: drop-shadow(2px 2px 12px rgba(0, 0, 0, 0.25));
}

.badge--shadow:hover {
  filter: drop-shadow(2px 2px 25px rgba(0, 0, 0, 0.3));
}

.badge--green {
  background-color: var(--color-prime-green);
}

.badge--green:hover {
  background-color: var(--color-prime-green-hover);
}

.badge--pink {
  background-color: var(--color-prime-pink);
}

.badge--pink:hover {
  background-color: var(--color-prime-pink-hover);
}

</style>
