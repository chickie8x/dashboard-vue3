<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex min-h-screen">
    <div class="sidebar bg-gray-800 w-64 px-1">
      <div class="h-20 flex items-center border-b-2 mb-1 px-2 space-x-2">
        <img class="h-8 w-auto" :src="companyLogo" alt="Your Company" />
        <span class="text-white">{{ companyName }}</span>
      </div>

      <ul class="flex flex-col" v-for="(nav, idx) in navs" :key="idx">
        <li
          @click="setActive(nav)"
          class="text-gray-200 p-2 rounded-md"
          :class="nav.isActive ? 'bg-gray-600' : ''"
        >
          {{ nav.name }}
        </li>
      </ul>
    </div>
    <div class="charts-container w-full">
      <keep-alive>
        <component :is="activeItem.components" :name="companyName" />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import ElectricViewVue from "../ElectricView/index.vue";
import WaterViewVue from "../WaterView/index.vue";
import { COMPANY_RESOURCES } from "../../components/Companies/index.js";
const navs = {
  water: {
    name: "Water",
    components: WaterViewVue,
    isActive: true,
  },
  electric: {
    name: "Electric",
    components: ElectricViewVue,
    isActive: false,
  },
};

export default {
  name: "DashboardView",
  setup() {
    const activeItem = ref(navs.water);
    const setActive = (item) => {
      Object.keys(navs).map((ele) => {
        navs[ele].isActive = false;
      });
      item.isActive = true;
      activeItem.value = item;
    };

    const companyName = window.location.href
      .replace("http://", "")
      .split(".")[0]
      .toUpperCase();

    const companyLogo = COMPANY_RESOURCES[companyName].logo;

    return {
      navs,
      activeItem,
      setActive,
      companyName,
      companyLogo,
    };
  },
};
</script>
