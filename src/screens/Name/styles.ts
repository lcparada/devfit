import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const TextYourName = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 18px;
  align-self: center;
  margin-top: 100px;
`;

export const InputYourName = styled.TextInput`
  width: 330px;
  height: 50px;
  border-radius: 10px;
  border-color: #d80042;
  border-width: 1px;
  align-self: center;
  font-family: Lexend_400Regular;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 40px;
`;

export const Button = styled.TouchableOpacity`
  width: 330px;
  height: 60px;
  border-radius: 30px;
  background-color: #d80042;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`;

export const TextButton = styled.Text`
  font-family: Lexend_700Bold;
  color: white;
  font-size: 16px;
`;
