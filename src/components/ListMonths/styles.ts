import styled from "styled-components/native";

type MonthButtonProps = {
  width: number;
};

type MonthItemProps = {
  backgroundColor: string;
};

export const Months = styled.ScrollView`
  width: 100%;
  height: 60px;
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 10px;
`;

export const MonthButton = styled.TouchableHighlight<MonthButtonProps>`
  width: ${(props) => props.width}px;
  height: 30px;
`;

export const MonthItem = styled.View<MonthItemProps>`
  width: 90%;
  height: 30px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 30px;
`;

export const MonthName = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 14px;
  color: white;
`;
