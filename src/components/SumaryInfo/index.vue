<template>
  <div
    class="flex w-full flex-col md:flex-row justify-between bg-white shadow-md rounded-lg divide-x divide-slade-500"
  >
    <div class="flex flex-col items-center flex-1 py-4">
      <span class="text-slate-500">Temparature</span>
      <span class="text-2xl font-bold text-slate-700"
        >{{ temp.toFixed(2) }}°C</span
      >
    </div>

    <div class="flex flex-col items-center flex-1 py-4">
      <span class="text-slate-500">Humidity</span>
      <span class="text-2xl font-bold text-slate-700"
        >{{ humi.toFixed(2) }}%</span
      >
    </div>

    <div class="flex flex-col items-center flex-1 py-4">
      <span class="text-slate-500">Water</span>
      <span class="text-2xl font-bold text-slate-700"
        >{{ water.toLocaleString("en-US") }} <span>m<sup>3</sup></span></span
      >
    </div>

    <div class="flex flex-col items-center flex-1 py-4">
      <span class="text-slate-500">Electric</span>
      <span class="text-2xl font-bold text-slate-700"
        >{{ electric.toLocaleString("en-US") }} kW</span
      >
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  name: "SumaryInfo",
  setup() {
    const temp = ref(30);
    const humi = ref(80);
    const water = ref(7500000);
    const electric = ref(4300000);
    const changeValue = setInterval(() => {
      if (temp.value >= 31) {
        temp.value -= Math.random();
      } else {
        temp.value += Math.random();
      }

      if (humi.value >= 85) {
        humi.value -= Math.random();
      } else {
        humi.value += Math.random();
      }

      water.value += Number((Math.random() * 10).toFixed(0));

      electric.value += Number((Math.random() * 10).toFixed(0));
    }, 3000);

    onMounted(() => {
      changeValue;
    });
    return {
      temp,
      humi,
      water,
      electric,
    };
  },
};
</script>
