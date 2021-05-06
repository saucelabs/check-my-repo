<template>
  <div>
    <img class="bot" :src="require(`../../public/logo.svg`)"/>
    <a href="https://github.com/saucelabs/check-my-repo" target="_blank" rel="noopener">GitHub</a>
    <p class="break-line">Open source automated tool daily checking our public</p>
    <p class="break-line p-bottom">repositories health and quality</p>
  </div>
</template>

<script>
import config from "../../public/config.json"

export default {
  name: 'Footer',

  data() {
    return {
      config: config,
    }
  },
}

</script>

<style scoped lang="scss">
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
}

</style>
