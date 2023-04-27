import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  margin-top: 80px;
  align-items: center;
  justify-content: center;
`;

export const TextHeader = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 22px;
`;

export const Body = styled.View`
  flex: 1;
  margin-top: 60px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export const Logo = styled.Image`
  width: 300px;
  height: 250px;
`;

export const Footer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;

export const Button = styled.TouchableOpacity`
  width: 330px;
  height: 50px;
  background-color: #d80042;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-family: Lexend_700Bold;
  color: white;
  font-size: 16px;
`;
