class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class CollectionQueue {
  constructor() {
    this.spindle1 = [];
    this.spindle2 = [];
    this.front = null;
    this.rear = null;
  }

  enQueue(disk) {
    this.spindle1.push(disk);
    if (this.rear == null) {
      this.front = this.rear = new Node(disk);
    } else {
      this.rear.next = new Node(disk);
      this.rear = this.rear.next;
    }
  }

  deQueue() {
    if (this.front == null) {
      return null;
    } else {
      let disk = this.front.val;
      this.front = this.front.next;
      if (this.front == null) {
        this.rear = null;
      }
      this.spindle2.push(disk);
      return disk;
    }
  }
}

let weekSelection = new CollectionQueue();

weekSelection.enQueue("Gone with the Wind");
weekSelection.enQueue("Captain America: The First Avenger");
weekSelection.enQueue("Forrest Gump");
weekSelection.enQueue("Iron Man");
weekSelection.enQueue("Iron Man 2");
weekSelection.enQueue("Iron Man 3");
weekSelection.enQueue("Star Wars: Episode IV – A New Hope");
weekSelection.enQueue("Star Wars: Episode V – The Empire Strikes Back");
weekSelection.enQueue("Star Wars: Episode VI – Return of the Jedi");

console.log(weekSelection.deQueue());
console.log(weekSelection.deQueue());
console.log(weekSelection.deQueue());
console.log(weekSelection.deQueue());
console.log(weekSelection.deQueue());
console.log(weekSelection.deQueue());
console.log(weekSelection.deQueue());
console.log(weekSelection.deQueue());
console.log(weekSelection.deQueue());
