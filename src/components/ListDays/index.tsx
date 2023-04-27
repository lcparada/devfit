import { Days, TextDays } from "./styles";

import { TouchableOpacity } from "react-native";

import { useState, useContext } from "react";

import { ProfileContext } from "../../contexts/informationProfile";

type IProps = {
  dayOfWeek: string;
};

export function ListDays(props: IProps) {
  const { saveDaysTraining } = useContext(ProfileContext);

  const [color, setColor] = useState<string>("#d80042");

  function sendData(day: string) {
    setColor(saveDaysTraining(day));
  }

  return (
    <TouchableOpacity onPress={() => sendData(props.dayOfWeek)}>
      <Days backgroundColor={color}>
        <TextDays>{props.dayOfWeek}</TextDays>
      </Days>
    </TouchableOpacity>
  );
}
