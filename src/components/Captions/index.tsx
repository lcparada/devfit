import { LegendBox, Legends, TextLegend } from "./styles";

type IProps = {
  captionName: string;
  captionColor: string;
};

export default function Captions(props: IProps) {
  return (
    <Legends>
      <LegendBox color={props.captionColor} />
      <TextLegend>{props.captionName}</TextLegend>
    </Legends>
  );
}
