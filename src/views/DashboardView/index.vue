<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex min-h-screen">
    <div class="sidebar bg-gray-800 p-4 w-64">
      <img
        class="h-8 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
        alt="Your Company"
      />
      <ul class="flex flex-col" v-for="(nav, idx) in navs" :key="idx">
        <li @click="activeItem = nav">{{ nav.name }}</li>
      </ul>
    </div>
    <div class="charts-container w-full p-4">
      <component :is="activeItem.components" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import ElectricViewVue from "../ElectricView/index.vue";
import WaterViewVue from "../WaterView/index.vue";
const navs = {
  water: {
    name: "Water",
    components: WaterViewVue,
  },
  electric: {
    name: "Electric",
    components: ElectricViewVue,
  },
};

export default {
  setup() {
    const activeItem = ref(navs.water);
    return {
      navs,
      activeItem,
    };
  },
};
</script>
