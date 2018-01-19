var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  if (this.value && this.value === target) {
    return true;
  }
  var recurseChildren = function(childrenItems) {
    return childrenItems.reduce(function (acc, element, index) {
      if (element.value === target) {
        return true;
      }
      if (element.children.length) {
        if (recurseChildren(element.children) === true) {
          return true;
        }
      } 
      return acc;
    }, false);
  };

  return recurseChildren(this.children);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
