<template>
  <nav class="navbar">
    <ul>
      <li><router-link class="name" :to="{ path: '/'}">CHECK MY REPO</router-link></li>
      <li><router-link class="pages" :to="{ path: '/about'}">About</router-link></li>
      <li><router-link class="pages" :to="{ path: '/rules'}">Rules</router-link></li>
    </ul>
  </nav>
</template>

<script>

export default {
  name: 'Navbar',
  data() {
    return {
    }
  }
}
</script>


<style scoped lang="scss">

.name {
  font-size: 1.5em;
  font-weight: 500;
  color: white;
  font-family: 'Noto Sans KR', sans-serif;
  text-align: left;
  padding-left: 2em;
}

.pages {
  line-height: 3em;
  padding: 1em 3em;
}

nav {
  margin: 0;
  background-color: var(--square-background-color);
}

nav ul {
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
}

nav ul li {
  display: inline-block;
  list-style-type: none;
}

a.pages.exact-active.active {
  color: var(--primary-color);
}

nav ul li a {
  display: block;
  line-height: 3em;
  text-decoration: none;
  color: white;
  font-weight: 500;
  font-family: 'Noto Sans KR', sans-serif;
  text-align: right;
  text-decoration: none;
}

nav ul li a:hover{
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

nav ul li:first-child {
  margin-right: auto;
}

@media (max-width: 545px) {
  nav ul li a {
    display: contents;
  }

  .name {
    font-size: 1.2em;
  }

  nav ul li {
  padding-right: 15px;
  padding-left: 15px;
}
}

</style>
