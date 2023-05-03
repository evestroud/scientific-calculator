import { Grid } from "@chakra-ui/react";
import { Control } from "../controls";
import CalculatorButton from "./Button";
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
        <CalculatorButton
          control={button}
          keyHandler={keyHandler}
          second={second}
        />
      ))}{" "}
    </Section>
  ));

  return (
    <Grid
      templateAreas={`". edit ."
                      "left top right"
                      "left numbers right"`}
      templateColumns="1fr 2fr 1fr"
      justifyItems="stretch"
      gap="2"
    >
      {sections}
    </Grid>
  );
};

export default Controls;
