<template>
  <div class="h-full">
    <div class="company flex flex-col h-full">
      <div class="charts">
        <keep-alive>
          <companycharts
            :dataType="water"
            :devideType="'water'"
          ></companycharts>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import CompanyChart from "../../components/CompanyChart/index.vue";
import { water } from "../../components/Companies/water";

export default {
  name: "WaterView",
  components: {
    companycharts: CompanyChart,
  },
  setup() {
    return {
      water,
    };
  },
};
</script>
