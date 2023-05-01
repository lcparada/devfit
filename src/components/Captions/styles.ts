import styled from "styled-components/native";

type LegendColor = {
  color: string;
};

export const Legends = styled.View`
  flex-direction: row;
  column-gap: 5px;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 5px;
`;

export const LegendBox = styled.View<LegendColor>`
  width: 15px;
  height: 15px;
  background-color: ${(props) => props.color};
  align-items: center;
`;

export const TextLegend = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 12px;
`;
