class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }

  count() {
    let lastNode = this;
    let numOfVals = 0;

    while (lastNode != null) {
      lastNode = lastNode.next;
      numOfVals++;
    }

    return numOfVals;
  }

  findMid() {
    let middleNode = this;
    let middleNodeCount = Math.floor(this.count() / 2);
    let newCount = 0;

    while (newCount != middleNodeCount) {
      newCount++;
      middleNode = middleNode.next;
    }

    return middleNode;
  }
}

function findMid(list) {
    let middleNode = list;
    let middleNodeCount = Math.floor(list.count() / 2);
    let newCount = 0;

    while (newCount != middleNodeCount) {
      newCount++;
      middleNode = middleNode.next;
    }

    return middleNode;
}


let ll = new Node("a", new Node("b", new Node("c", new Node("d", new Node("e")))));
console.log(findMid(ll).val === "c");

let ll2 = new Node("a")
console.log(findMid(ll2).val === "a");

let ll3 = new Node("a", new Node("b", new Node("c", new Node("d"))));
let midVal = findMid(ll3).val;
console.log(midVal === "b" || midVal === "c");