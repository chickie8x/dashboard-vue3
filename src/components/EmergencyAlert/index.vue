<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="flex flex-row justify-between items-center bg-[#fdf2f0] p-6 overflow-auto shadow-md rounded-md"
  >
    <div class="flex flex-col pr-12">
      <span class="text-red-600 font-bold text-xl"
        >Important Security Update</span
      >
      <span class="text-red-600 mt-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s. <a href="#" class="ml-2 font-bold">Learn more</a>
      </span>
    </div>
    <div>
      <button
        class="bg-red-500 text-white px-4 py-2 rounded-lg font-bold min-w-[150px]"
      >
        Go to solution
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmergencyAlert",
  setup() {
    return {};
  },
};
</script>
