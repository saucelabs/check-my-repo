<template>
  <div>
    <img class="bot" :src="require('../assets/ospo-bot-new.svg')"/>
    <a href="https://github.com/saucelabs/check-my-repo" target="_blank">GitHub</a>
    <p class="break-line">Open source automated tool daily checking our public</p>
    <p class="break-line p-bottom">repositories health and quality</p>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss">
p {
  text-align: center;
  font-size: 1em;
  color: white;
  font-weight: 300;
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
  font-weight: 300;

  &:hover{
   color: #6ED6FF;
   font-weight: 500;
  }

  &:visited{
   color: #6ED6FF;
  }
}

</style>
