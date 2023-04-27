import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  margin-top: 120px;
  align-items: center;
  justify-content: center;
`;

export const TextHeader = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 16px;
  align-items: center;
`;

export const TextHeaderBold = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 16px;
  color: #d80042;
  align-items: center;
`;

export const SubTextHeader = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 14px;
  align-items: center;
  margin-top: 20px;
`;

export const SubTextHeaderBold = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 14px;
  color: #d80042;
  align-items: center;
`;

export const Body = styled.View`
  margin-top: 10px;
`;

export const Footer = styled.View`
  margin-top: 20px;
  align-items: center;
`;

export const TextFooter = styled.Text`
  font-size: 14px;
  font-family: Lexend_400Regular;
`;

export const Button = styled.TouchableOpacity`
  width: 330px;
  height: 60px;
  border-radius: 30px;
  background-color: #d80042;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  font-family: Lexend_700Bold;
  color: white;
`;
