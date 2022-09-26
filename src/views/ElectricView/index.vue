<template>
  <div class="bg-gray-100 h-full">
    <div class="company flex flex-col shadow-sm bg-white h-full">
      <span
        class="flex flex-col items-center justify-center text-2xl h-20 shadow-lg"
        >{{ name.toUpperCase() }}
        <span class="text-base mt-2">Electric metric</span>
      </span>
      <div class="charts">
        <keep-alive>
          <companycharts
            :deviceType="'electric'"
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
  name: "ElectricView",
  components: {
    companycharts: CompanyChart,
  },
  props: ["name"],

  setup(props) {
    const companies = IDS_MAP;
    const deviceID = companies[props.name].electric;
    return {
      deviceID,
    };
  },
};
</script>
