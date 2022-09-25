<template>
  <div class="flex justify-center">
    <keep-alive>
      <highchart :options="accOps"></highchart>
    </keep-alive>
    <keep-alive>
      <highchart :options="deltaOps"></highchart>
    </keep-alive>
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
          accOps.value.series[0].data.push([item.timestamp, item.consumption]);
          deltaOps.value.series[0].data.push([item.timestamp, item.delta]);
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
