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
