import { MonthButton, MonthItem, MonthName, Months } from "./styles";

import { months } from "../../helpers/helpers";

import { Dimensions } from "react-native";

import { useState, useEffect, useRef } from "react";

import { ScrollView } from "react-native";

type ListMonthsProps = {
  selectedMonth: number;
  setSelectedMonth: (number: number) => void;
};

export default function ListMonths(props: ListMonthsProps) {
  const [thirdScreen, setThirdScreen] = useState<number>(
    Math.round(Dimensions.get("window").width / 3)
  );

  const monthsRef = useRef<ScrollView>(null);

  function scrollToCurrentMonth() {
    monthsRef.current?.scrollTo({
      y: 0,
      x: props.selectedMonth * thirdScreen,
      animated: true,
    });
  }

  useEffect(() => {
    setTimeout(() => {
      scrollToCurrentMonth();
    }, 10);
  }, [props.selectedMonth]);

  return (
    <Months
      ref={monthsRef}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      decelerationRate={"fast"}
      contentContainerStyle={{
        paddingRight: thirdScreen,
        paddingLeft: thirdScreen,
      }}
      snapToInterval={thirdScreen}
      onMomentumScrollEnd={(event) =>
        props.setSelectedMonth(
          Math.round(event.nativeEvent.contentOffset.x / thirdScreen)
        )
      }
    >
      {months.map((month, key) => (
        <MonthButton
          width={thirdScreen}
          key={key}
          onPress={() => props.setSelectedMonth(key)}
          underlayColor="transparent"
        >
          <MonthItem
            backgroundColor={key === props.selectedMonth ? "green" : "#d80042"}
          >
            <MonthName>{month}</MonthName>
          </MonthItem>
        </MonthButton>
      ))}
    </Months>
  );
}
