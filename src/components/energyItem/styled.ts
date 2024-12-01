import styled from "styled-components";

export const ItemContainer = styled.div<{
    borderColor: string;
    hoverBorderColor: string;
  }>`
    background-color: #fff; 
    border: 1px solid ${(props) => props.borderColor};
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      border-color: ${(props) => props.hoverBorderColor};
    }
  `;

export const FuelName = styled.h3`
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 10px;
`;

export const Percentage = styled.span<{ perc: number }>`
  font-size: 14px;
  color: ${(props) => (props.perc > 10 ? "#2ecc71" : "#e74c3c")};
`;
