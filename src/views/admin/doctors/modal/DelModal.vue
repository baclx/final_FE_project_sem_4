<template>
  <div class="fixed inset-0 flex items-center justify-center z-50">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-md">
      <div class="mb-4">
        <h2 class="text-xl font-semibold text-gray-800 dark:text-white">Delete Item</h2>
      </div>
      <div>
        <!-- Confirmation message -->
        <p class="text-gray-700 dark:text-gray-300">Are you sure you want to delete this item?</p>
      </div>
      <div class="mt-6 flex justify-end">
        <button @click="closeModal" class="mr-4 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Cancel</button>
        <button @click="deleteItem" class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DelModal",
  methods: {
    closeModal() {
      this.$emit('close');
    },
    deleteItem() {
    },
  },
}
</script>

<style scoped>

</style>
