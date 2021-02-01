<template>
  <div>
    <img class="bot" :src="require('../assets/ospo-bot-new.svg')"/>
    <p>About</p>
    <p class="break-line">Open source automated tool daily checking our public</p>
    <p class="break-line p-bottom">repositories health and quality</p>
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

}

</style>
