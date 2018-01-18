var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.line = 0;
  this.inLine = 0;
  this.outLine = 0; 
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.inLine] = value;
  this.line++;
  this.inLine++;
};

Queue.prototype.dequeue = function () {
  var nextUp = this.storage[this.outLine];
  delete this.storage[this.outLine];
  if (this.line !== 0) {
    this.line--;  
  }
  this.outLine++;
  return nextUp;
};

Queue.prototype.size = function () {
  return this.line;
};

