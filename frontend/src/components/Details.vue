<template>
  <div class="square-detail">
    <!-- <table>
      <tr class="table-header">
        <th>Repository name</th>
        <th class="table-header-passed">Passed rule</th>
        <th class="table-header-failed">Failed rule</th>
      </tr>
      <tr>
        <td>repo-1</td>
        <td>License</td>
      </tr>
      <tr>
        <td>repo-2</td>
        <td>Contributor</td>
        <td>Security</td>
      </tr>
      <tr>
        <td>repo-3</td>
        <td>Readme</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Details'
}
</script>

<style scoped lang="scss">
.square-detail {
  text-align: center;
  margin: 0% 16%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  background-color: white;
  border-radius: 10px;
}
.table-header {
  font-size: 1.1em;
}
.table-header-passed {
  color: #158906;
}
.table-header-failed {
  color: #e12726;
}

table {
  color: #464b54;
  padding: 5%;
  text-align: left;
}

th{
  padding-bottom: 5%;
}
</style>
