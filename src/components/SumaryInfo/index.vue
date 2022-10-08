<template>
  <div
    class="flex w-full flex-row justify-between bg-white shadow-md rounded-lg divide-x divide-slade-500"
  >
    <div
      v-for="(item, idx) in info"
      :key="idx"
      class="flex flex-col items-center flex-1 py-4"
    >
      <span class="text-2xl font-bold text-slate-700">{{ item.value }}</span>
      <span class="text-slate-500">{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
import { info } from "./info";

export default {
  name: "SumaryInfo",
  setup() {
    return {
      info,
    };
  },
};
</script>
