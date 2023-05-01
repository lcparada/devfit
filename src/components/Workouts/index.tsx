import { TouchableOpacity, View } from "react-native";

import { Card, Image, Images, TextCard } from "./styles";

import { useState, useContext, useEffect } from "react";

import { ProfileContext } from "../../contexts/informationProfile";

import { Feather } from "@expo/vector-icons";

type IProps = {
  nameWorkout: string;
};

export default function WorkoutBeginner(props: IProps) {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const { saveTypeTraining, removeTypeTraining } = useContext(ProfileContext);

  function sendTypeTraining() {
    if (!isSelected) {
      saveTypeTraining(props.nameWorkout);
      setIsSelected(!isSelected);
    } else {
      removeTypeTraining(props.nameWorkout);
      setIsSelected(!isSelected);
    }
  }

  return (
    <Card>
      <View>
        <TextCard>{props.nameWorkout}</TextCard>
        <Images>
          <Image source={require("../../assets/Workout/abdomen.png")} />
          <Image source={require("../../assets/Workout/musculo.png")} />
        </Images>
      </View>
      <TouchableOpacity onPress={sendTypeTraining}>
        {!isSelected ? (
          <Feather name="plus" size={30} color="white" />
        ) : (
          <Feather name="check" size={30} color="white" />
        )}
      </TouchableOpacity>
    </Card>
  );
}
