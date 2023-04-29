import { Box } from "@chakra-ui/react";

type InputScreenProps = {
  input: string;
  second: Boolean;
  insert: Boolean;
};

const InputScreen = ({ input, second, insert }: InputScreenProps) => {
  return (
    <Box
      id="input-screen"
      className={`${second ? "second" : ""} ${insert ? "insert" : ""}`}
      dangerouslySetInnerHTML={{ __html: input }}
    ></Box>
  );
};

export default InputScreen;
