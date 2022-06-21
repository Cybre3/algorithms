/**
 * @param {string} str
 * @return {boolean}
 */
// const start = performance.now()
let checkBrackets = function (str) {
  let splitBrackets = str.split("");
  let iWasReset = false;

  for (let i = 0; i <= splitBrackets.length; i++) {
    if (iWasReset) {
      i = 0;
      iWasReset = false;
    }
    let currentBracket = splitBrackets[i];
    let grouping = splitBrackets.slice(i, i + 4).join(", ");

    switch (splitBrackets[i + 1]) {
      case "}":
        if (currentBracket == "{") {
          splitBrackets.splice(i, 2);
          iWasReset = true;
        }
        break;
      case ")":
        if (currentBracket === "(") {
          splitBrackets.splice(i, 2);
          iWasReset = true;
        }
        break;
      case "]":
        if (currentBracket === "[") {
          splitBrackets.splice(i, 2);
          iWasReset = true;
        }
        break;
      case ">":
        if (currentBracket === "<") {
          splitBrackets.splice(i, 2);
          iWasReset = true;
        }
        break;
    }

    if (grouping == "<, <, >, >") {
      splitBrackets.splice(i, 4);
      iWasReset = true;
    }
  }

  return splitBrackets.length === 0 ? true : false;
};

// const end = performance.now();


// console.log(checkBrackets("{(<<[]{}[]>><>)}"));
// console.log(end - start)
// console.log(checkBrackets("(}{}[])"));
// console.log(end - start)
// console.log(checkBrackets("(<<>><><>{}(){{<>}}{}[])"));
// console.log(end - start)
