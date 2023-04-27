import {
  Container,
  InputYourName,
  TextYourName,
  Button,
  TextButton,
} from "./styles";

import { useState, useContext } from "react";

import { useNavigation } from "@react-navigation/native";

import { Alert } from "react-native";

import { ProfileContext } from "../../contexts/informationProfile";

export default function Name() {
  const navigation = useNavigation();

  const { saveName } = useContext(ProfileContext);

  const [name, setName] = useState<string>("");

  function sendData() {
    if (name === "") {
      Alert.alert("ERRO", "O nome não pode estar vazio!");
    } else {
      saveName(name);
      navigation.navigate("DaysTraining");
    }
  }

  return (
    <Container>
      <TextYourName>Qual é seu nome?</TextYourName>
      <InputYourName
        placeholder="Digite seu nome aqui!"
        value={name}
        onChangeText={setName}
      ></InputYourName>
      <Button onPress={sendData}>
        <TextButton>Próximo</TextButton>
      </Button>
    </Container>
  );
}
