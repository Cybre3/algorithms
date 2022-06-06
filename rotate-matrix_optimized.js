let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

console.log(matrix);

let rotateRight = function (matrix) {
  let matrixToOneArr = [].concat(...matrix);
  const numOfValuesInEachArr = matrix[0].length;
  let numberGrouping = 0;
  let matrixRotatedRight = [];

  matrixToOneArr.map((num) => {
    if (numberGrouping === numOfValuesInEachArr) numberGrouping = 0;

    if (!matrixRotatedRight[numberGrouping]) {
      matrixRotatedRight[numberGrouping] = [];
    }
    matrixRotatedRight[numberGrouping].push(num);

    numberGrouping++;
  });

  matrixRotatedRight.map((arr) => arr.reverse());

  console.log("rotate right\n", matrixRotatedRight);
};

let rotateLeft = function (matrix) {
  let matrixToOneArr = [].concat(...matrix);
  matrixToOneArr.reverse();
  const numOfValuesInEachArr = matrix[0].length;
  let numberGrouping = 0;
  let matrixRotatedLeft = [];

  matrixToOneArr.map((num) => {
    if (numberGrouping === numOfValuesInEachArr) numberGrouping = 0;

    if (!matrixRotatedLeft[numberGrouping]) {
      matrixRotatedLeft[numberGrouping] = [];
    }
    matrixRotatedLeft[numberGrouping].push(num);

    numberGrouping++;
  });

  matrixRotatedLeft.map((arr) => arr.reverse());

  console.log("rotate left\n", matrixRotatedLeft);
};

rotateRight(matrix);
rotateLeft(matrix);
