import { ComponentChildren } from "preact";
import { Control } from "../controls";
import Button from "./Button";

type SectionProps = {
  id: string;
  children: ComponentChildren;
};

const Section = ({ id, children }: SectionProps) => {
  return <div id={id}>{children}</div>;
};

export default Section;
