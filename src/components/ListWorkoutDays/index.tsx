import { Days, TextDays } from "./styles";

import { TouchableOpacity } from "react-native";

import { useState, useContext } from "react";

import { ProfileContext } from "../../contexts/informationProfile";
import { ConvertDayToDayInEnglish } from "../../helpers/helpers";

type IProps = {
  dayOfWeek: string;
};

export function ListWorkoutDays(props: IProps) {
  const { saveDaysTraining } = useContext(ProfileContext);

  const [color, setColor] = useState<string>("#d80042");

  function sendData(day: string) {
    setColor(saveDaysTraining(ConvertDayToDayInEnglish(day)));
  }

  return (
    <TouchableOpacity onPress={() => sendData(props.dayOfWeek)}>
      <Days backgroundColor={color}>
        <TextDays>{props.dayOfWeek}</TextDays>
      </Days>
    </TouchableOpacity>
  );
}
