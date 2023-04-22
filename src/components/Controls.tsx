import { Control } from "../controls";
import Button from "./Button";
import Section from "./Section";

type ControlsProps = {
  controls: { [section: string]: Control[] };
  keyHandler: (value: string, symbol: string) => void;
  second: Boolean;
};

const Controls = ({ controls, keyHandler, second }: ControlsProps) => {
  const sections = Object.keys(controls).map((section) => (
    <Section id={section}>
      {controls[section].map((button) => (
        <Button control={button} keyHandler={keyHandler} second={second} />
      ))}{" "}
    </Section>
  ));

  return <div id="controls">{sections}</div>;
};

export default Controls;
