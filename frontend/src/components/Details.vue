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
  text-align:justify;
}

a {
  font-weight: 500;
  color: #6ED6FF;

  &:visited{
   color: #FFF503;
  }
.separating-line {
    border-top: 3px #F00 dashed;
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
  white-space: pre;
  // border: solid;
  // border-width: 0.1px 0;
  // border-color: #bfc2c6;

  &:first-child {
    border-top: none;
  }
  &:last-child {
    border-bottom: none;
  }
}

.td-left {
 padding-right: 5%
}

</style>
