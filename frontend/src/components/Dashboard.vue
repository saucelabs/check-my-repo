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
      fetch('dashboard.json')
        .then(response => response.json())
        .then(data => (this.dashboardDataList = data))
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
