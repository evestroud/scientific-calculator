import { useRef } from "preact/hooks";
import { keyframes, Text } from "@chakra-ui/react";

const useInputBuffer = () => {
  let tokens = useRef<{ token: string; display?: string }[]>([]);
  let cursor = useRef(0);

  // TODO convert control fns into reducer
  // TODO can move refs to state by lifting

  const add = (token: string, display?: string) => {
    tokens.current.splice(cursor.current, 0, { token, display });
    cursor.current = cursor.current + 1;
  };

  const ans = (answer: number) => {
    // TODO put this in evalutate in useCalculator or TokenBuffer
    tokens.current = tokens.current.map((item) =>
      item.token === "ANS" ? { token: answer.toString() } : item
    );
  };

  const clear = () => {
    tokens.current = [];
    cursor.current = 0;
  };

  const del = () => {
    if (
      tokens.current.length !== 0 &&
      cursor.current !== tokens.current.length
    ) {
      tokens.current.splice(cursor.current, 1);
    }
  };

  const insert = (token: string, display?: string) => {
    tokens.current.splice(cursor.current, 1, { token, display });
  };

  const left = () => {
    if (cursor.current > 0) {
      cursor.current = cursor.current - 1;
    }
  };

  const right = () => {
    if (cursor.current < tokens.current.length) {
      cursor.current = cursor.current + 1;
    }
  };

  const getTokens = () => {
    return tokens.current.slice().map((item) => item.token);
  };

  const length = () => {
    return tokens.current.length;
  };

  const toJsx = () => {
    let displayStart = 0;
    let displayEnd = 1;
    let displayCursor = 0;
    let length = 0;
    let displayTokens = [
      ...tokens.current.map((item) => item.display || item.token),
      " ",
    ];

    for (let i = 0; i < displayTokens.length; i++) {
      let token = displayTokens[i];

      if (i < cursor.current) {
        displayCursor += 1;
      }
      if (length + token.length < 18) {
        displayEnd += 1;
        length += token.length;
      } else {
        if (displayCursor > 0) {
          displayStart += 1;
          length -= displayTokens[displayStart].length;
          displayEnd += 1;
          length += token.length;
          displayCursor -= 1;
        } else if (displayCursor === 0) {
          displayEnd -= 1;
          break;
        } else if (displayCursor < 0) {
          displayStart -= 1;
          length += displayTokens[displayStart].length;
          displayEnd -= 1;
          length -= token.length;
        }
      }
    }

    let jsxBuilder = displayTokens
      .slice(displayStart, displayEnd)
      .map((token) => (token === " " ? <>&nbsp;</> : <>{token}</>));
    let cursorChar = jsxBuilder[displayCursor];

    const blinker = keyframes`
      50% { background-color: darkgrey; }
    `;

    return (
      <>
        {jsxBuilder.slice(0, displayCursor)}
        {
          <Text
            as="span"
            id="cursor"
            animation={`${blinker} 1s step-start infinite`}
          >
            {cursorChar}
          </Text>
        }
        {jsxBuilder.slice(displayCursor + 1)}
      </>
    );
  };

  return {
    add,
    ans,
    clear,
    del,
    insert,
    left,
    right,
    getTokens,
    length,
    toJsx,
  };
};

export default useInputBuffer;
