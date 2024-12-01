import React from "react";
import { ItemContainer, FuelName, Percentage } from "./styled";

interface EnergyItemProps {
  fuel: string;
  perc: number;
  borderColor: string;
  hoverBorderColor: string;
}

const EnergyItem: React.FC<EnergyItemProps> = ({
  fuel,
  perc,
  borderColor,
  hoverBorderColor,
}) => {
  return (
    <ItemContainer borderColor={borderColor} hoverBorderColor={hoverBorderColor}>
      <FuelName>{fuel}</FuelName>
      <Percentage perc={perc}>{perc}%</Percentage>
    </ItemContainer>
  );
};

export default EnergyItem;
