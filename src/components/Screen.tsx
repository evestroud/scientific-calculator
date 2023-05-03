import { Box } from "@chakra-ui/react";
import { ComponentChildren } from "preact";

type ScreenProps = {
  children: ComponentChildren;
  flags: { [key: string]: boolean };
};

const Screen = ({ flags, children }: ScreenProps) => {
  const secondFlag = (
    <Box position="absolute" top="1" left="1" fontSize=".7rem">
      {flags.second ? "2nd" : ""}
    </Box>
  );
  const insertFlag = (
    <Box position="absolute" top={1} left={7} fontSize=".7rem">
      {flags.insert ? "ins" : ""}
    </Box>
  );

  return (
    <Box
      pos="relative"
      h="3rem"
      w="100%"
      bg="#eee"
      color="black"
      fontFamily="monospace"
      fontSize="2rem"
      border="2px solid #999"
      textAlign="right"
    >
      {secondFlag}
      {insertFlag}
      {children}
    </Box>
  );
};

export default Screen;
