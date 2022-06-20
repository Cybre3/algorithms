class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }

  size() {
    let count = 0;
    let lastNode = this;

    while (lastNode != null) {
      count++;
      lastNode = lastNode.next;
    }

    return count;
  }
}

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];


console.log(matrix);

function createNodeListArr(matrixToOneArr) {
  const numOfValuesInEachArr = matrix[0].length;
  let hitEndOfList = false;
  let llArr = [];

  for (let i = 0; i < matrixToOneArr.length; i++) {
    if (i === 1 && hitEndOfList) {
      i = 0;
      hitEndOfList = false;
    }

    llArr[i] = new Node(matrixToOneArr[i], llArr[i]);

    if (i === numOfValuesInEachArr - 1) {
      matrixToOneArr.reverse();
      matrixToOneArr.length -= numOfValuesInEachArr;
      matrixToOneArr.reverse();
      hitEndOfList = true;
      i = 0;
    }
  }

  return llArr;
}

let rotateRight = function (matrix) {
  let matrixToOneArr = [].concat(...matrix);
  let linkedList = createNodeListArr(matrixToOneArr);
  let matrixRotatedRight = [];

  for (let i = 0; i < linkedList.length; i++) {
    if (!matrixRotatedRight[i]) {
      matrixRotatedRight[i] = [];
    }
    let currentNode = linkedList[i];
    while (currentNode != null) {
      matrixRotatedRight[i].push(currentNode.val);
      currentNode = currentNode.next;
    }
  }

  console.log("rotate right\n", matrixRotatedRight);
};

let rotateLeft = function (matrix) {
  let matrixToOneArr = [].concat(...matrix);
  matrixToOneArr.reverse();
  let linkedList = createNodeListArr(matrixToOneArr);
  let matrixRotatedLeft = [];

  for (let i = 0; i < linkedList.length; i++) {
    if (!matrixRotatedLeft[i]) {
      matrixRotatedLeft[i] = [];
    }
    let currentNode = linkedList[i];
    while (currentNode != null) {
      matrixRotatedLeft[i].push(currentNode.val);
      currentNode = currentNode.next;
    }
  }
  console.log("rotate left\n", matrixRotatedLeft);
};

rotateRight(matrix);
rotateLeft(matrix);
