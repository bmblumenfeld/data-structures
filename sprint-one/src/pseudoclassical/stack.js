var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.stackCount = 0;
};

Stack.prototype.push = function (value) {
  this.stackCount++;
  this.storage[this.stackCount] = value;
}

Stack.prototype.pop = function () {
   var poppedVal = this.storage[this.stackCount + ''];
    delete this.storage[this.stackCount];
    if (this.stackCount !== 0) {
      this.stackCount -= 1;
    } 
    return poppedVal;
}

Stack.prototype.size = function () {
  return this.stackCount;	
}


