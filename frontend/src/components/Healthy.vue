<template>
  <div class="square-healthy">
    <table class="table-healthy">
      <tr>
        <th v-for="name in columns" :key="name">{{name}}</th>
      </tr>
      <tr>
        <td>
          {{ healthy }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import reposData from "../../public/frontend.json"
export default {
  name: 'Healthy',
  data() {
    return {
      frontend: reposData,
      columns: {
        name: 'Healthy Repos',
      },
    }
  },
  computed: {
    healthy: function() {
      return this.frontend.filter(r => r.passed && r.failed.length < 1).map(x => x.name).join('\n')
    },
  },
}

</script>

<style scoped lang="scss">
.square-healthy {
  text-align: center;
  margin: 2% 16%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  background-color: #2E3137;
  border-radius: 10px;
  height: 50vh;
  overflow:scroll;
}
.table-header {
  font-size: 1.1em;
}

.table-healthy {
  height: 20vh;
  overflow: auto;
  text-align:left;
  color: #8CFF4D;
}

table {
  color: #464b54;
  padding: 5%;
  text-align: left;
}

th{
  padding-bottom: 5%;
}

td {
  white-space: pre
}

</style>
