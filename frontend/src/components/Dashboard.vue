<template>
  <div>
    <h1 class="header">CHECK MY REPO</h1>
    <div class="square">
      <!-- <button class="content total state" v-on:click="isHidden = !isHidden">
        Repositories
        <div class="result">{{frontend.length}}</div>
      </button> -->
      <div class="content total state" v-on:click="hideRepos = !hideRepos">
        <input type="checkbox" class="visually-hidden">
        Repositories
        <div class="result">{{frontend.length}}</div>
      </div>
      <div class="content passed state-healthy" v-on:click="hideHealthy = !hideHealthy">
        Healthy Repos
        <div class="result">{{ allPassed }}</div>
      </div>
      <div class="content failed">
        Failures
        <div class="result">{{ failedRepo }}</div>
      </div>
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

    failedRepo: function() {
      return this.frontend.map(({failed}) => failed).flat().length
    },
  },
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
  border: 3px solid #1C9FCE;
}
.passed {
  color: #158906;
  border-radius: 10px;
  border: 3px solid #25A711;
}
.failed {
  color: #e12726;
  border-radius: 10px;
  border: 3px solid #E53E3E;
}
.result {
  font-weight: 500;
  font-size: 2em;
}

.state{
  &:hover{background-color: #1C9FCE;}
}

.visually-hidden {
    position: absolute;
    left: -100vw;

    /* Note, you may want to position the checkbox over top the label and set the opacity to zero instead. It can be better for accessibilty on some touch devices for discoverability. */
}

h1 {
  margin-block-start: 0.1em;
}

</style>
