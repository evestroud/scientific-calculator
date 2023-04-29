import { Button } from "@chakra-ui/react";
import { Control } from "../controls";

type ButtonProps = {
  control: Control;
  keyHandler: (value: string, symbol: string) => void;
  second: Boolean;
};

const CalculatorButton = ({ control, keyHandler, second }: ButtonProps) => {
  const id = control.value || control.label;
  const label = control.label;
  const buffer = control.buffer || "";
  const secondLabel = control.second || "";
  const secondValue = control.secondValue || control.second || id;
  const secondBuffer = control.secondBuffer || "";

  const clickHandler = () => {
    const value = second ? secondValue : id;
    const symbol = second ? secondBuffer : buffer;
    keyHandler(value, symbol);
  };

  return (
    <Button
      id={id}
      h="3rem"
      w="4rem"
      fontSize="1.5rem"
      fontWeight="400"
      onClick={clickHandler}
      _before={{
        content: `"${secondLabel}"`,
        top: "1",
        left: "1",
        fontSize: ".7rem",
        color: "blue",
        position: "absolute",
      }}
    >
      {label}
    </Button>
  );
};

export default CalculatorButton;
