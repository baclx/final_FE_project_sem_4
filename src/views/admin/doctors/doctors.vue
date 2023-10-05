<template>
  <div class="p-4">
<!--    <div v-if="showEditModal" class="absolute inset-0 bg-black opacity-50 z-50"></div>-->
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table id="table" class="min-w-full text-left text-sm font-light text-white">
              <thead class="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" class="px-6 py-4">#</th>
                  <th scope="col" class="px-6 py-4">First</th>
                  <th scope="col" class="px-6 py-4">Last</th>
                  <th scope="col" class="px-6 py-4">Handle</th>
                  <th scope="col" class="px-6 py-4">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b dark:border-neutral-500">
                  <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                  <td class="whitespace-nowrap px-6 py-4">Mark</td>
                  <td class="whitespace-nowrap px-6 py-4">Otto</td>
                  <td class="whitespace-nowrap px-6 py-4">@mdo</td>
                </tr>
                <tr class="border-b dark:border-neutral-500">
                  <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                  <td class="whitespace-nowrap px-6 py-4">Jacob</td>
                  <td class="whitespace-nowrap px-6 py-4">Thornton</td>
                  <td class="whitespace-nowrap px-6 py-4">@fat</td>
                </tr>
                <tr class="border-b dark:border-neutral-500">
                  <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                  <td class="whitespace-nowrap px-6 py-4">Larry</td>
                  <td class="whitespace-nowrap px-6 py-4">Wild</td>
                  <td class="whitespace-nowrap px-6 py-4">@twitter</td>
                  <td class="px-4 py-2">
                    <div class="flex">
                      <a @click="openEditModal()" href="#" class="text-blue-500 hover:text-blue-700 px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm-2 0a1 1 0 10-2 0h2z" />
                        </svg>
                      </a>
                      <a @click="openDeleteModal()" href="#" class="text-red-500 hover:text-red-700 px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <EditModal v-if="showEditModal" @close="closeEditModal" />
    <DeleteModal v-if="showDeleteModal" @close="closeDeleteModal" />
  </div>
</template>

<script>
import EditModal from './modal/EditModal';
import DeleteModal from './modal/DelModal';

export default {
  components: {
    EditModal,
    DeleteModal,
  },
  data() {
    return {
      showEditModal: false,
      showDeleteModal: false,
    };
  },
  methods: {
    openEditModal() {
      this.showEditModal = true;
    },
    closeEditModal() {
      this.showEditModal = false;
    },
    openDeleteModal() {
      this.showDeleteModal = true;
    },
    closeDeleteModal() {
      this.showDeleteModal = false;
    },
  },
}

</script>
