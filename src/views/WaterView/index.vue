<template>
  <div
    v-for="(company, idx) in Object.entries(companies)"
    :key="idx"
    class="bg-gray-100"
  >
    <div class="company flex flex-col shadow-sm bg-white m-4 p-4">
      <span>{{ company[0] }}</span>
      <div class="charts">
        <keep-alive>
          <companycharts
            :deviceType="water"
            :deviceID="company[1]['water']"
          ></companycharts>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import { IDS_MAP } from "../../components/Companies/index.js";
import CompanyChart from "../../components/CompanyChart/index.vue";

export default {
  name: "WaterView",
  components: {
    companycharts: CompanyChart,
  },

  setup() {
    const companies = IDS_MAP;
    return {
      companies,
    };
  },
};
</script>
