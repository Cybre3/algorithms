/**
 * @param {string} str
 * @return {boolean}
 */
// const start = performance.now();
let checkBrackets = function (str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
    const lastBracketIn = stack[stack.length - 1];
    const bracketBeforeLastIn = stack[stack.length - 2];

    if (
      (bracketBeforeLastIn === "{" && lastBracketIn === "}") ||
      (bracketBeforeLastIn === "[" && lastBracketIn === "]") ||
      (bracketBeforeLastIn === "(" && lastBracketIn === ")") ||
      (bracketBeforeLastIn === "<" && lastBracketIn === ">")
    ) {
      stack.pop();
      stack.pop();
    }

  }

  return stack.length == 0 ? true : false;
};

// const end = performance.now();

// console.log(checkBrackets("{(<<[]{}[]>><>)}"));
// console.log(end - start);
// console.log(checkBrackets("(}{}[])"));
// console.log(end - start);
// console.log(checkBrackets("(<<>><><>{}(){{<>}}{}[])"));
// console.log(end - start);
