type OutputScreenProps = {
  output: string;
};

const OutputScreen = ({ output }: OutputScreenProps) => {
  return <div id="output-screen">{output}</div>;
};

export default OutputScreen;
