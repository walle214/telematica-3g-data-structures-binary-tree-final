// * reference Stack methods https://www.programiz.com/java-programming/stack
module.exports = class Stack {
  #stack;
  constructor(intialValue = []) {
    this.#stack = [...intialValue];
  }
  push(value) {
    this.#stack.push(value);
  }
  pop() {
    return this.#stack.pop();
  }
  peek() {
    return this.#stack[this.#stack.length - 1];
  }
  search(value) {
    const position = this.#stack.findIndex((i) => {
      i === value;
    });
    return position >= 0 ? this.#stack.length - 1 - position : -1;
  }
  /**
   *
   * @param {string} c
   */
  toString(c = '') {
    return this.#stack.join(c);
  }
  /**
   *
   * @param {(value: any, index: number)=>void} callBack
   */
  forEach(callBack) {
    this.#stack.forEach((value, index) => {
      callBack(value, index);
    });
  }
  get empty() {
    return this.#stack.length <= 0;
  }
};
