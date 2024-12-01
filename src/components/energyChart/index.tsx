import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Container } from "./styled";

const EnergyChart = ({ generationMix }) => {
  const chartData = {
    labels: generationMix.map((item) => item.fuel),
    datasets: [
      {
        label: "Energy Mix",
        data: generationMix.map((item) => item.perc),
        backgroundColor: generationMix.map((item) => item.backgroundColor),
        hoverBackgroundColor: generationMix.map((item) => item.hoverBackgroundColor),
      },
    ],
  };

  return (
    <Container>
      <Doughnut data={chartData} />
    </Container>
  );
};

export { EnergyChart };
