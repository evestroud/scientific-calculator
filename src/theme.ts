import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  colors: {
    bg: {
      light: "#F7F5FF",
      dark: "#322f36",
    },
    text: {
      light: "#322f36",
      dark: "#F7F5FF",
    },
  },
});

export default theme;
