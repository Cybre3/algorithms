class Node {
  constructor(customer, next = null) {
    this.customer = customer;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.current = null;
  }

  enqueue(val) {
    if (this.rear == null) {
      this.front = this.rear = this.current = new Node(val);
    } else {
      this.rear.next = new Node(val);
      this.rear = this.rear.next;
    }
  }

  dequeue() {
    if (this.front == null) {
      return null;
    } else {
      let val = this.front.customer;
      this.front = this.current = this.front.next;
      if (this.front == null) {
        this.rear = null;
      }

      return val;
    }
  }
}

class RecycleStation {
  constructor() {
    this.paperQueue = new Queue();
    this.plasticQueue = new Queue();
    this.glassQueue = new Queue();
    this.allQueue = new Queue();
    this.tempQueue = new Queue();
  }

  enqueue(customer) {
    this.allQueue.enqueue(customer);

    switch (customer.type) {
      case "paper":
        this.paperQueue.enqueue(customer);
        break;
      case "glass":
        this.glassQueue.enqueue(customer);
        break;
      case "plastic":
        this.plasticQueue.enqueue(customer);
        break;
      default:
        this.allQueue.enqueue(customer);
        break;
    }
  }

  dequeueAny() {
    const record = this.allQueue.dequeue();

    switch (record.type) {
      case "paper":
        this.paperQueue.dequeue();
        break;
      case "glass":
        this.glassQueue.dequeue();
        break;
      case "plastic":
        this.plasticQueue.dequeue();
        break;
    }

    return record;
  }

  dequeueByType(type) {
    let customer;
    let nodeNotFound = true;

    switch (type) {
      case "paper":
        customer = this.paperQueue.dequeue();
        break;
      case "glass":
        customer = this.glassQueue.dequeue();
        break;
      case "plastic":
        customer = this.plasticQueue.dequeue();
        break;
    }

    while (this.allQueue.current != null) {
      if (this.allQueue.current.customer === customer) {
        this.allQueue.current = this.allQueue.front = this.allQueue.current.next;
        nodeNotFound = false;
        break;
        
      } else if (this.allQueue.current.next.customer === customer) {
        this.allQueue.current.next = this.allQueue.current.next.next;
        nodeNotFound = false;
        this.allQueue.current = this.allQueue.front;
        break;
      }

      this.allQueue.current = this.allQueue.current.next;
    }

    if (nodeNotFound) {
      return -1;
    }

    return customer;
  }
}

let recycleStation = new RecycleStation();

recycleStation.enqueue({ type: "paper", name: "Jon Stevens" });
recycleStation.enqueue({ type: "paper", name: "Deisy Garcia" });
recycleStation.enqueue({ type: "plastic", name: "Daniel Matrines" });
recycleStation.enqueue({ type: "glass", name: "Amanda Jane" });
recycleStation.enqueue({ type: "glass", name: "Tony Delano" });
recycleStation.enqueue({ type: "paper", name: "Anthony Johnson" });
recycleStation.enqueue({ type: "plastic", name: "Donald Torres" });
recycleStation.enqueue({ type: "plastic", name: "Gary Miller" });
recycleStation.enqueue({ type: "paper", name: "Louis Brown" });
recycleStation.enqueue({ type: "glass", name: "Abraham Martin" });

console.log(recycleStation.dequeueAny());
console.log(recycleStation.dequeueByType("plastic"));
console.log(recycleStation.dequeueAny());
console.log(recycleStation.dequeueByType("glass"));
console.log(recycleStation.dequeueAny());
console.log(recycleStation.dequeueAny());
console.log(recycleStation.dequeueByType("glass"));
console.log(recycleStation.dequeueByType("paper"));
console.log(recycleStation.dequeueByType("plastic"));
