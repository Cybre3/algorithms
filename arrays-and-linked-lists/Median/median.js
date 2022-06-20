// let start = performance.now();
let findMedianSortedArrays = function (arr1, arr2) {
  let median;
  let combinedArr = arr1.concat(arr2).sort((a, b) => a - b);
  median = recursive__binarySearch(combinedArr, 0, combinedArr.length - 1);
  
  return median;
};

function recursive__binarySearch(arr, start, end) {
  let mid = (start + end) / 2;

  return Number.isInteger(mid) ? arr[mid] : (arr[mid - 0.5] + arr[mid + 0.5]) / 2;
}

// let median1 = findMedianSortedArrays([5], [2, 7]);
// let median1 = findMedianSortedArrays([-3, -1, 0], [3, 4, 5]);


// let end = performance.now();
// console.log("Function run time: ", end - start);
// console.log("Median: ", median1);
// console.log("Run time after print: ", end - start);

exports.findMedianSortedArrays = findMedianSortedArrays;
