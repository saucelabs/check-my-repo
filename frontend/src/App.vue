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
  text-align: left;
  font-size: 1em;
  color: white;
  font-weight: 300;
}

a {
  color: white;
  font-size: 1em;
  font-weight: 400;
  text-decoration: none;
}

a:visited{
  color: var(--primary-color);
}

a:hover{
  background: linear-gradient(to right, yellow, #6ED6FF, rgb(206, 117, 244), #00ff00, #ff3399, white);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: rainbow_animation 6s ease-in-out infinite;
  background-size: 400% 100%;
}

@keyframes rainbow_animation {
    0%,100% {
        background-position: 0 0;
    }
    50% {
        background-position: 100% 0;
    }
}

.badge {
  padding: 3px 10px;
  margin-left: 5px;
  line-height: 2.5;
  border-radius: 20px;
  text-align: center;
  overflow: hidden;
  text-decoration: none;
  background: var(--app-background);
  color: white;
}

.low {
  color: var(--square-background-color);
  background-color: var(--grey-accent);
}

.medium {
  background-color: var(--primary-color);
  color: var(--square-background-color);
}

.high {
  background-color: var(--failed-color);
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
