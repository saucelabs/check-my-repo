<template>
  <div>
    <h1>CHECK MY REPO</h1>
    <div class="square">
      <div class="content total">
        Repositories
        <div class="result">{{ dashboardDataList.length }}</div>
      </div>
      <div class="content passed">
        All Passed
        <div class="result">{{ allPassed }}</div>
      </div>
      <div class="content failed">
        With Failures
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
      let allPassed = 0
      let hasFailures = this.dashboardDataList.filter(r => !r.lintResult.passed).length > 0
      return !hasFailures ? allPassed++ : 0
    },
    failedRepo: function() {
      return this.dashboardDataList.filter(r => r.lintResult && !r.lintResult.passed).length
    },
  },
}
</script>

<style scoped lang="scss">
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
.background {
  background-color: #ededef;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.square {
  width: 80vw;
  height: auto;
  display: flex;
  background-color: white;
}
.content {
  font-size: 1.5em;
  padding: 5%;
  margin: 2%;
}
.total {
  color: #464b54;
  border-radius: 10px;
  border: 3px solid #464b54;
  &:hover {
    border: 6px solid #464b54;
  }
}
.passed {
  color: #003a70;
  border-radius: 10px;
  border: 3px solid #003a70;
  &:hover {
    border: 6px solid #003a70;
  }
}
.failed {
  color: #e12726;
  border-radius: 10px;
  border: 3px solid #e12726;
  &:hover {
    border: 6px solid #e12726;
  }
}
.result {
  font-weight: 500;
  font-size: 2em;
}
</style>
