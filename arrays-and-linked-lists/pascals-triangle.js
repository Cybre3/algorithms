// class Node {
//   constructor(val, next = null) {
//     this.val = val;
//     this.next = next;
//   }

//   last() {
//     let lastNode = this;
//     while (lastNode.next != null) {
//       lastNode = lastNode.next;
//     }
//     return lastNode;
//   }

//   size() {
//     let count = 0;
//     let lastNode = this;

//     while (lastNode != null) {
//       count++;
//       lastNode = lastNode.next;
//     }

//     return count;
//   }
// }
const start = performance.now();

let createPascalsTriangle = function (depth) {
  let triangle = [[1], [1, 1]];

  if (depth === 0) {
    return [];
  } else if (depth === 1) {
    return [[1]];
  } else if (depth === 2) {
    return [[1], [1, 1]];
  } else {
    for (let i = 2; i < depth; i++) {
      createRow(triangle);
    }
  }

  return triangle;
};

function createRow(triangle) {
  let newRow = [1];
  let previousRow = triangle[triangle.length - 1];

  for (let i = 0; i < previousRow.length - 1; i++) {
    let currentNum = previousRow[i];
    let nextNum = previousRow[i + 1];

    newRow.push(currentNum + nextNum);
  }
  newRow.push(1);

  return triangle.push(newRow);
}

let printTriangle = function (triangle) {
  triangle = triangle.join("\n");
  console.log("This is triangle:\n", triangle);
};

let triangle = createPascalsTriangle(5);
printTriangle(triangle);

const end = performance.now();
console.log(end - start);
