<template>
  <div>
    <h1>About</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {  },
  name: 'About'
}
</script>

<style scoped lang="scss">
p {
  text-align: center;
  font-size: 1em;
  color: white;
  font-weight: 200;
}
.p-bottom {
  padding-bottom: 10%;
}

.break-line {
  margin: 0%;
}

.bot {
  margin-top: 5%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 6%;
}

a {
  display: block;
  text-align: center;
  margin: 2%;
  font-size: 1em;
  color: white;
  font-weight: 200;
}

</style>
