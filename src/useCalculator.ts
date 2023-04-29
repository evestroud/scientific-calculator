import { useRef, useState } from "preact/hooks";
import InputBuffer from "./calc/inputBuffer";
import TokenBuffer from "./calc/tokenBuffer";
import parser from "./calc/parser";

const useCalculator = () => {
  let ans = useRef(0);
  const buffer = useRef(new InputBuffer());
  let [clear, setClear] = useState(false);
  let [clearOutput, setClearOutput] = useState(false);
  const [insert, setInsert] = useState(false);
  const [second, setSecond] = useState(false);
  const [input, setInput] = useState(buffer.current.toString());
  const [output, setOutput] = useState("");

  const evaluate = () => {
    if (buffer.current.length) {
      try {
        buffer.current.ans(ans.current);
        let tokens = new TokenBuffer(buffer.current);
        let AST = parser(tokens);
        ans.current = AST.eval();
        setOutput(trimOutput(ans.current));
        setClear(true);
      } catch (error) {
        console.log(error);
        setOutput("ERROR");
        setClearOutput(true);
      }
    }
  };

  const trimOutput = (result: number) => {
    // Truncate long outputs
    let outputString = result.toString();
    if (outputString.length > 18) {
      outputString = parseFloat(outputString).toExponential();
    }

    let [num, exp] = outputString.split("e");
    if (exp && num.length + exp.length + 1 > 18) {
      num = num.substring(0, 18 - (exp.length + 1));
    }

    return num + (exp ? "e" : "") + (exp ? exp : "");
  };

  const specialKeys: { [key: string]: Function } = {
    equals: evaluate,
    clear: (() => {
      buffer.current.clear();
      setClear(false);
      if (clearOutput) {
        setOutput("");
        setClearOutput(false);
      } else {
        setClearOutput(true);
      }
    }).bind(this),
    del: buffer.current.del.bind(buffer.current),
    ins: () => setInsert(!insert),
    left: buffer.current.left.bind(buffer.current),
    right: buffer.current.right.bind(buffer.current),
    second: () => setSecond(!second),
  };

  const keyHandler = (value: string, symbol: string) => {
    if (clear && value !== "second") {
      if (value in specialKeys) {
        setClear(false);
      } else {
        specialKeys["clear"]();
      }
    }

    if (clearOutput && value !== "clear") {
      setClearOutput(false);
    }

    if (specialKeys.hasOwnProperty(value)) {
      specialKeys[value]();
    } else if (insert) {
      buffer.current.insert(value, symbol);
      setInsert(false);
    } else {
      if (
        buffer.current.length === 0 &&
        [
          "*",
          "/",
          "+",
          "-",
          "^",
          ")xrt(",
          ")squared",
          ")inverted",
          ")E(",
        ].includes(value)
      ) {
        buffer.current.add("ANS", "ANS");
      }
      buffer.current.add(value, symbol);
    }

    if (value !== "second") setSecond(false);

    if (insert && ["clear", "del"].includes(value)) {
      setInsert(false);
    }

    setInput(buffer.current.toString());
  };

  return { input, output, second, insert, keyHandler };
};

export default useCalculator;
