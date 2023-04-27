import { Body, Container, Header, TextHeader, YourLevel } from "./styles";

import ButtonLevel from "../../components/ButtonLevel";

import { TextForLengthArrayTraining } from "../../helpers/helpers";
import { useContext } from "react";
import { ProfileContext } from "../../contexts/informationProfile";

export default function Level() {
  const { daysTraining } = useContext(ProfileContext);

  return (
    <Container>
      <Header>
        <TextHeader>{TextForLengthArrayTraining(daysTraining)}</TextHeader>
      </Header>
      <Body>
        <YourLevel>Qual seu nível hoje?</YourLevel>
        <ButtonLevel option="Iniciante/ Um frango" level="iniciante" />
        <ButtonLevel
          option="Intermediário/ Me viro bem"
          level="intermediário"
        />
        <ButtonLevel option="Avançado/ Primo do The Rock" level="avançado" />
      </Body>
    </Container>
  );
}
