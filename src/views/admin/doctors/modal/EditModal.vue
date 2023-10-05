<template>
  <div class="fixed inset-0 flex items-center justify-center z-50">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 relative z-50" style="width: 600px">
      <div class="mb-4">
        <h2 class="text-2xl font-semibold text-gray-800 dark:text-white">Edit</h2>
      </div>
      <div>
        <div>
          <label for="itemName" class="block font-medium text-gray-700 dark:text-gray-300">Item Name:</label>
          <input
              type="text"
              id="itemName"
              v-model="editedItemName"
              class="w-full px-3 py-2 border rounded-lg mt-2 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
      <div class="mt-6 flex justify-end">
        <button @click="closeModal" class="mr-4 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Close</button>
        <button @click="saveChanges" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditModal",
  data() {
    return {
      editedItemName: '',
    };
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    saveChanges() {
    },
  },
}
</script>

<style scoped>

</style>
