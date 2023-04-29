import { Box } from "@chakra-ui/react";

const Screen = ({
  display,
  flags,
}: {
  display: string;
  flags: { second?: boolean; insert?: boolean };
}) => {
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
      w="80%"
      bg="#eee"
      border="2px solid #999"
      textAlign="right"
    >
      {secondFlag}
      {insertFlag}
      {display}
    </Box>
  );
};

export default Screen;
