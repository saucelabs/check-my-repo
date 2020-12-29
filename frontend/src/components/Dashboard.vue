<template>
  <div>
    <h1>CHECK MY REPO</h1>
    <div>Number of repositories analised = {{ reposAnalised }}</div>
    <div>😌 Total healthy repositories = {{ allPassed }}</div>
    <div>😨 Total repositories with fails = {{ failedRepo }}</div>
    <button v-on:click="getDashboardData">Check</button>
    <div v-for="data in dashboardDataList" :key="data.results">
      <div>
        <div>
          <span>{{ data }}</span>
        </div>
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
      let passingRepositories = 0
      const hasFailures = this.dashboardDataList.filter(r => !r.lintResult.passed).length > 0
      if (!hasFailures) {
        passingRepositories++
      }
      return passingRepositories
    },
    failedRepo: function() {
      let passingRepositories = 0
      const hasFailures = this.dashboardDataList.filter(r => !r.lintResult.passed).length > 0
      if (!hasFailures) {
        passingRepositories++
      }
      return this.dashboardDataList.length - passingRepositories
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

}
</style>
