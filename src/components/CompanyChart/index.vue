<template>
  <div
    class="flex lg:flex-row flex-col justify-between lg:gap-x-6 gap-y-6 w-full"
  >
    <div class="rounded-md shadow-md lg:w-1/2 w-full">
      <highchart :options="accOps"></highchart>
    </div>
    <div class="rounded-md shadow-md lg:w-1/2 w-full">
      <highchart :options="deltaOps"></highchart>
    </div>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";
import useOption from "../../views/useOption";
import { ref } from "vue";

export default {
  name: "CompanyChart",
  components: {
    highchart: Chart,
  },

  props: {
    dataType: {
      type: Array,
      require: true,
    },
    devideType: {
      type: String,
      require: true,
    },
  },

  setup(props) {
    const { accumulateOption, deltaOption } = useOption();
    const accOps = ref(accumulateOption());
    const deltaOps = ref(deltaOption());
    // eslint-disable-next-line vue/no-setup-props-destructure
    const data = props.dataType;
    let _data = data.sort((a, b) => a.timestamp - b.timestamp);
    if (props.devideType === "water") {
      if (_data.length) {
        _data.forEach((item) => {
          accOps.value.series[0].data.push([item.timestamp, item.consumption]);
          accOps.value.title.text = "Consumption";
          deltaOps.value.series[0].data.push([item.timestamp, item.delta]);
        });
      }
    } else if (props.devideType === "electric") {
      if (_data.length) {
        _data.forEach((item) => {
          accOps.value.series[0].data.push([item.timestamp, item.tariff]);
          accOps.value.title.text = "Tariff";
          deltaOps.value.series[0].data.push([
            item.timestamp,
            item.tariffDelta,
          ]);
        });
      }
    }

    // const fetch = async () => {
    //   const data = await axios.get(`${baseURL}${props.deviceID}`);
    //   if (data) {
    //     let _data = data.data.sort((a, b) => a.timestamp - b.timestamp);
    //     _data.forEach((item) => {
    //       if (props.deviceType === "water") {
    //         accOps.value.series[0].data.push([
    //           item.timestamp,
    //           item.consumption,
    //         ]);
    //         accOps.value.title.text = "Water Total Comsumption";
    //         deltaOps.value.series[0].data.push([item.timestamp, item.delta]);
    //         deltaOps.value.title.text = "Water Delta";
    //       } else if (props.deviceType === "electric") {
    //         accOps.value.series[0].data.push([item.timestamp, item.tariff]);
    //         accOps.value.title.text = "Electric Total Comsumption";
    //         deltaOps.value.series[0].data.push([
    //           item.timestamp,
    //           item.tariffDelta,
    //         ]);
    //         deltaOps.value.title.text = "Electric Delta";
    //       }
    //     });
    //   }
    // };

    // onMounted(() => {
    //   fetch();
    // });

    return {
      accOps,
      deltaOps,
    };
  },
};
</script>
