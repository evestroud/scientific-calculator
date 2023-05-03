import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import Calculator from "./Calculator";
import theme from "./theme";

const App = () => (
  <ChakraProvider theme={theme}>
    <ColorModeProvider>
      <Calculator />
    </ColorModeProvider>
  </ChakraProvider>
);

export { App };
