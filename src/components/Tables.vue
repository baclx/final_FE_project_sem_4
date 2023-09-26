<template>
  <div>
    <v-tables-3 :data="tableData" :options="tableOptions"></v-tables-3>
  </div>
</template>

<script>
import VTables3 from 'v-tables-3';

export default {
  components: {
    VTables3,
  },
  data() {
    return {
      tableData: [
        { id: 1, name: 'John Doe', age: 25 },
        { id: 2, name: 'Jane Smith', age: 30 },
        { id: 3, name: 'Bob Johnson', age: 35 },
      ],
      tableOptions: {
        columns: [
          { field: 'id', label: 'ID' },
          { field: 'name', label: 'Name' },
          { field: 'age', label: 'Age' },
        ],
      },
    };
  },
};
</script>
