var Queue = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  // var order = Object.keys(storage).length;
  var line = 0;
  var inLine = 0;
  var outLine = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[inLine] = value;
    line++;
    inLine++;
  };

  someInstance.dequeue = function() {
    var nextUp = storage[outLine];
    delete storage[outLine];
    if (line !== 0) {
      line--;  
    }
    outLine++;
    return nextUp;
  };

  someInstance.size = function() {
    return line;
  };
  return someInstance;
};
