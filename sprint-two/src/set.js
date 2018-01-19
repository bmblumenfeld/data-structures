var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = null; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this[item]) {
    this[item] = true;
  }
};

setPrototype.contains = function(item) {
  if (this[item]) {
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item) {
  delete this[item];
};

/*
 * Complexity: Constant O(1);
 */
