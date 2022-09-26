<template>
  <div class="bg-gray-100 h-full">
    <div class="company flex flex-col shadow-sm bg-white m-4 p-4 h-full">
      <span>{{ companyName.toUpperCase() }}</span>
      <div class="charts">
        <keep-alive>
          <companycharts
            :deviceType="'water'"
            :deviceID="deviceID"
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
    const companyName = window.location.href
      .replace("http://", "")
      .split(".")[0]
      .toUpperCase();
    const deviceID = companies[companyName].water;
    return {
      companyName,
      deviceID,
    };
  },
};
</script>
