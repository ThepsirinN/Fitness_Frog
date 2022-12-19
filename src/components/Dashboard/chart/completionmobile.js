// quickchart-js https://github.com/typpo/quickchart-js

import QuickChart from "quickchart-js";
const completionMobileChart = (total, success) => {
  const Percentage = (success / total) * 100;
  const Completionmobile = new QuickChart();

  Completionmobile.setWidth(50);
  Completionmobile.setHeight(50);
  Completionmobile.setVersion("2");
  Completionmobile.setBackgroundColor("transparent");

  Completionmobile.setConfig({
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
  return Completionmobile
};

export default completionMobileChart;
