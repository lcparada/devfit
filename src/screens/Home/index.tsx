import { useEffect, useState } from "react";

import Captions from "../../components/Captions";

import { Body, Container, Header, TextCaption } from "./styles";

import moment from "moment";

import ListMonths from "../../components/ListMonths";

import ListDays from "../../components/ListDays";
import BalloonStatus from "../../components/BalloonStatus";

export default function Home() {
  const date = moment().subtract(3, "h");

  const [selectedMonth, setSelectedMonth] = useState<number>(moment().month());
  const [selectedDay, setSelectedDay] = useState<number>(
    Number(date.format("D")) - 1
  );

  return (
    <Container>
      <Header>
        <ListMonths
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />
        <ListDays
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />
      </Header>
      <BalloonStatus selectedDay={selectedDay} selectedMonth={selectedMonth} />

      <Body>
        <TextCaption>Legenda:</TextCaption>
        <Captions captionName="Hoje" captionColor="#2CBBBD" />
        <Captions captionName="Treino feito" captionColor="#45CB85" />
        <Captions captionName="Dia de treino" captionColor="#DB2B39" />
        <Captions captionName="Dia de descanso" captionColor="#DADADA" />
      </Body>
    </Container>
  );
}
