import { useState } from "preact/hooks";

const useInputBuffer = () => {
  const [tokens, setTokens] = useState<{ token: string; display?: string }[]>(
    []
  );
  const [cursor, setCursor] = useState(0);

  const add = (token: string, display?: string) => {
    const newTokens = tokens.slice().splice(cursor, 0, { token, display });
    setTokens(newTokens);
    setCursor(cursor + 1);
  };

  const ans = (answer: number) => {
    // TODO put this in evalutate in useCalculator
    const newTokens = tokens.map((item) =>
      item.token === "ANS" ? { token: answer.toString() } : item
    );
    setTokens(newTokens);
  };

  const clear = () => {
    setTokens([]);
    setCursor(0);
  };

  const del = () => {
    if (tokens.length !== 0 && cursor !== tokens.length) {
      const newTokens = tokens.slice().splice(cursor, 1);
      setTokens(newTokens);
    }
  };

  const insert = (token: string, display?: string) => {
    const newTokens = tokens.slice().splice(cursor, 1, { token, display });
    setTokens(newTokens);
  };

  const left = () => {
    if (cursor > 0) {
      setCursor(cursor - 1);
    }
  };

  const right = () => {
    if (cursor < tokens.length) {
      setCursor(cursor + 1);
    }
  };

  const getCursor = () => {
    return cursor;
  };

  const length = () => {
    return tokens.length;
  };

  // TODO toJsx
  const toString = () => {
    let displayStart = 0;
    let displayEnd = 1;
    let displayCursor = 0;
    let length = 0;
    let displayTokens = [...displayTokens, "&nbsp"];

    for (let i = 0; i < displayTokens.length; i++) {
      let token = displayTokens[i];
      let tokenLength = token === "&nbsp" ? 1 : token.length;

      if (i < cursor) {
        displayCursor += 1;
      }
      if (length + tokenLength < 18) {
        displayEnd += 1;
        length += tokenLength;
      } else {
        if (displayCursor > 0) {
          displayStart += 1;
          length -= displayTokens[displayStart].length;
          displayEnd += 1;
          length += tokenLength;
          displayCursor -= 1;
        } else if (displayCursor === 0) {
          displayEnd -= 1;
          break;
        } else if (displayCursor < 0) {
          displayStart -= 1;
          length += displayTokens[displayStart].length;
          displayEnd -= 1;
          length -= tokenLength;
        }
      }
    }

    let stringBuilder = displayTokens.slice(displayStart, displayEnd);
    let cursorChar = stringBuilder[displayCursor];
    stringBuilder[displayCursor] = `<span id='cursor'>${cursorChar}</span>`;

    return stringBuilder.join("");
  };

  // [Symbol.iterator]() {
  //   let index = -1;
  //   let tokens = tokens;

  //   return {
  //     next: () => ({ value: tokens[++index], done: !(index in tokens) }),
  //   };
  // }
};

export default useInputBuffer;
