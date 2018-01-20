var BinarySearchTree = function(value) {
  this.value = value;
  this.left;
  this.right;
};

BinarySearchTree.prototype.insert = function(value) {
  var newNode = new BinarySearchTree(value);
  var compareNode = function(comparison) {
    if (value > comparison.value) {
      if (comparison.right) {
        compareNode(comparison.right);
      } else {
        comparison.right = newNode;
      }
    } else {
      if (comparison.left) {
        compareNode(comparison.left);
      } else {
        comparison.left = newNode;
      }
    }
  };
  compareNode(this);
};

BinarySearchTree.prototype.contains = function(value) {

  var searchNode = function(comparison) {
    if (value === comparison.value) {
      return true;
    } else if (value > comparison.value) {
      if (comparison.right) {
        return searchNode(comparison.right);
      } else {
        return false;
      }
    } else {
      if (comparison.left) {
        return searchNode(comparison.left);
      } else {
        return false;
      }
    }
  };
  return searchNode(this);
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  var callOnNode = function(node) {
    cb(this.value);
    if (this.right) {
      callOnNode(this.right);
    } else if (this.left) {
      callOnNode(this.left);
    }    
  };
  callOnNode(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
