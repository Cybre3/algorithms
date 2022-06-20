class Node {
  constructor(prev = null, val, next = null) {
    this.prev = prev;
    this.val = val;
    this.next = next;
  }

  last() {
    let lastNode = this;
    while (lastNode != null) {
      lastNode = lastNode.next;
    }
    return lastNode;
  }
}


let myArr = [
  0, 1, 2, 6, 9, 10, 13, 13, 14, 15, 15, 16, 16, 16, 18, 20, 21, 21, 21, 23, 23, 23, 24, 24, 27, 27,
  27, 30, 30, 32, 32, 33, 33, 34, 36, 37, 37, 39, 39, 40, 41, 42, 42, 43, 43, 44, 47, 48, 49, 50,
  51, 52, 52, 52, 53, 53, 54, 55, 56, 58, 60, 62, 62,
];

let myArr2 = [
  0, 1, 1, 3, 3, 4, 4, 5, 6, 7, 7, 7, 9, 9, 9, 13, 14, 14, 15, 16, 16, 17, 17, 18, 20, 25, 25, 26,
  27, 27, 30, 32, 32, 32, 34, 34, 35, 35, 36, 37, 38, 38, 39, 41, 42, 44, 44, 45, 46, 46, 46, 47,
  48, 48, 49, 51, 51, 52, 52, 53, 53, 54, 55, 59, 59, 59, 62, 62, 63, 63, 66, 68, 69, 71, 71, 72,
  73, 74, 74, 77, 77, 78, 81, 81, 81, 83, 83, 85, 86, 89, 91, 91, 92, 92, 93, 95, 97, 97, 98, 99,
];

myArr.reverse();
myArr2.reverse();
let list = new Node();
let list2 = new Node();

for (let i = 0; i < myArr.length; i++) {
  list = new Node(myArr[i + 1], myArr[i], list);
}

for (let j = 0; j < myArr2.length; j++) {
  list2 = new Node(myArr2[j + 1], myArr2[j], list2);
}

console.log("From list 1: ", list);
console.log(list.next.next.next.next.next.val);

console.log("From list 2: ", list2);
console.log(list2.next.next.next.next.next.val);
