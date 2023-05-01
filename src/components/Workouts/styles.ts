import styled from "styled-components/native";

export const Card = styled.View`
  width: 330px;
  height: 100px;
  align-self: center;
  background-color: #d80042;
  border-radius: 10px;
  padding-left: 20px;
  padding-top: 10px;
  padding-right: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

export const TextCard = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 16px;
  color: white;
`;

export const Images = styled.View`
  flex-direction: row;
  column-gap: 10px;
`;

export const Image = styled.Image`
  width: 40px;
  height: 40px;
  margin-top: 10px;
`;
