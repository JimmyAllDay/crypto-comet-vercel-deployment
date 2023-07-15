import React from "react";

import Container from "react-bootstrap/Container";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  Filler,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  Filler,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChart(props) {
  const getPriceData = (dataArr) => {
    const prices = dataArr.map((price) => {
      return `${price[1]}`;
    });
    return prices;
  };

  const getLabelData = (dataArr) => {
    const dates = dataArr.map((date) => {
      const labels = new Date(date[0]).toDateString().split(" ").splice(1);
      const month = labels.shift();
      labels.splice(1, 0, month);
      return labels.join(" ");
    });
    return dates;
  };

  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
    },
  };

  const labels = getLabelData(props.favData && props.favData);

  const data = {
    labels,
    datasets: [
      {
        label: props.coinName,
        data: getPriceData(props.favData && props.favData),
        fill: true,
        color: "rgb(255, 99, 132)",
        borderColor: "rgb(102, 149, 238)",
        backgroundColor: "rgb(102, 149, 238, 0.2)",
        yAxisID: "y",
        pointRadius: 0,
        // fill: {
        //   target: "origin",
        //   above: "rgb(255, 0, 0)", // Area will be red above the origin
        //   below: "rgb(0, 0, 255)", // And blue below the origin
        // },
      },
    ],
  };

  return (
    <Container
      fluid
      className="border border-dark bg-light rounded-3 w-100 h-50 chart-wrapper p-2"
    >
      <Line className="chart" options={options} data={data} />
    </Container>
  );
}

export default LineChart;
