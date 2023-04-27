import styled from "styled-components/native";

type Props = {
  backgroundColor: string;
};

export const Days = styled.View<Props>`
  width: 120px;
  height: 40px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
  margin-top: 15px;
`;

export const TextDays = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 14px;
  color: white;
`;
