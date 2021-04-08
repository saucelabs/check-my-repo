<template>
  <div class="square-detail">
    <table class="table-content">
      <tr>
        <th v-for="column in columns" :key="column.key">{{column.name}}</th>
      </tr>
      <tr v-for="item in frontend" :key="item">
        <template style="" v-if="item.failed.length !== 0" >
          <td class="td-left">
            <a v-bind:href="item.url">{{item.name}}</a>
          </td>
          <td>{{item.failed.join(', ')}}</td>
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
  background-color: #2E3137;
  border-radius: 10px;
  height: 50vh;
  overflow:scroll;
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

.table-content {
  height: 40vh;
  overflow: auto;
}

a {
  font-size: 1.1em;
  color: white;
  text-decoration: none;

  &:hover{
   color: #6ED6FF;
   font-weight: 500;
  }

  &:visited{
   color: #6ED6FF;
  }
}

table {
  color: white;
  padding: 5%;
  text-align: left;
  border-spacing: 0ch;
}

th{
  padding-bottom: 5%;
}

td {
  // white-space: pre;
  border-bottom: 0.5px solid lightgrey;
  text-align: left;
}

.td-left {
 padding: 18px 0;
}

</style>
