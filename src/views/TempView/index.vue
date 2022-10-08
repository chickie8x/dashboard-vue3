<template>
  <div class="shadow-md">
    <highchart :options="tOps"></highchart>
  </div>
</template>

<script>
import { temp } from "../../components/Companies/temp";
import { Chart } from "highcharts-vue";
import useOption from "../../views/useOption";
import { ref } from "vue";

export default {
  name: "TempView",
  components: {
    highchart: Chart,
  },
  setup() {
    const { tOption } = useOption();
    const tOps = ref(tOption());
    let _data = temp.sort((a, b) => a.timestamp - b.timestamp);
    if (_data.length) {
      temp.forEach((item) => {
        tOps.value.series[0].data.push([item.timestamp, item.temp]);
      });
    }

    return {
      tOps,
    };
  },
};
</script>
