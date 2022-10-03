<template>
  <div class="h-full mt-6">
    <div class="company flex flex-col h-full">
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
