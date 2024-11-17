/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

export const HomeChart = ({ data, label, color }) => {
  const chartData = {
    labels: ["1m", "30s", "10s", "Hiện tại"],
    datasets: [
      {
        label: label,
        data: data,
        borderColor: color,
      },
    ],
  };
  return (
    <div className="w-1/3">
      <Line data={chartData} />
    </div>
  );
};
