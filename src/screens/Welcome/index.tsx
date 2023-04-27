import { useNavigation } from "@react-navigation/native";
import {
  Body,
  Container,
  Header,
  TextHeader,
  Logo,
  Footer,
  Button,
  TextButton,
} from "./styles";

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <TextHeader>Bem vindo(a) ao DevFit</TextHeader>
      </Header>

      <Body>
        <Logo source={require("../../assets/logo.png")} />
      </Body>

      <Footer>
        <Button onPress={() => navigation.navigate("Name")}>
          <TextButton>Iniciar Configuração</TextButton>
        </Button>
      </Footer>
    </Container>
  );
}
