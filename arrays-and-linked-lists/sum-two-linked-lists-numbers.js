function ListNode(val = 0, next = null) {
  this.val = val;
  this.next = next;
}

function addNumbers(listNode1, listNode2) {
  let resultNode;
  let tempList;

  while (listNode1 && listNode2 != null) {
    let resultVal = listNode1.val + listNode2.val;
    if (resultVal >= 10) {
      resultVal = 0;
      listNode1.next.val++;
    }
    tempList = new ListNode(resultVal, tempList);
    listNode1 = listNode1.next;
    listNode2 = listNode2.next;
  }

  while (tempList != null) {
    resultNode = new ListNode(tempList.val, resultNode);
    tempList = tempList.next;
  }

  return resultNode;
}

// let listNode1 = new ListNode(3, new ListNode(4, new ListNode(5)));

// let listNode2 = new ListNode(2, new ListNode(6, new ListNode(1)));
// console.log(addNumbers(listNode1, listNode2));
