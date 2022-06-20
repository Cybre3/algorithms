class Stack {
  arr = new Array();
  constructor(element) {
    this.arr[0] = element;
  }

  push(element) {
    this.arr.push(element);
    return this.arr;
  }

  /**
   * Remove element from the top.
   * @return {*} top most element in the stack.
   * @return {boolean} false if stack is empty.
   */
  pop() {
    return this.size() <= 0 ? false : this.arr.pop();
  }

  /**
   * @return {*} the top element if empty return undefined.
   */
  peek() {
    return this.size() <= 0 ? undefined : this.arr[this.size() - 1];
  }

  /**
   * @return {boolean} true if empty, false if not.
   */
  isEmpty() {
    return this.size() <= 0 ? true : false;
  }

  /**
   * @return {number} the number of elements.
   */
  size() {
    return this.arr.length;
  }

  /**
   * Search for the given element and return the index of the element if find.
   * @param {*} element Searched data.
   * @return {number} the number of elements.
   * @return {number} -1 if didn't find the element.
   */
  search(element) {
    return this.arr.indexOf(element) === undefined ? -1 : this.arr.indexOf(element);
  }

  /**
   * Print all elements in new line each.
   */
  printStack() {
    console.log(this.arr.join("\n"));
  }
}

exports.Stack = Stack;
