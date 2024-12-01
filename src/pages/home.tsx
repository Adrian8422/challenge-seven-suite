import React, { useEffect, useState } from "react";
import EnergyItem from "../components/energyItem";
import { ErrorText, LoadingText, Title } from "../ui/texts";
import { getDataGenerationMix } from "../api/api";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { EnergyChart } from "../components/energyChart";
import { EnergyList, Container } from "./styled";

ChartJS.register(ArcElement, Tooltip, Legend);

const Home = () => {
  const [generationMix, setGenerationMix] = useState([]);
  const [error, setError] = useState<string | null>(null);

  const backgroundColors = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#4BC0C0",
    "#FF9F40",
    "#9966FF",
    "#66FF66",
    "#FF66FF",
    "#FF9966",
  ];

  const hoverColors = [
    "#FF4C70",
    "#2A89D1",
    "#F2D034",
    "#1CB0AC",
    "#FF7C2B",
    "#9B4CC1",
    "#68D968",
    "#FF55D6",
    "#FF7A4D",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDataGenerationMix();

        const mixWithColors = response.map((item, index) => ({
          ...item,
          backgroundColor: backgroundColors[index % backgroundColors.length],
          hoverBackgroundColor: hoverColors[index % hoverColors.length],
        }));

        setGenerationMix(mixWithColors);
      } catch (err) {
        setError("Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <Container>
        <ErrorText>{error}</ErrorText>
      </Container>
    );
  }

  if (!generationMix.length) {
    return (
      <Container>
        <LoadingText>Loading...</LoadingText>
      </Container>
    );
  }

  return (
    <Container>
      <Title>UK Energy Generation Mix</Title>
      <EnergyChart generationMix={generationMix} />
      <EnergyList>
        {generationMix.map((item) => (
          <EnergyItem
            key={item.fuel}
            fuel={item.fuel}
            perc={item.perc}
            borderColor={item.backgroundColor}
            hoverBorderColor={item.hoverBackgroundColor}
          />
        ))}
      </EnergyList>
    </Container>
  );
};

export { Home };
