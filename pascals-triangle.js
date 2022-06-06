class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }

  last() {
    let lastNode = this;
    while (lastNode.next != null) {
      lastNode = lastNode.next;
    }
    return lastNode;
  }
}



let createPascalsTriangle = function (depth) {
  let finalArr = [];
  const constantNum = 1;

  let row = new Node(constantNum);  
  let testNum = depth;

  while(testNum != 0) {
    row.next = new Node(row.val + --testNum, row.next);
  }
  
  console.log(row);
};

createPascalsTriangle(5);
/* 
current row = depth - (depth - i);
*/
