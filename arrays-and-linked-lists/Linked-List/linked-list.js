class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  last() {
    let lastNode = this.head;
    while (lastNode.next != null) {
      lastNode = lastNode.next;
    }
    return lastNode;
  }

  size() {
    let count = 0;
    let lastNode = this.head;

    while (lastNode != null) {
      count++;
      lastNode = lastNode.next;
    }

    return count;
  }

  add(data) {
    let lastNode = this.head;

    while (lastNode.next != null) {
      lastNode = lastNode.next;
    }
    lastNode.next = new Node(data);
  }

  insertAt(data, index) {
    let node = this.head;
    let endOfList = this.size();
    let newNode = new Node(data);

    if (index === 0) {
      newNode.next = node;
      this.head = newNode;

    } else if (index === endOfList) {
      this.last().next = newNode;

    } else {
      for (let i = 0; i < index - 1; i++) {
        node = node.next;
      }
      newNode.next = node.next;
      node.next = newNode;
    }
    
    return node;
  }

  removeFrom(index) {
    let allowedMaxIndex = this.size() - 1;
    let node = this.head;
    let lastIndex = this.size() - 1;

    if (index < 0 || index > allowedMaxIndex) {
      throw new RangeError(`The argument must be between 0 and ${allowedMaxIndex}.`);
    }

    if (index === 0) {
      this.head = node.next;

    } else if (index === lastIndex) {
      while(node.next !== this.last()) {
        node = node.next;
      }
      node.next = null;

    } else {
      for (let i = 0; i < index; i++) {
        if(i === index - 1) {
          node.next = node.next.next;
        }
        node = node.next;
      }
      
    }
    
    return this.head;
  }

  removeNode(node) {
    let currentNode = this.head;
    let nodeNotFound = true;

    while(currentNode != null) {
      if(currentNode === node) {
        this.head = currentNode.next;
        nodeNotFound = false;
      } 
      currentNode = currentNode.next;
    }

    if(nodeNotFound) {
      return -1
    }

    return this.head;
  }

  indexOfNode(node) {
    let currentNode = this.head;
    let nodeNotFound = true;

    for(let i = 0; i < this.size(); i++) {
      if(currentNode === node) {
        nodeNotFound = false;
        return i;
      } 
      currentNode = currentNode.next;
    }

    if(nodeNotFound) {
      return -1
    }
  }

  isEmpty() {
    return this.size() === 0 ? true : false;
  }

  getFirst() {
    return this.size() === 0 ? -1 : this.head;
  }

  getLast() {
    return this.size() === 0 ? -1 : this.last();
  }

  clear() {
    return this.head = null;    
  }

  printNode() {
    console.log("Printed node", this.head);
  }
}

exports.LinkedList = LinkedList;
exports.Node = Node;
