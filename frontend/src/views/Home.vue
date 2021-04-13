<template>
  <div>
    <div class="square">
      <button class="content total" v-on:click="goToRepo()">
        <img class="icon" :src="require('../assets/box.svg')" alt="Feather Icon Box"/>
        <h4>Total Repos</h4>
        <div class="result">{{frontend.length}}</div>
        <p class="text">Repository <img class="icon" :src="require('../assets/external-link.svg')" alt="Feather External Link"/></p>
        <p>Go to GitHub Repo</p>
      </button>
      <button class="content passed state-healthy" v-on:click="hideHealthy = !hideHealthy">
        <img class="icon" :src="require('../assets/check-circle.svg')" alt="Feather Icon Check"/>
        <h4>Healthy Repos</h4>
        <div class="result">{{ allPassed }}</div>
        <p>View repos</p>
      </button>
      <button class="content failed state" v-on:click="hideRepos = !hideRepos">
        <img class="icon" :src="require('../assets/x-circle.svg')" alt="Feather Icon No Check"/>
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
  </div>
</template>

<script>
import reposData from "../../public/frontend.json"
import Details from '../components/Details.vue'
import Healthy from '../components/Healthy.vue'

export default {
  components: { Details, Healthy },
  name: 'Home',
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
  methods: {
    goToRepo: () => {
      window.open("https://github.com/saucelabs?q=&type=public&language=&sort=", "_blank", "noopener");
    }
  }
}
</script>

<style scoped lang="scss">

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
  border-top: 5px solid #6ED6FF;
  border-radius: 7px;
  &:hover{
    background-color:#179fd45b;
    color: white;
    cursor: grab;
    }
}
.passed {
  color: #8CFF4D;
  border-top: 5px solid #8CFF4D;
  border-radius: 7px;
}
.failed {
  color: #FF5953;
  border-top: 5px solid #FF5953;
  border-radius: 7px;
}
.result {
  font-weight: 500;
  font-size: 2em;
  padding: 12px;
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

.icon-space{
  padding-bottom: 8px;
}

.icon,
.text {
  vertical-align: middle;
  display: inline-block;
  padding-bottom: 3px;
}

h1 {
  margin-block-start: 0.1em;
}

button {
  border: none;
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
