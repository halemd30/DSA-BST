function _replaceWith(node) {
  if (this.parent) {
    if (this == this.parent.left) {
      this.parent.left = node;
    } else if (this == this.parent.right) {
      this.parent.right = node;
    }

    if (node) {
      node.parent = this.parent;
    }
  } else {
    if (node) {
      this.key = node.key;
      this.value = node.value;
      this.left = node.left;
      this.right = node.right;
    } else {
      this.key = null;
      this.value = null;
      this.left = null;
      this.right = null;
    }
  }
}

function _findMin() {
  if (!this.left) {
    return this;
  }
  return this.left._findMin();
}
