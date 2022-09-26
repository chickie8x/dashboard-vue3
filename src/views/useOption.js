import Highcharts from "highcharts";
import { format } from "date-fns";

export default () => {
  const defaultOption = () => ({
    chart: {
      zoomType: "x",
      backgroundColor: "#fff",
      borderRadius: 10,
      height: 500,
    },
    title: {
      text: "Total consumtion",
      style: {
        // color: "#fff",
      },
    },
    subtitle: {
      text: "",
      style: {
        // color: "#fff",
      },
    },
    legend: {
      enabled: false,
    },
    colors: ["rgb(217 70 239)"],
    xAxis: {
      type: "datetime",
      labels: {
        rotation: 0,
        style: {
          // color: "#fff",
        },
      },
    },
    tooltip: {
      formatter() {
        return this.points.reduce((s, point) => {
          return `${format(new Date(point.key), "EEE, MMM dd HH:ss aa")}<br/>
            <span style="color:${point.color}">\u25CF</span>
            ${Highcharts.numberFormat(point.y, 3, ".", ",")}`;
        }, `<b>${this.x}</b>`);
      },
      shared: true,
    },
    yAxis: {
      title: {
        text: "kWh",
        style: {
          // color: "#fff",
        },
      },
      gridLineColor: "transparent",
      labels: {
        rotation: 0,
        style: {
          // color: "#fff",
        },
      },
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [
              1,
              Highcharts.color(Highcharts.getOptions().colors[0])
                .setOpacity(0)
                .get("rgba"),
            ],
          ],
        },
        marker: {
          radius: 2,
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1,
          },
        },
        threshold: null,
      },
    },
  });

  const accumulateOption = (tab) => {
    return {
      ...defaultOption(tab),
      colors: ["rgb(14 165 233)"],
      series: [
        {
          name: "",
          data: [],
        },
      ],
    };
  };

  const deltaOption = () => {
    return {
      ...defaultOption(),
      title: {
        text: "Delta",
        style: {
          // color: "#fff",
        },
      },
      colors: ["rgb(217 70 239)"],
      series: [
        {
          type: "area",
          data: [],
        },
      ],
    };
  };

  const tOption = () => {
    return {
      ...defaultOption(),
      title: {
        text: "Tempature",
        style: {
          // color: "#fff",
        },
      },
      yAxis: {
        title: {
          text: "°C",
          style: {
            // color: "#fff",
          },
        },
        gridLineColor: "transparent",
        labels: {
          rotation: 0,
          style: {
            // color: "#fff",
          },
        },
      },
      colors: ["rgb(14 165 233)"],
      series: [
        {
          name: "",
          type: "area",
          data: [],
        },
      ],
    };
  };

  const hOption = () => {
    return {
      ...defaultOption(),
      title: {
        text: "Humidity",
        style: {
          color: "#fff",
        },
      },
      yAxis: {
        title: {
          text: "%",
          style: {
            color: "#fff",
          },
        },
        gridLineColor: "transparent",
        labels: {
          rotation: 0,
          style: {
            color: "#fff",
          },
        },
      },
      colors: ["rgb(14 165 233)"],
      series: [
        {
          name: "",
          type: "area",
          data: [],
        },
      ],
    };
  };

  return {
    tOption,
    hOption,
    deltaOption,
    accumulateOption,
  };
};
