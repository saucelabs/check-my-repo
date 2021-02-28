<template>
  <nav class="navbar">
    <ul>
      <li><h1>CHECK MY REPO</h1></li>
      <li><a class="rules" href="#">About</a></li>
      <li><a class="about" href="#">Rules explained</a></li>
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

nav ul li h1 {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  text-align: left;
  padding-left: 2em;
}

nav ul li a {
  display: block;
  line-height: 3em;
  padding: 1em 3em;
  text-decoration: none;
  color: #6ED6FF;
}
nav ul li:first-child {
  margin-right: auto;
}
nav ul li a {
  font-weight: 400;
  font-family: 'Noto Sans KR', sans-serif;
  text-align: right;
  text-decoration: none;

  &:hover{
    color: #FFF503;
    font-weight: 500;
  }

  &:active{
    color: #6ED6FF;
    font-weight: 500;
  }
}


</style>
