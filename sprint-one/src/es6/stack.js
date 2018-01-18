class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.stackCount = 0;
  }

  push (value) {
    this.stackCount++;
    this.storage[this.stackCount] = value;
  }
  
  pop () {
    var poppedVal = this.storage[this.stackCount + ''];
    delete this.storage[this.stackCount];
    if (this.stackCount !== 0) {
      this.stackCount -= 1;
    } 
    return poppedVal;
  }

  size () {
  return this.stackCount;	
  }

}




