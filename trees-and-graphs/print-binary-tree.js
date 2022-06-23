class Node {
  constructor(root, left = null, right = null) {
    this.root = root;
    this.left = left;
    this.right = right;
  }
}

let spaceCount = 5;
function printEachBranch(root, startSpace) {
  if (root == null) {
    return;
  }

  startSpace += spaceCount;

  printEachBranch(root.right, startSpace);

  console.log(`${" ".repeat(startSpace)}${root.root}`);
  // console.log(`${" ".repeat(startSpace)}${root.root}\n`);

  printEachBranch(root.left, startSpace);
}

function print2DTree(tree) {
  printEachBranch(tree, 0);
}

let tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);

tree.left.left = new Node(4);
tree.left.right = new Node(5);
tree.right.left = new Node(6);
tree.right.right = new Node(7);

print2DTree(tree);
