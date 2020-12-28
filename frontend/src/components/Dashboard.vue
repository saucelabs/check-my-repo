<template>
  <div>
    <h1>CHECK-MY-REPO</h1>
    <button v-on:click="getDashboardData">Check</button>
    <!--<div>{{ dashboardDataList }}</div>-->
    <ul>
      <li v-for="data in dashboardDataList" :key="data.results">
        {{ data.results }}
      </li>
    </ul>
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
    }
  },
  methods: {
    getDashboardData() {
      axios.get('weather.json').then(response => (this.dashboardDataList = response.data))
    },
  },
}
</script>

<style scoped>
button {
  padding: 10px;
  background-color: #1aa832;
  color: white;
  border: 1px solid #ccc;
}
</style>
