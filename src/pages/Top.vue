<script lang="ts" setup>
import {ref} from 'vue'

const search = ref('')

const tableData = ref([
  {id: 1, name: 'John Doe', age: 30, riskLevel: '低'},
  {id: 2, name: 'Jane Doe', age: 25, riskLevel: '高'},
  {id: 3, name: 'Jim Smith', age: 35, riskLevel: '中'}
])

const tableColumns = [
  {name: 'name', label: '氏名', align: 'left', field: (row: { name: number; }) => row.name},
  {name: 'age', label: '年齢', align: 'left', field: (row: { age: number; }) => row.age},
  {name: 'riskLevel', label: 'リスクレベル', align: 'left', field: (row: { riskLevel: string; }) => row.riskLevel}
]

</script>

<template>
  <q-page>
    <div class="input-container">
      <q-input
          rounded
          outlined
          v-model="search"
          placeholder="Search here"
          class = "input-container__searchBar"
      >
        <template v-slot:append>
          <q-icon name="search"/>
        </template>
      </q-input>
    </div>
    <div class="q-pa-md">
      <q-table
          :rows="tableData"
          :columns="tableColumns"
          row-key="id"
      />
    </div>
  </q-page>
</template>

<style scoped lang="scss">
.input-container {
  display: flex;
  justify-content: center;

  &__searchBar {
    margin: 20px;
    width: 500px !important;
  }
}

</style>