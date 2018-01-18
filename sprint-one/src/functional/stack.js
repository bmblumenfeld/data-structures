var Stack = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  var stackCount = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    stackCount++;
    storage[stackCount] = value;
  };

  someInstance.pop = function() {
    var poppedVal = storage[stackCount + ''];
    delete storage.stackCount;
    if (stackCount !== 0) {
      stackCount -= 1;
    } 
    return poppedVal;
  };

  someInstance.size = function() {
    return stackCount;  
  };
  return someInstance;
};
