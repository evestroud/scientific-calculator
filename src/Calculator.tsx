import { controls } from "./controls";
import InputScreen from "./components/InputScreen";
import OutputScreen from "./components/OutputScreen";
import Controls from "./components/Controls";
import useCalculator from "./useCalculator";
import { Box, Container, Flex } from "@chakra-ui/react";

const Calculator = () => {
  const { input, output, second, insert, keyHandler } = useCalculator();
  return (
    <Flex justifyContent="center" alignItems="center" h="100vh" w="100vw">
      <Flex
        flexDir="column"
        bg="grey"
        gap="2"
        p="2"
        border="2px solid black"
        borderRadius="5px"
        boxShadow="5px 5px 5px grey"
      >
        <InputScreen input={input} second={second} insert={insert} />
        <OutputScreen output={output} />
        <Box id="logo">TS-30</Box>
        <Controls controls={controls} second={second} keyHandler={keyHandler} />
      </Flex>
    </Flex>
  );
};

export default Calculator;
