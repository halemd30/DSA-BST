// removing:
// largest value from the left side
// smallest value from the right side
// implement one or the other

class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    if (this.key == null) {
      this.key = key;
      this.value = value;
    } else if (key < this.key) {
      if (this.left == null) {
        this.left = new BinarySearchTree(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    } else {
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }

  findHeight() {
    let leftCount = 0;
    let rightCount = 0;
    function calculateHeight(node) {
      if (node.key !== null) {
        if (node.left) {
          leftCount++;
          calculateHeight(node.left);
        }

        if (node.right) {
          leftCount++;
          calculateHeight(node.right);
        }
      }
    }
    calculateHeight(this);
    console.log("left count", leftCount);
    console.log("right count", rightCount);
  }

  find(key) {
    if (this.key == key) {
      return this.value;
    } else if (key < this.key && this.left) {
      return this.left.find(key);
    } else if (key > this.key && this.right) {
      return this.right.find(key);
    } else {
      throw new Error("Key Error");
    }
  }

  remove(key) {
    if (this.key == key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      } else if (this.left) {
        this._replaceWith(this.left);
      } else if (this.right) {
        this._replaceWith(this.right);
      } else {
        this._replaceWith(null);
      }
    } else if (key < this.key && this.left) {
      this.left.remove(key);
    } else if (key > this.key && this.right) {
      this.right.remove(key);
    } else {
      throw new Error("Key Error");
    }
  }
}

const searchTree = new BinarySearchTree();

searchTree.insert(3);
searchTree.insert(1);
searchTree.insert(4);
searchTree.insert(6);
searchTree.insert(9);
searchTree.insert(2);
searchTree.insert(5);
searchTree.insert(7);

const easyTree = new BinarySearchTree();

easyTree.insert("E");
easyTree.insert("A");
easyTree.insert("S");
easyTree.insert("Y");
easyTree.insert("Q");
easyTree.insert("U");
easyTree.insert("E");
easyTree.insert("S");
easyTree.insert("T");
easyTree.insert("I");
easyTree.insert("O");
easyTree.insert("N");
easyTree.findHeight();

//console.log(easyTree);

// 4. O(log(n))
// 5. find() ?
// 6.
