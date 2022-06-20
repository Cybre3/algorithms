// Implementation of queue.

// A linked list node to
// store a queue entry.
class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// A class to represent a queue. The queue,
// front stores the front node and
// rear stores the last node.
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  // Add an element to the end.
  enqueue(val) {
    if(this.rear == null) {
        this.front = this.rear = new Node(val);
    } else {
        this.rear.next = new Node(val);
        this.rear = this.rear.next;
    }
  }

  // Remove the first element from the queue.
  dequeue() {
    if(this.front == null) {
        return null;
    } else {
        let val = this.front.val;
        this.front = this.front.next;
        if(this.front == null) {
            this.rear = null;
        }

        return val;
    }
  }
}

exports.Node = Node;
exports.Queue = Queue;
