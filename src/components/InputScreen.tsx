type InputScreenProps = {
  input: string;
  second: Boolean;
  insert: Boolean;
};

const InputScreen = ({ input, second, insert }: InputScreenProps) => {
  return (
    <div
      id="input-screen"
      className={`${second ? "second" : ""} ${insert ? "insert" : ""}`}
      dangerouslySetInnerHTML={{ __html: input }}
    ></div>
  );
};

export default InputScreen;
