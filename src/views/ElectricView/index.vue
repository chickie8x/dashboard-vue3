<template>
  <div class="h-full">
    <div class="company flex flex-col h-full">
      <div class="charts">
        <keep-alive>
          <companycharts
            :dataType="electric"
            :devideType="'electric'"
          ></companycharts>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import CompanyChart from "../../components/CompanyChart/index.vue";
import { electric } from "../../components/Companies/electric";

export default {
  name: "ElectricView",
  components: {
    companycharts: CompanyChart,
  },

  setup() {
    return {
      electric,
    };
  },
};
</script>
