<template>
  <div class="shadow-md">
    <highchart :options="hOps"></highchart>
  </div>
</template>

<script>
import { humi } from "../../components/Companies/humi";
import { Chart } from "highcharts-vue";
import useOption from "../../views/useOption";
import { ref } from "vue";

export default {
  name: "HumiView",
  components: {
    highchart: Chart,
  },
  setup() {
    const { hOption } = useOption();
    const hOps = ref(hOption());
    let _data = humi.sort((a, b) => a.timestamp - b.timestamp);
    if (_data.length) {
      humi.forEach((item) => {
        hOps.value.series[0].data.push([item.timestamp, item.humi]);
      });
    }

    return {
      hOps,
    };
  },
};
</script>
