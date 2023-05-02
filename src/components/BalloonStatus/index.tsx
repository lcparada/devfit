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
  const today = moment().subtract(new Date().getTimezoneOffset() / 60, "h");

  const { daysTraining } = useContext(ProfileContext);

  const [isRestDay, setIsRestDay] = useState<boolean>(false);

  const [showCounter, setShowCounter] = useState<boolean>(false);

  const [counter, setCounter] = useState<string>("");

  /// verificar se e dia de treino
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
    } else {
      setShowCounter(false);
      setIsRestDay(false);
    }
  }

  /// verificar se tem treino
  function todayHaveWorkout() {
    if (
      daysTraining.includes(today.format("dddd")) &&
      moment(
        `${moment().year()}-${props.selectedMonth + 1}-${props.selectedDay + 2}`
      ).format("DD-MM-YYYY") === today.format("DD-MM-YYYY")
    ) {
      setIsRestDay(false);
      setShowCounter(true);
      toggleCounter();
    } else {
      setShowCounter(false);
      setIsRestDay(true);
    }
  }

  /// contador
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
  }, [props.selectedDay, props.selectedMonth]);

  useEffect(() => {
    let timer = setInterval(toggleCounter, 1000);
    toggleCounter();
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    console.log(moment("2023-05-03").unix() >= today.unix());
    console.log(props.selectedDay);
  }, []);

  return (
    <Container>
      <BalloonTriangle />
      <BalloonInformations>
        <BalloonInformationsText>
          {daysTraining.includes(today.format("dddd")) &&
          moment(
            `2023-${props.selectedMonth + 1}-${props.selectedDay + 2}`
          ).format("DD/MM/YYYY") === today.format("DD/MM/YYYY")
            ? "Dia de treino!🚀"
            : moment(
                `2023-${props.selectedMonth + 1}-${props.selectedDay + 2}`
              ).format("DD/MM/YYYY") === today.format("DD/MM/YYYY")
            ? "Dia de descanso"
            : today.unix() <
              moment(
                `${moment().year()}-${props.selectedMonth + 1}-${
                  props.selectedDay + 1
                }`
              ).unix()
            ? "Dia futuro"
            : "Passado não interessa"}
        </BalloonInformationsText>
        {showCounter ? <BalloonCounter>{counter}</BalloonCounter> : null}
        {isRestDay ? null : (
          <BalloonButton>
            <BalloonButtonText>
              {daysTraining.includes(today.format("dddd")) &&
              props.selectedDay === Number(today.format("D")) - 1
                ? "Treinar"
                : "Marcar como feito!"}
            </BalloonButtonText>
          </BalloonButton>
        )}
      </BalloonInformations>
    </Container>
  );
}
