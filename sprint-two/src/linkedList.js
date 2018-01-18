var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  var isFirst = true;

  list.addToTail = function(value) {
    //initialize a objvar  - call node and pass val given
    //objvar.next = list current tail
    //list.tail = obj.var
    var inputTail = Node(value);
    inputTail.next = list.head;

    list.tail = inputTail;

    if (isFirst) {
      list.head = inputTail;
      isFirst = false; 
    }
  };

  list.removeHead = function() {
    var removedHead = list.head;
    if (!removedHead.next) {
      list.head = null;
    } else {
      list.head = removedHead.next;
    } 
    return removedHead.value;
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
