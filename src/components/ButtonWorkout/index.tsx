import { Button, ButtonBottom } from "./styles";

import { FontAwesome5 } from "@expo/vector-icons";

export default function ButtonWorkout() {
  return (
    <ButtonBottom>
      <Button>
        <FontAwesome5 name="dumbbell" size={24} color="white" />
      </Button>
    </ButtonBottom>
  );
}
