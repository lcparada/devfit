import { Button, TextButton } from "./styles";

import { useContext } from "react";

import { ProfileContext } from "../../contexts/informationProfile";

import { LevelModel } from "../../contexts/informationProfile";

type IProps = {
  option: string;
  level: LevelModel;
};

export default function ButtonLevel(props: IProps) {
  const { saveLevel } = useContext(ProfileContext);

  function sendData() {
    saveLevel(props.level);
  }

  return (
    <Button onPress={sendData}>
      <TextButton>{props.option}</TextButton>
    </Button>
  );
}
