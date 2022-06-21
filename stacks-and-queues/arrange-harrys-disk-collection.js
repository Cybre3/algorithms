class CollectionQueue {
  constructor() {
    this.spindle1 = [];
    this.spindle2 = [];
  }

  enQueue(disk) {
    // write code here
  }

  deQueue() {
    let disk;

    // write code here

    return disk;
  }
}


let weekSelection = new CollectionQueue();

weekSelection.enQueue('Gone with the Wind');
weekSelection.enQueue('Captain America: The First Avenger');
weekSelection.enQueue('Forrest Gump');
weekSelection.enQueue('Iron Man');
weekSelection.enQueue('Iron Man 2');
weekSelection.enQueue('Iron Man 3');
weekSelection.enQueue('Star Wars: Episode IV – A New Hope');
weekSelection.enQueue('Star Wars: Episode V – The Empire Strikes Back');
weekSelection.enQueue('Star Wars: Episode VI – Return of the Jedi');

console.log(weekSelection.deQueue());
console.log(weekSelection.deQueue());
console.log(weekSelection.deQueue());
console.log(weekSelection.deQueue());
console.log(weekSelection.deQueue());
console.log(weekSelection.deQueue());
console.log(weekSelection.deQueue());
console.log(weekSelection.deQueue());
console.log(weekSelection.deQueue());