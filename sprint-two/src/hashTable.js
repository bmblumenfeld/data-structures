

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tup = [k, v];
  var indexBucket = this._storage.get(index);
  if (indexBucket) {
    indexBucket.push(tup);
  } else {
    this._storage.set(index, []);
    this._storage.get(index).push(tup);
    //indexBucket.push(tup);
  } 
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var indexBucket = this._storage.get(index);
  var value;
  if (!indexBucket) {
    return;
  }
  indexBucket.forEach(function(tup, bucketIndex) {
    if (tup[0] === k) {
      value = tup[1];
    }
  });
  return value;

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var indexBucket = this._storage.get(index);
  indexBucket.forEach(function(tup, bucketIndex) {
    if (tup[0] === k) {
      indexBucket.splice(bucketIndex, 1);
    }
  });
  if (!indexBucket.length) {
    this._storage.set(index, undefined);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


