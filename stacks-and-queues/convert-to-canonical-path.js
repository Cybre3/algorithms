/**
 * @param {string} path
 * @return {string}
 */
// let start = performance.now();

let convertToCanonical = function (path) {
  let result = "";
  let stack = [];
  const splitPath = path.split("/");
  let ip = splitPath.length - 1;

  while (ip > 0) {
    if (splitPath[ip] == "..") {
      break;
    }

    switch (splitPath[ip]) {
      case ".":
        splitPath.pop();
        ip--;
        break;
      case "":
        splitPath.pop();
        ip--;
        break;
      default:
        let pathElement = splitPath.pop();
        stack.push(pathElement);
        ip--;
        break;
    }
  }

  stack = stack.reverse().join('/');
  result = `/${stack}`;
  return result;
};

// console.log(convertToCanonical("..//MyFiles/../Tolkien/LOTR"));
// console.log(convertToCanonical("./Tolkien/LOTR"));
// console.log(convertToCanonical("//Tolkien/../../LOTR"));
// console.log(convertToCanonical("../../../../books/../Tolkien/LOTR"));
// console.log(convertToCanonical("./Downloads/././Tolkien/LOTR"));
// console.log(convertToCanonical("./Downloads/../////Tolkien/LOTR"));
// console.log(
//   convertToCanonical("./Downloads//books//Tolkien//LOTR//The Fellowship of the Ring.docx")
// );

// let end = performance.now();
// console.log(end - start);
