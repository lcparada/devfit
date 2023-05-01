import { Button, TextButton } from "./styles";

import { useContext } from "react";

import { ProfileContext } from "../../contexts/informationProfile";

import { LevelModel } from "../../contexts/informationProfile";

import { useNavigation } from "@react-navigation/native";

type IProps = {
  option: string;
  level: LevelModel;
};

export default function ButtonLevel(props: IProps) {
  const { saveLevel } = useContext(ProfileContext);

  const navigation = useNavigation();

  function sendData() {
    saveLevel(props.level);
    navigation.navigate("OptionsTraining");
  }

  return (
    <Button onPress={sendData}>
      <TextButton>{props.option}</TextButton>
    </Button>
  );
}
