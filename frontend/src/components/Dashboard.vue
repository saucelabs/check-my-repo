<template>
  <div>
    <h1 class="header">CHECK MY REPO</h1>
    <div class="square">
      <div class="content total" @click="showDetails()">
        Repositories
        <div class="result">{{frontend.length}}</div>
      </div>
      <div class="content passed">
        Healthy Repos
        <div class="result">{{ allPassed }}</div>
      </div>
      <div class="content failed">
        Failures
        <div class="result">{{ failedRepo }}</div>
      </div>
    </div>
    <component v-bind:is="details"></component>
  <Details />
  <About />
  </div>
</template>

<script>
import reposData from "../../public/frontend.json"
import About from './About.vue'
import Details from './Details'

export default {
  components: { About, Details },
  name: 'Dashboard',
  /* tells Vue.js that we want to add these variables to our reactivity system */
  data() {
    return {
      frontend: reposData,
    }
  },
  computed: {
    allPassed: function() {
      return this.frontend.filter(r => r.passed && r.failed.length < 1).length
    },

    failedRepo: function() {
      return this.frontend.map(({failed}) => failed).flat().length
    },
  },
  methods: {
    showDetails() {
      this.components.Details
    }
  }
}
</script>

<style scoped lang="scss">

.header {
  grid-column: span 3;
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
  background-color: white;
}
.total {
  color: #464b54;
  border-radius: 10px;
  border: 1px solid #1C9FCE;
  &:hover {
    border: 6px solid #1C9FCE;
  }
}
.passed {
  color: #158906;
  border-radius: 10px;
  border: 1px solid #25A711;
  &:hover {
    border: 6px solid #25A711;
  }
}
.failed {
  color: #e12726;
  border-radius: 10px;
  border: 1px solid #E53E3E;
  &:hover {
    border: 6px solid #E53E3E;
  }
}
.result {
  font-weight: 500;
  font-size: 2em;
}
</style>
