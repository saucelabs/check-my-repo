<template>
  <div>
    <img class="bot" :src="require('../assets/ospo-bot.svg')"/>

    <p>About</p>
    <p>Open source automated tool daily checking our public
      repositories health and quality
    </p>
  </div>
</template>

<script>
export default {
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

.bot {
  margin-top: 5%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 15%;
}

</style>
