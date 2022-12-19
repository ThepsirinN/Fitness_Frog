// quickchart-js https://github.com/typpo/quickchart-js

import QuickChart from "quickchart-js";
const DaysChart = (total, dayspent) => {
  const Days = new QuickChart();
  const Percentage = (dayspent / total ) * 100;

  Days.setWidth(100);
  Days.setHeight(100);
  Days.setVersion("2");
  Days.setBackgroundColor("transparent");

  Days.setConfig({
    type: "radialGauge",
    data: {
      datasets: [
        {
          data: [Percentage],
          backgroundColor: QuickChart.getGradientFillHelper("vertical", [
            "#0000FF",
            "#25EAE7",
            "purple",
          ]),
        },
      ],
    },

    options: {
      // See https://github.com/pandameister/chartjs-chart-radial-gauge#options
      domain: [0, 100],
      trackColor: "#ccddee",
      centerPercentage: 75,
      centerArea: {
        text: (val) => val + "%",
      },
    },
  });
  return Days
};
export default DaysChart;
