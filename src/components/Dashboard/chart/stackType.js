import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

const stackedDesktopChart = (sportData) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    indexAxis: "y",
    plugins: {
      title: {
        display: true,
        text: "Total Sport in Activity Card",
        color: "#fff",
        font:{size: 20},
      },
      legend: {
        labels: {
          font: {
            size: 16,
          },
          color:"#fff"
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        begeiAtZero: true,
        ticks: {
          display: false,
        },
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const labels = [""];

  const data = {
    labels,
    datasets: [
      {
        label: "SWIMMING",
        data: [sportData[0]],
        backgroundColor: "rgb(37, 234, 231)",
      },
      {
        label: "WALKING",
        data: [sportData[1]],
        backgroundColor: "rgb(152, 255, 152)",
      },
      {
        label: "HIKING",
        data: [sportData[2]],
        backgroundColor: "rgb(238, 242, 33)",
      },
      {
        label: "CYCLING",
        data: [sportData[3]],
        backgroundColor: "rgb(255, 140, 1)",
      },
      {
        label: "RUNNING",
        data: [sportData[4]],
        backgroundColor: "rgb(255, 0, 0)",
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

export default stackedDesktopChart;
