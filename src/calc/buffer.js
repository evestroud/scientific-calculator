/**
 * Stores a series of tokens to be used by the parser, and provides a queue-
 * like interface for accessing them.
 */ 
class InputBuffer {
  #tokens = [];
  #displayTokens = [];
  #index = 0;
  #cursor = 0;

  constructor() {
    this.#cursor = this.#tokens.length;
  }

  add(token, display) {
    this.#tokens.push(token);
    this.#displayTokens.push(display ? display : token);
    this.#cursor += 1;
  }
  
  clear() {
    this.#tokens = [];
    this.#displayTokens = [];
    this.#cursor = 0;
  }

  del() {
    if (this.#tokens.length !== 0) {
      this.#tokens.splice(this.#cursor, 1);
      if (this.#cursor === this.#tokens.length) {
        this.#cursor -= 1;
      }
    }
  }

  left() {
    if (this.#cursor > 0) {
      this.#cursor -= 1;
    }
  }

  right() {
    if (this.#cursor < this.#tokens.length) {
      this.#cursor += 1;
    }
  }
  
  get cursor() {
    return this.#cursor;
  }

  /**
   * Returns the current token in the buffer. Undefined response indicates end 
   * of buffer.
   */
  get current() {
    return this.#tokens[this.#index];
  }
  /**
   * Returns the next token in the buffer. Undefined response indicates end of 
   * buffer.
   */
  get next() {
    return this.#tokens[this.#index + 1];
  }
  /**
   * Returns the next token in the buffer and advances the index. WIll throw
   * an exception if called past the end of the buffer.
   */
  pop() {
    if (this.#index == this.#tokens.length) {
      throw "Reached end of buffer";
    }
    let token = this.current;
    this.#index += 1;
    return token;
  }

  toString() {
    let stringBuilder = [];
    for (let i = 0; i < this.#displayTokens.length; i ++) {
      stringBuilder.push(this.#displayTokens[i]);
    }
    return stringBuilder.join("");
  }
}

module.exports = InputBuffer;
