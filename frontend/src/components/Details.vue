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
          <td v-for="item in item.failed" :key="item">
            <spam v-if="item.includes('Changelog')" class="badge low"> Changelog </spam>
            <spam v-if="item.includes('License')" class="badge high"> License </spam>
            <spam v-if="item.includes('Test directory')" class="badge medium"> Tests </spam>
            <spam v-if="item.includes('Maintainers email')" class="badge medium"> Ownership </spam>
            <spam v-if="item.includes('Do not have binaries files')" class="badge high"> Security </spam>
            <spam v-if="item.includes('Code of conduct')" class="badge low"> Code of Conduct </spam>
            <spam v-if="item.includes('Contributor guidelines')" class="badge low"> Contributor </spam>
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
  background-color: #2E3137;
  border-radius: 10px;
  height: 100%;
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

.badge {
  border: none;
  padding: 5px;
  border-radius: 8px;
  box-shadow: 2px 2px 10px var(--shadow);
  text-align: center;
  overflow: hidden;
  text-decoration: none;
  background: var(--app-background);
  color: white;
}

.low {
  background-color: var(--app-background);
}

.medium {
  background-color: var(--primary-color);
  color: var(--square-background-color);
}

.high {
  background-color: var(--failed-color);
}


</style>
