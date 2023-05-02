import {
  DaysButton,
  DaysItem,
  DaysScroll,
  DaysText,
  Container,
} from "./styles";

import { useState, useEffect, useRef, useContext } from "react";

import { calculateDaysInMonth } from "../../helpers/helpers";

import { Dimensions, ScrollView } from "react-native";

import moment from "moment";

import { ProfileContext } from "../../contexts/informationProfile";

type ListDaysProps = {
  selectedMonth: number;
  setSelectedMonth: (number: number) => void;
  selectedDay: number;
  setSelectedDay: (number: number) => void;
};

export default function ListDays(props: ListDaysProps) {
  const today = moment().subtract(3, "h");

  const dayRef = useRef<ScrollView>(null);

  const { daysTraining } = useContext(ProfileContext);

  const [days, setDays] = useState<number[]>(
    calculateDaysInMonth(props.selectedMonth)
  );
  const [ninthScreen, setNinthScreen] = useState<number>(
    Math.round(Dimensions.get("window").width / 9)
  );
  const [offSetW, setOffSetW] = useState<number>(
    Math.round(Math.round(Dimensions.get("window").width - ninthScreen) / 2)
  );

  function scrollToDay(selectedDay: number) {
    dayRef.current?.scrollTo({
      y: 0,
      x: selectedDay * ninthScreen,
      animated: true,
    });
  }

  useEffect(() => {
    setDays(calculateDaysInMonth(props.selectedMonth));
  }, [props.selectedMonth]);

  useEffect(() => {
    if (props.selectedMonth === moment().month()) {
      props.setSelectedDay(Number(today.format("D")) - 1);
      scrollToDay(props.selectedDay);
    } else {
      props.setSelectedDay(0);
      scrollToDay(0);
    }
  }, [props.selectedMonth]);

  useEffect(() => {
    scrollToDay(props.selectedDay);
  }, [props.selectedDay]);

  return (
    <Container>
      <DaysScroll
        ref={dayRef}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        decelerationRate={"fast"}
        snapToInterval={ninthScreen}
        contentContainerStyle={{
          paddingRight: offSetW,
          paddingLeft: offSetW,
        }}
      >
        {days.map((day, key) => (
          <DaysButton
            key={key}
            width={ninthScreen}
            onPress={() => props.setSelectedDay(key)}
            underlayColor={"transparent"}
          >
            <DaysItem
              backgroundColor={
                moment(`2023-${props.selectedMonth + 1}-${day + 1}`).format(
                  "DD/MM/YYYY"
                ) === today.format("DD/MM/YYYY")
                  ? "#2CBBBD"
                  : today.unix() >=
                    moment(
                      `${moment().year()}-${props.selectedMonth + 1}-${day + 1}`
                    ).unix()
                  ? "#959595"
                  : daysTraining.includes(
                      moment(
                        `2023-${props.selectedMonth + 1}-${day + 1}`
                      ).format("dddd")
                    )
                  ? "#DB2B39"
                  : "#DADADA"
              }
            >
              <DaysText>{day}</DaysText>
            </DaysItem>
          </DaysButton>
        ))}
      </DaysScroll>
    </Container>
  );
}
