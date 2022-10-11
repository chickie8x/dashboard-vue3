<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="w-full">
    <table class="min-w-full divide-y divide-gray-300 rounded-md">
      <thead class="bg-gray-50">
        <tr>
          <th class="w-[120px]">
            <div class="flex flex-row space-x-4 px-4 py-2">
              <select
                v-model="year"
                id="year"
                name="year"
                class="mt-1 block rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option v-for="k in Object.entries(tableInfo)" :key="k">
                  {{ k[0] }}
                </option>
              </select>
              <div class="flex flex-row items-center space-x-2">
                <BackButton @click="back" />
                <NextButton @click="next" />
              </div>
            </div>
          </th>
          <th
            v-for="k in tableInfo[year][quarter].col"
            :key="k"
            scope="col"
            class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
          >
            {{ k }}
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200 bg-white">
        <tr v-for="(cell, idx) in tableInfo[year][quarter].row" :key="idx">
          <td
            v-for="(item, idx) in cell"
            :key="idx"
            class="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6"
            :class="idx === 0 ? 'font-bold' : ''"
          >
            {{ item ? item.toLocaleString("en-US") : "" }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from "vue";
import { tableInfo } from "./info";
import BackButton from "../icons/BackButton.vue";
import NextButton from "../icons/NextButton.vue";
export default {
  name: "TableInfo",
  setup() {
    const year = ref(2020);
    const quarter = ref(1);
    const next = () => {
      if (quarter.value < 3) {
        quarter.value += 1;
      }
    };
    const back = () => {
      if (quarter.value > 1) {
        quarter.value -= 1;
      }
    };
    return {
      quarter,
      year,
      next,
      back,
      tableInfo,
    };
  },
  components: { BackButton, NextButton },
};
</script>
