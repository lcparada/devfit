import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  margin-top: 120px;
  padding-left: 30px;
  padding-right: 30px;
`;

export const TextHeader = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 16px;
`;

export const Body = styled.View`
  margin-top: 30px;
  align-items: center;
`;

export const SelectTrainingText = styled.Text`
  font-size: 16px;
  font-family: Lexend_400Regular;
`;

export const Footer = styled.View`
  margin-top: 50px;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width: 330px;
  height: 60px;
  background-color: #d80042;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;

export const TextButton = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 16px;
  color: white;
`;
