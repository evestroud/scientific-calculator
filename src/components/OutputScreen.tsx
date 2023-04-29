import { Box } from "@chakra-ui/react";

type OutputScreenProps = {
  output: string;
};

const OutputScreen = ({ output }: OutputScreenProps) => {
  return <Box id="output-screen">{output}</Box>;
};

export default OutputScreen;
