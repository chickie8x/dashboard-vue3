<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <table class="min-w-full divide-y divide-gray-300">
      <thead class="bg-gray-50">
        <tr>
          <th
            v-for="(col, idx) in tableCol"
            :key="idx"
            scope="col"
            class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
            :class="idx === 0 ? '!text-white bg-slate-700 uppercase ' : ''"
          >
            {{ col }}
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200 bg-white">
        <tr v-for="(cell, idx) in tableRow" :key="idx">
          <td
            v-for="(item, idx) in cell"
            :key="idx"
            class="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6"
            :class="idx === 0 ? 'font-bold' : ''"
          >
            {{ item }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { tableCol, tableRow } from "./info";
export default {
  name: "TableInfo",

  setup() {
    return {
      tableCol,
      tableRow,
    };
  },
};
</script>
