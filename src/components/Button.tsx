import { Control } from "../controls";

type ButtonProps = {
  control: Control;
  keyHandler: (value: string, symbol: string) => void;
  second: Boolean;
};

const Button = ({ control, keyHandler, second }: ButtonProps) => {
  const id = control.value || control.label;
  const label = control.label;
  const buffer = control.buffer || "";
  const secondLabel = control.second || "";
  const secondValue = control.secondValue || control.second || id;
  const secondBuffer = control.secondBuffer || "";

  const clickHandler = () => {
    const value = second ? secondValue : id;
    const symbol = second ? secondBuffer : buffer || label;
    keyHandler(value, symbol);
  };

  return (
    <button id={id} data-second-label={secondLabel} onClick={clickHandler}>
      {label}
    </button>
  );
};

export default Button;
