<template>
  <div class="square-detail">
    <table class="table-content">
      <tr>
        <th v-for="column in columns" :key="column.key">{{column.name}}</th>
      </tr>
      <tr v-for="item in frontend" :key="item">
        <template style="" v-if="item.failed.length !== 0" >
          <td class="td-left">
            <a v-bind:href="item.url" target="_blank" rel="noopener">{{item.name}}</a>
          </td>
          <td>
            <span v-for="item in item.failed" :key="item">
              <span class="badge high"> {{ item }} </span>
            </span>
          </td>
        </template>
      </tr>
    </table>
  </div>
</template>

<script>
import reposData from "../../public/frontend.json"
export default {
  name: 'Details',
  data() {
    return {
      frontend: reposData,
      columns: [
        {key: 'name', name: 'Repository name'},
        {key: 'failed', name: 'Failed rules', }
      ],
    }
  },
}

</script>

<style scoped lang="scss">
.square-detail {
  text-align: center;
  margin: 0% 16%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  background-color: var(--square-background-color);
  border-radius: 10px;
  height: 100%;
  border-top: 5px solid var(--failed-color);
}

.table-content {
  height: 40vh;
  overflow: auto;
}

table {
  color: white;
  text-align: left;
  padding: 5%;
  border-spacing: 0;
}

th{
  padding-bottom: 5%;
  width: 50%;
}

td {
  text-align: left;
  border-bottom: 1px solid var(--app-background);
}

.td-left {
 padding: 18px 0;
}

@media (max-width: 545px) {
  .square-detail {
    margin: 1%;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .badge {
    font-size: 15px;
  }

}

</style>
