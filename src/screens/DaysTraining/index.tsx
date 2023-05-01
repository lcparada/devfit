import {
  Container,
  Header,
  TextHeader,
  TextHeaderBold,
  SubTextHeader,
  SubTextHeaderBold,
  Body,
  Footer,
  TextFooter,
  Button,
  TextButton,
} from "./styles";

import { FlatList, Alert } from "react-native";

import { daysWeek } from "../../helpers/helpers";

import { ListWorkoutDays } from "../../components/ListWorkoutDays";

import { useContext } from "react";

import { ProfileContext } from "../../contexts/informationProfile";

import { useNavigation } from "@react-navigation/native";

export default function DaysTraining() {
  const navigation = useNavigation();

  const { name, daysTraining } = useContext(ProfileContext);

  function toggleScreen() {
    if (daysTraining.length !== 0) {
      navigation.navigate("Level");
    } else {
      Alert.alert("ERRO", "Escolha pelo menos um dia!");
    }
  }

  return (
    <Container>
      <Header>
        <TextHeader>
          Opa, <TextHeaderBold>{name}</TextHeaderBold>, tudo bem ?
        </TextHeader>
        <SubTextHeader>
          Quais <SubTextHeaderBold>dias da semana</SubTextHeaderBold> você
          pretende treinar ?
        </SubTextHeader>
      </Header>

      <Body>
        <FlatList
          numColumns={3}
          data={daysWeek}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <ListWorkoutDays dayOfWeek={item} />}
        />
      </Body>

      <Footer>
        <TextFooter>Você pode alterar os dias a qualquer momento.</TextFooter>
        <Button onPress={toggleScreen}>
          <TextButton>Próximo</TextButton>
        </Button>
      </Footer>
    </Container>
  );
}
