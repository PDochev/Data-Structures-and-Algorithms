// Implementing a Tree
class TreeNode {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  addChild(child) {
    if (child instanceof TreeNode) {
      this.children.push(child);
    } else {
      this.children.push(new TreeNode(child));
    }
  }

  removeChild(childToRemove) {
    const length = this.children.length;
    this.children = this.children.filter((child) => {
      return childToRemove instanceof TreeNode
        ? child !== childToRemove
        : child.data !== childToRemove;
    });

    if (length === this.children.length) {
      this.children.forEach((child) => child.removeChild(childToRemove));
    }
  }

  print(level = 0) {
    let result = "";
    for (let i = 0; i < level; i++) {
      result += "-- ";
    }
    console.log(`${result}${this.data}`);
    this.children.forEach((child) => child.print(level + 1));
  }

  // Depth First Traversal
  // Visit the root node first, then recursively visit the children

  depthFirstTraversal() {
    console.log(this.data);
    this.children.forEach((child) => child.depthFirstTraversal());
  }

  // Breadth First Traversal
  // Visit all nodes on the same level before moving to the next level
  // Use a queue to keep track of the nodes to visit
  // Start with the root node, then visit all the children, then visit the children of the children

  breadthFirstTraversal() {
    let queue = [this];
    while (queue.length > 0) {
      const current = queue.shift();
      console.log(current.data);
      queue = queue.concat(current.children);
    }
  }
}

const menu = new TreeNode("Menu");

const entries = {
  Breakfast: ["Cereal", "BBQ Chicken", "Oatmeal"],
  Lunch: ["Soup", "Sandwich", "Lasagna"],
  Dinner: ["Yogurt", "Filet Mignon", "Fish Florentine"],
};

const meals = Object.keys(entries);
for (let meal = 0; meal < meals.length; meal++) {
  menu.addChild(meals[meal]);
  const entrylist = entries[meals[meal]];
  entrylist.forEach((entry) => {
    menu.children[meal].addChild(entry);
  });
}

menu.print();
// remove BBQ Chicken from Breakfast
menu.removeChild("BBQ Chicken");
// add BBQ Chicken to Dinner
menu.children[2].addChild("BBQ Chicken");

// remove Yogurt from Dinner
menu.removeChild("Yogurt");
// add Yogurt to Breakfast
menu.children[0].addChild("Yogurt");

console.log("------- Corrected Menu");
menu.print();

menu.depthFirstTraversal();

module.exports = TreeNode;
