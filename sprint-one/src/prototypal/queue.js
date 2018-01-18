var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.line = 0;
  someInstance.inLine = 0;
  someInstance.outLine = 0;
  return someInstance;
};

var queueMethods = {};
// var  storage = {};
// var line = 0;
// var inLine = 0;
// var outLine = 0;

queueMethods.enqueue = function (value) {
  this.storage[this.inLine] = value;
  this.line++;
  this.inLine++;
};

queueMethods.dequeue = function () {
  var nextUp = this.storage[this.outLine];
  delete this.storage[this.outLine];
  if (this.line !== 0) {
    this.line--;  
  }
  this.outLine++;
  return nextUp;
};

queueMethods.size = function () {
  return this.line;
};


