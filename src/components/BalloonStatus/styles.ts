import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const BalloonTriangle = styled.View`
  width: 20px;
  height: 20px;
  margin-right: 15px;
  border-left-color: transparent;
  border-left-width: 15px;
  border-bottom-width: 15px;
  border-bottom-color: #c1c1c1;
  border-right-width: 15px;
  border-right-color: transparent;
  margin-top: 2px;
`;

export const BalloonInformations = styled.View`
  width: 300px;
  height: 100px;
  background-color: #c1c1c1;
  border-radius: 10px;
  margin-right: 15px;
  align-items: center;
  justify-content: center;
`;

export const BalloonInformationsText = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 14px;
  color: black;
`;

export const BalloonButton = styled.TouchableOpacity`
  width: 200px;
  height: 25px;
  border-radius: 20px;
  background-color: #d80042;
  align-items: center;
  justify-content: center;
`;

export const BalloonButtonText = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 14px;
  color: white;
`;

export const BalloonCounter = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 14px;
  color: black;
`;
