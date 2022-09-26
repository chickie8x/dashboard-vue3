<template>
  <div class="bg-gray-100 h-full">
    <div class="company flex flex-col shadow-sm bg-white h-full">
      <span
        class="flex flex-col items-center justify-center text-2xl text-white bg-gray-500 h-20 shadow-sm"
        >{{ name.toUpperCase() }}
        <span class="text-base mt-2">Water metric</span>
      </span>
      <div class="charts mt-5">
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
  props: ["name"],
  setup(props) {
    const companies = IDS_MAP;
    const deviceID = companies[props.name].water;
    return {
      deviceID,
    };
  },
};
</script>
