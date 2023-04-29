import { GridItem } from "@chakra-ui/react";
import { ComponentChildren } from "preact";
import { Control } from "../controls";
import CalculatorButton from "./Button";

type SectionProps = {
  id: string;
  children: ComponentChildren;
};

const Section = ({ id, children }: SectionProps) => {
  return <GridItem area={id}>{children}</GridItem>;
};

export default Section;
