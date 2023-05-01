import styled from "styled-components/native";

type DaysButtonProps = {
  width: number;
};

type DaysItemProps = {
  backgroundColor: string;
};

export const Container = styled.View`
  width: 100%;
  height: 40px;
  row-gap: 100px;
`;

export const DaysScroll = styled.ScrollView`
  width: 100%;
  height: 30px;
`;

export const DaysButton = styled.TouchableHighlight<DaysButtonProps>`
  width: ${(props) => props.width}px;
  height: 60px;
`;

export const DaysItem = styled.View<DaysItemProps>`
  width: 70%;
  height: 30px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;

export const DaysText = styled.Text`
  font-family: Lexend_400Regular;
  color: white;
`;
