<template>
  <div>
    <h1>CHECK MY REPO</h1>
    <button v-on:click="getDashboardData">Check</button>
    <div class="square">
      <div class="content total">
        Number of repositories analised =
        <div class="result">{{ reposAnalised }}</div>
      </div>
      <div class="content passed">
        😌 Total healthy repositories =
        <div class="result">{{ allPassed }}</div>
      </div>
      <div class="content failed">
        😨 Total repositories with fails =
        <div class="result">{{ failedRepo }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Dashboard',
  /* tells Vue.js that we want to add these variables to our reactivity system */
  data() {
    return {
      dashboardDataList: [] /* stored in public folder */,
      errored: false,
    }
  },
  methods: {
    getDashboardData() {
      axios
        .get('dashboard.json')
        .then(response => (this.dashboardDataList = response.data.results))
        .catch(error => {
          console.log(error)
          this.errored = true
        })
    },
  },
  computed: {
    allPassed: function() {
      return this.dashboardDataList
        .filter(r => r.lintResult && r.lintResult.passed)
        .every(r => this.dashboardDataList.runRuleset && r.ruleInfo.name)
    },
    failedRepo: function() {
      return this.dashboardDataList.filter(r => r.lintResult && !r.lintResult.passed).length
    },
    reposAnalised: function() {
      return this.dashboardDataList.length
    },
  },
}
</script>

<style scoped>
button {
  width: 100px;
  height: 100px;
  line-height: 50px;
  border-radius: 50%;
  font-size: 30px;
  color: #fff;
  text-align: center;
  background: #003a70;
}

.square {
  width: 80vw;
  height: auto;
  display: flex;
}
.content {
  font-size: 1.5em;
  padding: 5%;
  margin: 2%;
}
.total {
  background-color: #464b54;
  color: #fff;
}
.passed {
  background-color: #57c1e8;
  color: #fff;
}
.failed {
  background-color: #e12726;
  color: #fff;
}
.result {
  font-weight: 900;
}
</style>
