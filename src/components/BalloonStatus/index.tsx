import {
  BalloonButton,
  BalloonButtonText,
  BalloonCounter,
  BalloonInformations,
  BalloonInformationsText,
  BalloonTriangle,
  Container,
} from "./styles";

import { useState, useContext, useEffect } from "react";

import { ProfileContext } from "../../contexts/informationProfile";

import moment from "moment";

import { addZeroToLeft } from "../../helpers/helpers";

type BallonStatusProps = {
  selectedDay: number;
  selectedMonth: number;
};

export default function BalloonStatus(props: BallonStatusProps) {
  const today = moment().subtract(3, "h");

  const { daysTraining } = useContext(ProfileContext);

  const [isRestDay, setIsRestDay] = useState<boolean>(false);

  const [titleBalloon, setTitleBalloon] = useState<string>("");

  const [showCounter, setShowCounter] = useState<boolean>(false);

  const [counter, setCounter] = useState<string>("");

  function restDay() {
    if (
      !daysTraining.includes(
        moment(
          `2023-${props.selectedMonth + 1}-${props.selectedDay + 2}`
        ).format("dddd")
      )
    ) {
      setIsRestDay(true);
      setShowCounter(false);
      setTitleBalloon("Dia de Descanso!");
    } else {
      setTitleBalloon("Treino perdido");
      setShowCounter(false);
      setIsRestDay(false);
    }
  }

  function trainedOrNot() {}

  function todayHaveWorkout() {
    if (
      daysTraining.includes(today.format("dddd")) &&
      props.selectedDay === Number(today.format("D")) - 1
    ) {
      setTitleBalloon("Dia de treino!🚀");
      setIsRestDay(false);
      setShowCounter(true);
      toggleCounter();
    } else {
      setShowCounter(false);
      setIsRestDay(true);
    }
  }

  function toggleCounter() {
    let today = moment();
    let finalToday = moment();
    finalToday.set("h", 23);
    finalToday.set("m", 59);
    finalToday.set("s", 59);

    let duration = moment.duration(finalToday.diff(today));

    let data = `${addZeroToLeft(
      Math.floor(duration.asHours())
    )}h ${addZeroToLeft(
      Math.floor(duration.asMinutes() % 60)
    )}m ${addZeroToLeft(Math.floor(duration.asSeconds() % 60))}s`;

    setCounter(data);
  }

  useEffect(() => {
    restDay();
    todayHaveWorkout();
  }, [props.selectedDay]);

  useEffect(() => {
    let timer = setInterval(toggleCounter, 1000);
    toggleCounter();
    return () => clearInterval(timer);
  }, []);

  return (
    <Container>
      <BalloonTriangle />
      <BalloonInformations>
        <BalloonInformationsText>{titleBalloon}</BalloonInformationsText>
        {showCounter ? <BalloonCounter>{counter}</BalloonCounter> : null}
        {isRestDay ? null : (
          <BalloonButton>
            <BalloonButtonText>
              {titleBalloon === "Treino perdido"
                ? "Marcar como feito!"
                : titleBalloon === "Dia de treino!🚀"
                ? "Treinar"
                : "Desmarcar"}
            </BalloonButtonText>
          </BalloonButton>
        )}
      </BalloonInformations>
    </Container>
  );
}
