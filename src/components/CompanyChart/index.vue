<template>
  <div class="flex justify-between gap-x-6 w-full">
    <div class="rounded-md shadow-md w-1/2">
      <highchart :options="accOps"></highchart>
    </div>
    <div class="rounded-md shadow-md w-1/2">
      <highchart :options="deltaOps"></highchart>
    </div>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";
import { onMounted } from "vue";
import axios from "axios";
import useOption from "../../views/useOption";
import { ref } from "vue";

export default {
  name: "CompanyChart",
  components: {
    highchart: Chart,
  },
  props: {
    deviceType: {
      type: String,
      require: true,
    },
    deviceID: {
      type: String,
      require: true,
    },
  },

  setup(props) {
    const baseURL = `https://nk-ld1.trai.xyz/api/devices/`;
    const { accumulateOption, deltaOption } = useOption();
    const accOps = ref(accumulateOption());
    const deltaOps = ref(deltaOption());
    const fetch = async () => {
      const data = await axios.get(`${baseURL}${props.deviceID}`);
      if (data) {
        let _data = data.data.sort((a, b) => a.timestamp - b.timestamp);
        _data.forEach((item) => {
          if (props.deviceType === "water") {
            accOps.value.series[0].data.push([
              item.timestamp,
              item.consumption,
            ]);
            accOps.value.title.text = "Water Total Comsumption";
            deltaOps.value.series[0].data.push([item.timestamp, item.delta]);
            deltaOps.value.title.text = "Water Delta";
          } else if (props.deviceType === "electric") {
            accOps.value.series[0].data.push([item.timestamp, item.tariff]);
            accOps.value.title.text = "Electric Total Comsumption";
            deltaOps.value.series[0].data.push([
              item.timestamp,
              item.tariffDelta,
            ]);
            deltaOps.value.title.text = "Electric Delta";
          }
        });
      }
    };

    onMounted(() => {
      fetch();
    });

    return {
      baseURL,
      accOps,
      deltaOps,
    };
  },
};
</script>
