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
  background-color: #2E3137;
  color: white;
}

nav ul {
  margin: 0;
  padding: 0;
  display: flex;
}
nav ul li {
  display: inline-block;
  list-style-type: none;
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

  &:hover{
    color: #6ED6FF;
  }

  &:active{
    color: #6ED6FF;
  }
}
nav ul li:first-child {
  margin-right: auto;
}

</style>
