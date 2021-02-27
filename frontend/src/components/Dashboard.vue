<template>
  <div>
    <h1 class="header">CHECK MY REPO</h1>
    <div class="square">
      <div class="content total">
        <div>
          <img class="icon" :src="require('../assets/box.svg')" alt="Feather Icon Box"/>
        </div>
        <h4>Total Repos</h4>
        <div class="result">{{frontend.length}}</div>
      </div>
      <button class="content passed state-healthy" v-on:click="hideHealthy = !hideHealthy">
        <div>
          <img class="icon" :src="require('../assets/check-circle.svg')" alt="Feather Icon Check"/>
        </div>
        <h4>Healthy Repos</h4>
        <div class="result">{{ allPassed }}</div>
        <p>View repos</p>
      </button>
      <button class="content failed state" v-on:click="hideRepos = !hideRepos">
        <div>
          <img class="icon" :src="require('../assets/x-circle.svg')" alt="Feather Icon No Check"/>
        </div>
        <h4>Failing Repos</h4>
        <div class="result">{{frontend.length - allPassed}}</div>
        <p>View repos</p>
      </button>
    </div>
    <div v-if="!hideRepos">
      <Details />
    </div>
    <div v-if="!hideHealthy">
      <Healthy />
    </div>
  <About />
  </div>
</template>

<script>
import reposData from "../../public/frontend.json"
import About from './About.vue'
import Details from './Details.vue'
import Healthy from './Healthy.vue'

export default {
  components: { About, Details, Healthy },
  name: 'Dashboard',
  /* tells Vue.js that we want to add these variables to our reactivity system */
  data() {
    return {
      frontend: reposData,
      hideRepos: true,
      hideHealthy: true
    }
  },
  computed: {
    allPassed: function() {
      return this.frontend.filter(r => r.passed && r.failed.length < 1).length
    },
    // sum of all failures found
    failedRepo: function() {
      return this.frontend.map(({failed}) => failed).flat().length
    },
  },
}
</script>

<style scoped lang="scss">

.header {
  padding: 20px;
  text-align: center;
  font-size: 1.4em;
  background-color: #2E3137;
  color: white;
  font-weight: 300;
  font-style: oblique;
}

.square {
  text-align: center;
  margin: 1% 15%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
.content {
  font-size: 1.1em;
  padding: 12%;
  margin: 3%;
  background-color: #2E3137;
}
.total {
  color:white;
  border-radius: 4px;
  border-top: 5px solid #6ED6FF;
}
.passed {
  color: #8CFF4D;
  border-radius: 4px;
  border-top: 5px solid #8CFF4D;
}
.failed {
  color: #FF5953;
  border-radius: 4px;
  border-top: 5px solid #FF5953;
}
.result {
  font-weight: 500;
  font-size: 2em;
}

.state{
  &:hover{
    background-color:#6E2E2C;
    color: white;
    cursor: grab;
    }
}
.state-healthy{
  &:hover{
    background-color: #3C6625;
    color: white;
    cursor: grab;
  }
}

h1 {
  margin-block-start: 0.1em;
}

button {
  &:focus {
    outline: none;
  }
}

h1 {
  margin: 0%;
}

h4{
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1em;
  color: white;
  font-weight: 500;
  margin: 0px;
}

p{
  color: #6ED6FF;
  margin: 12px;
}

</style>
