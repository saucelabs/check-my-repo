<template>
  <div>
    <h1 class="header">CHECK MY REPO</h1>
    <div class="square">
      <div class="content total">
        Repositories
        <div class="result">{{frontend.length}}</div>
      </div>
      <div class="content passed">
        All Passed
        <div class="result">{{ allPassed }}</div>
      </div>
      <div class="content failed">
        Failures
        <div class="result">{{ failedRepo }}</div>
      </div>
    </div>
  <About />
  </div>
</template>

<script>
import reposData from "../../public/frontend.json"
import About from './About.vue'

export default {
  components: { About },
  name: 'Dashboard',
  /* tells Vue.js that we want to add these variables to our reactivity system */
  data() {
    return {
      frontend: reposData
    }
  },
  computed: {
    allPassed: function() {
      return this.frontend.filter(r => r.passed && r.failed.length < 1).length
    },

    failedRepo: function() {
      return this.frontend.map(({failed}) => failed).flat().length
    },
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
  margin: -1vh;
  font-weight: 300;
  font-style: oblique;
}

.square {
  text-align: center;
  margin: 5% 15%;
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
  border: 1px solid #2E3137;
  &:hover {
    border: 6px solid #2E3137;
  }
}
.passed {
  color: #28F606;
  border-radius: 10px;
  border: 1px solid #28F606;
  &:hover {
    border: 6px solid #28F606;
  }
}
.failed {
  color: #e12726;
  border-radius: 10px;
  border: 1px solid #e12726;
  &:hover {
    border: 6px solid #e12726;
  }
}
.result {
  font-weight: 500;
  font-size: 2em;
}
</style>
