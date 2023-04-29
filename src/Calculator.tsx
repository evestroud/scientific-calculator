import { controls } from "./controls";
import InputScreen from "./components/InputScreen";
import OutputScreen from "./components/OutputScreen";
import Controls from "./components/Controls";
import useCalculator from "./useCalculator";
import { Container, Flex } from "@chakra-ui/react";

const Calculator = () => {
  const { input, output, second, insert, keyHandler } = useCalculator();
  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      h="100vh"
    >
      <InputScreen input={input} second={second} insert={insert} />
      <OutputScreen output={output} />
      <div id="logo">TS-30</div>
      <Controls controls={controls} second={second} keyHandler={keyHandler} />
    </Flex>
  );
};

export default Calculator;
