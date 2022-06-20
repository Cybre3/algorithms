function createSortedArr(numOfElems) {
  let arr = [];

  for (let i = 0; i < numOfElems; i++) {
    arr[i] = Math.floor(Math.random() * +numOfElems);
  }
  return arr.sort((a, b) => a - b);
}
let myArr = [
  0, 1, 1, 3, 3, 4, 4, 5, 6, 7, 7, 7, 9, 9, 9, 13, 14, 14, 15, 16, 16, 17, 17, 18, 20, 25, 25, 26,
  27, 27, 30, 32, 32, 32, 34, 34, 35, 35, 36, 37, 38, 38, 39, 41, 42, 44, 44, 45, 46, 46, 46, 47,
  48, 48, 49, 51, 51, 52, 52, 53, 53, 54, 55, 59, 59, 59, 62, 62, 63, 63, 66, 68, 69, 71, 71, 72,
  73, 74, 74, 77, 77, 78, 81, 81, 81, 83, 83, 85, 86, 89, 91, 91, 92, 92, 93, 95, 97, 97, 98, 99,
];

/* 
   [
  0, 1, 2, 6, 9, 10, 13, 13, 14, 15, 15, 16, 16, 16, 18, 20, 21, 21, 21, 23, 23, 23, 24, 24, 27, 27,
  27, 30, 30, 32, 32, 33, 33, 34, 36, 37, 37, 39, 39, 40, 41, 42, 42, 43, 43, 44, 47, 48, 49, 50,
  51, 52, 52, 52, 53, 53, 54, 55, 56, 58, 60, 62, 62,
];
  */

function linearSearch(arr, x) {
  let numOfIterations = 0;
  for (let i = 0; i < arr.length; i++) {
    numOfIterations++;
    if (arr[i] === x) {
      return `True, The element "${x}" was found at index ${i}! Number of iterations: ${numOfIterations}`;
    }
  }
  return `False, The element "${x}" was not found. Number of iterations: ${numOfIterations}`;
}
console.log(`Linear Search below:\n${linearSearch(myArr, 72)}`);
console.log(`Linear Search below:\n${linearSearch(myArr, 2)}`);


function recursive__binarySearch(arr, x, start, end, numOfIterations) {
  let mid = Math.floor((start + end) / 2);
  numOfIterations++;

  if (arr[mid] === x)
    return `True, The element "${x}" was found at index ${mid}! Number of iterations: ${numOfIterations}`;
  else if (start >= end)
    return `False, Element "${x}" not found. Number of iterations: ${numOfIterations}`;

  return arr[mid] < x
    ? recursive__binarySearch(arr, x, mid + 1, end, numOfIterations)
    : recursive__binarySearch(arr, x, start, mid - 1, numOfIterations);
}
console.log(
  `Recursive Binary search below:\n${recursive__binarySearch(myArr, 72, 0, myArr.length - 1, 0)}`
);
console.log(
  `Recursive Binary search below:\n${recursive__binarySearch(myArr, 2, 0, myArr.length - 1, 0)}`
);


function iterative__binarySearch(arr, x, start, end) {
  let numOfIterations = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    numOfIterations++;

    if (arr[mid] === x) {
      return `True, The element "${x}" was found at index ${mid}! Number of iterations: ${numOfIterations}`;
    } else if (arr[mid] < x) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return `False, Element "${x}" not foud. Number of iterations: ${numOfIterations}`;
}
console.log(
  `Iterative Binary search below:\n${iterative__binarySearch(myArr, 72, 0, myArr.length - 1)}`
);
console.log(
  `Iterative Binary search below:\n${iterative__binarySearch(myArr, 2, 0, myArr.length - 1)}`
);
