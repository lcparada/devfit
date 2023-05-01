import moment from "moment";

export const daysWeek = [
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
  "Domingo",
];

export function TextForLengthArrayTraining(daysTraining: string[]) {
  switch (daysTraining.length) {
    case 1:
      return "Vai treinar 1 dia na semana só? Vamos melhorar isso!";
    case 2:
      return "2 Dias?? está bom, mas não tão bom.";
    case 3:
      return "3 Dias, que ótimo!!";
    case 4:
      return "4 dias?? já está quase igual um atleta";
    case 5:
      return "5 dias?? já é um atleta";
    case 6:
      return "6 dias? Vai competir quando no Mr.Olympia?";
    case 7:
      return "Eu duvido que vc treine 7 dias!";
    default:
      return null;
  }
}

export const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

export function calculateDaysInMonth(month: number): number[] {
  let days = [];
  let daysInMonth = moment(`2023-${month + 2}`).daysInMonth();
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }
  return days;
}

export function ConvertDayToDayInEnglish(day: string): string {
  if (day === "Domingo") {
    return "Sunday";
  }
  if (day === "Segunda") {
    return "Monday";
  }
  if (day === "Terça") {
    return "Tuesday";
  }
  if (day === "Quarta") {
    return "Wednesday";
  }
  if (day === "Quinta") {
    return "Thursday";
  }
  if (day === "Sexta") {
    return "Friday";
  } else {
    return "Saturday";
  }
}

export function addZeroToLeft(n: number): string {
  if (n < 10) {
    return "0" + n;
  } else {
    return n.toString();
  }
}
