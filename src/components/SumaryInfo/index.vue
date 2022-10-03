<template>
  <div class="flex w-full space-x-24 bg-white shadow-md">
    <div class="flex items-center px-4 font-bold text-white bg-slate-700 py-4">
      Sumary Infomation
    </div>
    <div
      v-for="(item, idx) in info"
      :key="idx"
      class="flex flex-col items-center"
    >
      <span>{{ item.value }}</span>
      <span class="font-bold text-slate-700">{{ item.name }}</span>
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
