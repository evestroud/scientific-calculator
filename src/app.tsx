import { controls } from "./controls";

import InputScreen from "./components/InputScreen";
import OutputScreen from "./components/OutputScreen";
import Controls from "./components/Controls";
import useCalculator from "./useCalculator";

const App = () => {
  const { input, output, second, insert, keyHandler } = useCalculator();
  return (
    <>
      <InputScreen input={input} second={second} insert={insert} />
      <OutputScreen output={output} />
      <div id="logo">TS-30</div>
      <Controls controls={controls} second={second} keyHandler={keyHandler} />
    </>
  );
};

export { App };
