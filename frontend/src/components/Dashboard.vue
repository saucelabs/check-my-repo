<template>
  <div>
    <h1>OSPO Verified Repositories</h1>
    <button v-on:click="getDashboardData">Get Dashboard Data</button>
    <div>{{ dashboardDataList }}</div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
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
