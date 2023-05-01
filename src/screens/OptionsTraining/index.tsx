import { useContext, useEffect } from "react";

import { useNavigation } from "@react-navigation/native";

import {
  Body,
  Button,
  Container,
  Footer,
  Header,
  SelectTrainingText,
  TextButton,
  TextHeader,
} from "./styles";

import { ProfileContext } from "../../contexts/informationProfile";

import WorkoutBeginner from "../../components/Workouts";

export default function OptionsTraining() {
  const { level, typeTraining } = useContext(ProfileContext);

  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <TextHeader>
          Opções de treino pré-criados de acordo com o nível escolhido.
        </TextHeader>
      </Header>

      <Body>
        <SelectTrainingText>
          Você escolheu {typeTraining.length} treinos
        </SelectTrainingText>
        <WorkoutBeginner nameWorkout={`Treino ${level} A`} />
        <WorkoutBeginner nameWorkout={`Treino ${level} B`} />
        <WorkoutBeginner nameWorkout={`Treino ${level} C`} />
      </Body>

      <Footer>
        <Button onPress={() => navigation.navigate("AppRoutes")}>
          <TextButton>Concluir</TextButton>
        </Button>
      </Footer>
    </Container>
  );
}
