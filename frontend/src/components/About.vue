<template>
  <div>
    <svg :view-box="ospo-bot"></svg>

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

</style>
