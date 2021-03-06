var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  

  list.addToTail = function(value) {
    var inputTail = Node(value);

    if (list.tail === null ) {
      list.head = inputTail;
      list.tail = {};
      list.tail.next = inputTail;
      list.tail = inputTail;
      return; 
    }

    list.tail.next = inputTail; // Updates next of both first item in head and first item in tail
    // list.head.next.next.next.next = inputTail;
    list.tail = inputTail; // Resets tail to be new value, null
  };

  list.removeHead = function() {
    var removedHead = list.head;
    if (!removedHead.next) {
      list.head = null;
      list.tail = null; 
    } else {
      list.head = removedHead.next;
    } 
    return removedHead.value;
  };

  list.contains = function(target) {
    var currentHead = list.head;
    while (currentHead) {
      if (currentHead.value === target) {
        return true;
      }
      currentHead = currentHead.next;
    }
    return false; 
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

/*
addToTail: O(1)
removeHead: O(1)
contains: O(n)
*/
