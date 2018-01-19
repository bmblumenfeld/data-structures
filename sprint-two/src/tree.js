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
  if (this.value === target) {
    return true;
  }
  var recurseChildren = function(node) {
    return node.reduce(function (acc, element, index) {
      if (element.value === target) {
        acc = true;
      }
      if (element.children) {
        recurseChildren(element.children);
      } 
      return acc;
    }, false);
    // if (!searThat) {
    //   recurseChildren();
    // }
    
  };

  recurseChildren(this.children);
  
  // var inChildren = recurseChildren(this.children);
  // while (this.children && !inChildren){
    
  // } 
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
