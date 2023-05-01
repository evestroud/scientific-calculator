import { ComponentChildren } from "preact";

type InputScreenProps = {
  children: ComponentChildren;
  second: Boolean;
  insert: Boolean;
};

const InputScreen = ({ second, insert, children }: InputScreenProps) => {
  return (
    <div
      id="input-screen"
      className={`${second ? "second" : ""} ${insert ? "insert" : ""}`}
    >
      {children}
    </div>
  );
};

export default InputScreen;
