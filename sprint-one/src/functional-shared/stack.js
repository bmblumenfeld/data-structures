var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.stackCount = 0;
  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size;
  return someInstance;
};

var storage = {}

var stackMethods = {}

stackMethods.push = function (value) {
  this.stackCount++;
  storage[this.stackCount] = value;
}

stackMethods.pop = function () {
   var poppedVal = storage[this.stackCount + ''];
    delete storage[this.stackCount];
    if (this.stackCount !== 0) {
      this.stackCount -= 1;
    } 
    return poppedVal;
}

stackMethods.size = function () {
  return this.stackCount;	
}

