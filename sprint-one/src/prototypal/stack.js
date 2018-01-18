var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.stackCount = 0;
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.stackCount++;
  this.storage[this.stackCount] = value;
}

stackMethods.pop = function () {
   var poppedVal = this.storage[this.stackCount + ''];
    delete this.storage[this.stackCount];
    if (this.stackCount !== 0) {
      this.stackCount -= 1;
    } 
    return poppedVal;
}

stackMethods.size = function () {
  return this.stackCount;	
}



